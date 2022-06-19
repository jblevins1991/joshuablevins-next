import * as React from 'react';
import Page from "../../templates/Page";
import {useRouter} from "next/router";
import client from "../../client";

// @ts-ignore
const PostPage = ({ post }) => {
    const router = useRouter();

    return <Page
        title={post.title}
        description={''}
        canonicalUrl={router.pathname}
    >
        <main>
            { router.pathname }
        </main>
    </Page>;
};

export async function getStaticPaths() {
    const paths = await client.fetch(
        `*[_type == "post" && defined(slug.current)][].slug.current`
    )

    return {
        paths: paths.map((slug: any) => ({params: {slug}})),
        fallback: true,
    }
}

export async function getStaticProps(context: any) {
    const slug = context.params.slug;

    console.log('slug', slug);

    const post = await client.fetch(
        `*[_type == "post" && slug.current == "${slug}"]{...}`
    );

    console.log(post);

    return {
        props: {
            post
        }
    }
}

export default PostPage;