import * as React from 'react';
import PortableText from "react-portable-text";

import Page from "../../templates/Page";
import client from "../../client";

// @ts-ignore
const PostPage = ({ post: postProp }) => {

    const post = postProp[0];

    return <Page
        title={post.title}
        description={post.description}
    >
        <main>
            {post.body && <>
                <h1>{ post.title }</h1>

                {/*<small>*/}
                {/*    Published by {author}, on {publishedDate}.*/}
                {/*</small>*/}

                <PortableText
                    serializers={{
                        h1: ({children}: any) => <h1>{children}</h1>,
                        h2: ({children}: any) => <h2>{children}</h2>,
                        h3: ({children}: any) => <h3>{children}</h3>,
                        h4: ({children}: any) => <h4>{children}</h4>,
                        normal: ({children}: any) => <p>{children}</p>,
                    }}
                    content={post.body}
                />
            </>}
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