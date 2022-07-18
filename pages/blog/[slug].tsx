import * as React from 'react';
import { dehydrate, QueryClient, useQuery } from 'react-query';
import { format } from 'date-fns';

import Image from 'next/image';
import Link from "next/link";
import PortableText from 'react-portable-text';

import {
    Card,
    ListItem,
    Typography,
    UnorderedList
} from "styless-react";

import Page from "../../templates/Page";

import { Breadcrumbs } from '../../components/Breadcrumbs';
import { getPostBySlug } from '../../queries'

const PostPage = ({ slug }: any) => {
    const {
        data: post,
        isLoading,
        isError
    } = useQuery(
        ['getPostBySlug', slug],
        () => getPostBySlug(slug)
    );

    const serializers = {
        h1: ({children}: any) => <Typography variant='h1'>{children}</Typography>,
        h2: ({children}: any) => <Typography variant='h2'>{children}</Typography>,
        h3: ({children}: any) => <Typography variant='h3'>{children}</Typography>,
        h4: ({children}: any) => <Typography variant='h4'>{children}</Typography>,
        h5: ({children}: any) => <Typography variant='h5'>{children}</Typography>,
        h6: ({children}: any) => <Typography variant='h6'>{children}</Typography>,
        del: ({children}: any) => <del>{children}</del>,
        image: ({ asset }: any) => {
            return <>
                {asset && <figure>
                    <Image
                        alt={''}
                        className='blog-image'
                        height={asset?.metadata.dimensions.height || 0}
                        src={asset?.url || ''}
                        width={asset?.metadata.dimensions.width || 0}
                    />

                    <figcaption className='blog-image-caption'>
                        {''}
                    </figcaption>
                </figure>}
            </>
        },
        link: ({children, href}: any) => {
            // @todo: adopt a better way to handle no follow links
            const hasNoFollow = href.startsWith('http', 0);

            return <Link href={href}>
                <a
                    {...(hasNoFollow && {
                        target: '_blank',
                        rel: 'nofollow'
                    })}
                >
                    { children }
                </a>
            </Link>;
        },
        normal: ({children}: any) => <Typography>{children}</Typography>,
        small: ({children}: any) => <small>{children}</small>,
        code: ({children}: any) => <code>{children}</code>,
    };

    return <Page
        title={`${post?.relatedUrl?.meta.title || post.title} - Joshua Blevins`}
        description={post?.relatedUrl?.meta.description || ''}
    >
        <main>
            <Breadcrumbs />

            <Typography variant='h1'>{ post.title }</Typography>

            {!!post.author && post.publishedAt && <small>
                Published by {post.author.name}, on {format(new Date(post.publishedAt), 'PP')}.
            </small>}

            {!!post.thumbnail && <figure>
                <Image
                    alt={post.title}
                    src={post.thumbnail.url}
                    height={post.thumbnail.metadata.dimensions.height}
                    width={post.thumbnail.metadata.dimensions.width}
                />

                <figcaption>
                </figcaption>
            </figure>}

            {post.body && <PortableText
                content={post.body}
                serializers={serializers}
            />}

            {post.author && <Card className='author'>
                <Typography variant='h2'>{post.author.name}</Typography>

                {post.author.bio && <PortableText
                    content={post.author.bio}
                    serializers={serializers}
                />}
            </Card>}
        </main>
    </Page>;
};

export async function getServerSideProps(context: any) {
    const {slug} = context.params;

    const queryClient = new QueryClient();
    
    await queryClient.prefetchQuery(
        ['getPostBySlug', slug],
        () => getPostBySlug(slug)
    );

    return {
        props: {
            slug,
            dehydratedState: dehydrate(queryClient)
        }
    };
}

export default PostPage;