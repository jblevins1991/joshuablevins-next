import * as React from 'react';
import Page from "../../templates/Page";
import {useRouter} from "next/router";
import client from "../../client";
import {PortableText} from "@portabletext/react";

// @ts-ignore
const PostPage = ({ post }) => {
    const router = useRouter();

    console.log(post)

    return <Page
        title={post.title}
        description={post.description}
        canonicalUrl={router.pathname}
    >
        <main>
            <PortableText
                value={post.body}
            />
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

    const post = await client.fetch(
        `*[_type == "post" && slug.current == "${slug}"]{...}`
    );

    return {
        props: {
            post
        }
    };
}

export default PostPage;