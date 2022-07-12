import * as React from 'react';
import {useRouter} from "next/router";
import Link from "next/link";
import { useQuery } from 'react-query';

import Page from "../../templates/Page";
import ArticleCard from "../../components/ArticleCard";

import { getAllPosts } from '../../queries';


/**
 * 1-based pagination that slices the currently desired posts from the array of posts.
 *
 * @param posts - an array of posts from the cms
 * @param pageNo - the current page number
 * @param itemsPerPage - the number of posts per page
 */
function paginatePosts(
    posts: any[],
    pageNo: number,
    itemsPerPage: number
) {
    const paginationStart = (pageNo - 1) * itemsPerPage;
    const paginationEnd = paginationStart + itemsPerPage;

    const paginatedPosts = posts.slice(
        paginationStart,
        paginationEnd
    )

    return paginatedPosts;
}

// POSTS_PER_PAGE constant controls how many posts each page will render
const POSTS_PER_PAGE = 3;

const BlogIndexPage = ({ posts }: any) => {
    const { query } = useRouter();

    const {
        data: fetchedPosts,
        isError,
        isLoading
    } = useQuery(
        ['getPostsForBlogPage'],
        getAllPosts,
        { initialData: posts }
    );

    /**
     * Memoized the pageIndex as it depends on the router's query object.
     *
     * This helps reduce unnecessary re-calculation of the user's current
     * page. It only changes when query.page is changed.
     */
    const pageIndex = React.useMemo(() => {
        return !!query.page && Number(query.page) > 0
            ? Number(query.page)
            : 1
    }, [
        query.page
    ]);

    /**
     * Memoized totalPages with an empty dependency array to only calculate
     * on the first render and not subsequent renders.
     *
     * This is to reduce the amount of calculations per re-render and leave
     * room for implementation of dynamic postsPerPage feature.
     */
    const totalPages = React.useMemo(() => {
        return Math.round(posts.length / POSTS_PER_PAGE);
    }, []);

    const paginatedPosts = paginatePosts(fetchedPosts, pageIndex, POSTS_PER_PAGE);

    return <Page
        description={'Articles about React, application development, and happiness advice in the tech industry.'}
        title={'Web Development Blog - Joshua Blevins'}
        canonicalUrl={`${process.env.NEXT_HOSTNAME}/blog`}
    >
        <main>
            <h1>Blog</h1>

            {
                isLoading && <>LOADING</>
            }
            {
                isError && <>ERROR</>
            }
            {
                paginatedPosts.map((post: any) => {
                    return <ArticleCard
                        key={post.title}
                        title={post.title}
                        description={post?.body?.[0]?.children[0].text || ''}
                        slug={post.slug.current}
                    />;
                })
            }

            <div>
                { pageIndex > 1 && <Link href={`/blog?page=${pageIndex - 1}`}>
                    Previous posts
                </Link>}

                { pageIndex < totalPages && <Link href={`/blog?page=${pageIndex + 1}`}>
                    Next posts
                </Link>}
            </div>
        </main>
    </Page>
};

export async function getStaticProps(context: any) {
    const posts = await getAllPosts();

    console.log(posts);

    return {
        props: {
            posts: posts || [],
        }
    }
}

export default BlogIndexPage;
