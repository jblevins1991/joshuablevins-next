import * as React from 'react';

import Page from "../../templates/Page";
import client from "../../client";
import ArticleCard from "../../components/ArticleCard";
import {firstParagraphToExcerpt} from "../../utils/firstParagraphToExcerpt";

// @ts-ignore
const BlogIndexPage = ({ posts }) => {
    return <Page
        description={'Articles about React and application development.'}
        title={'Blog'}
    >
        <main>
            <h1>Blog</h1>

            {
                posts.map((post: any) => {
                    const excerpt = firstParagraphToExcerpt(post.body[0].children[0].text);

                    return <ArticleCard
                        key={post.title}
                        title={post.title}
                        description={excerpt}
                        slug={post.slug.current}
                    />;
                })
            }
        </main>
    </Page>
};

export async function getStaticProps(context: any) {
    const posts = await client.fetch(
        `*[_type == "post"][1...3]`
    );

    return {
        props: {
            posts
        }
    }
}

export default BlogIndexPage;
