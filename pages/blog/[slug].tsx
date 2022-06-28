import * as React from 'react';
import PortableText from "react-portable-text";

import Page from "../../templates/Page";
import client from "../../client";
import Image from "next/image";

const PostPage = ({ post }: any) => {
    const {
        author,
        body,
        publishedAt,
        relatedUrl,
        thumbnail,
        title,
    } = post;

    const {
        metadata: {
            dimensions: {
                height,
                width
            }
        }
    } = thumbnail;

    const { meta } = relatedUrl;

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
        title={meta.title}
        description={meta.description}
        canonicalUrl={relatedUrl.url}
    >
        <main>
            <h1>{ title }</h1>

            {author && publishedAt && <small>
                Published by {author.name}, on {publishedAt}.
            </small>}

            {thumbnail && <figure>
                <Image
                    alt={title}
                    src={thumbnail.url}
                    height={height}
                    width={width}
                />

                <figcaption>
                </figcaption>
            </figure>}

            {body && <PortableText
                content={body}
                serializers={serializers}
            />}

            {author && <section>
                <h2>{author.name}</h2>

                {author.bio && <PortableText
                    content={author.bio}
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