import * as React from 'react';
import PortableText from "react-portable-text";
import Image from "next/image";
import Link from "next/link";
import {
  ListItem,
  Typography,
  UnorderedList
} from "styless-react";

import Page from "../../templates/Page";
import client from "../../client";

const PostPage = ({ post }: any) => {
    if (!post) {
        return null;
    }

    const serializers = {
        h1: ({children}: any) => <Typography variant='h1'>{children}</Typography>,
        h2: ({children}: any) => <Typography variant='h2'>{children}</Typography>,
        h3: ({children}: any) => <Typography variant='h3'>{children}</Typography>,
        h4: ({children}: any) => <Typography variant='h4'>{children}</Typography>,
        h5: ({children}: any) => <Typography variant='h5'>{children}</Typography>,
        h6: ({children}: any) => <Typography variant='h6'>{children}</Typography>,
        del: ({children}: any) => <del>{children}</del>,
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
        img: ({alt, src}: any) => <figure>
            <Image alt={alt} src={src} />

            <figcaption>
                {alt}
            </figcaption>
        </figure>,
    };

    return <Page
        title={`${post?.relatedUrl?.meta.title || post.title} - Joshua Blevins`}
        description={post?.relatedUrl?.meta.description || ''}
        canonicalUrl={post?.relatedUrl?.url || ''}
    >
        <main>
            <h1>{ post.title }</h1>

            {!!post.author && post.publishedAt && <small>
                Published by {post.author.name}, on {post.publishedAt}.
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

            {post.author && <section>
                <h2>{post.author.name}</h2>

                {post.author.bio && <PortableText
                    content={post.author.bio}
                    serializers={serializers}
                />}
            </section>}
        </main>
    </Page>;
};

export async function getStaticPaths() {
    const paths = await client.fetch(
        `*[_type == "post" && defined(slug.current)][].slug.current`
    );

    return {
        paths: paths.map((slug: any) => ({params: {slug}})),
        fallback: true,
    };
}

export async function getStaticProps(context: any) {
    const {slug} = context.params;

    const s = `
    `

    /**
     * Fetch details for specific blog post by the slug of the page.
     */
    const post = await client.fetch(
        `
        *[_type == "post" && slug.current == "${slug}"]{
            relatedUrl,
            slug,
            title,
            "thumbnail": mainImage.asset->{
                extension,
                metadata,
                mimeType,
                url,
                sha1hash,
            },
            author->{
                bio[],
                name,
                slug
            },
            _createdAt,
            publishedAt,
            _updatedAt,
            categories[]->{
              title
            },
            body
        }`
    );

    return {
        props: {
            post: post[0] || {}
        }
    };
}

export default PostPage;