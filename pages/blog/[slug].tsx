import * as React from 'react';
import PortableText from "react-portable-text";

import Page from "../../templates/Page";
import client from "../../client";
import Image from "next/image";

const PostPage = ({ post }: any) => {
    if (!post) {
        return null;
    }

    const serializers = {
        h1: ({children}: any) => <h1>{children}</h1>,
        h2: ({children}: any) => <h2>{children}</h2>,
        h3: ({children}: any) => <h3>{children}</h3>,
        h4: ({children}: any) => <h4>{children}</h4>,
        h5: ({children}: any) => <h5>{children}</h5>,
        h6: ({children}: any) => <h6>{children}</h6>,
        del: ({children}: any) => <del>{children}</del>,
        link: ({children, href}: any) => <a href={href}>{children}</a>,
        normal: ({children}: any) => <p>{children}</p>,
        small: ({children}: any) => <small>{children}</small>,
        code: ({children}: any) => <code>{children}</code>,
        img: ({alt, src}: any) => <figure>
            <img alt={alt} src={src} />
            <figcaption>
                {alt}
            </figcaption>
        </figure>,
    };

    return <Page
        title={post.relatedUrl.meta.title || post.title}
        description={post.relatedUrl.meta.description || ''}
        canonicalUrl={post.relatedUrl.url || ''}
    >
        <main>
            <h1>{ post.title }</h1>

            {post.author && post.publishedAt && <small>
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