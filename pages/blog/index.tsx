import * as React from 'react';
import {useRouter} from "next/router";
import Link from "next/link";
import { dehydrate, QueryClient, useQueries, useQuery } from 'react-query';

import Page from "../../templates/Page";
import ArticleCard from "../../components/ArticleCard";

import { getAllPosts, getCategories } from '../../queries';
import { Breadcrumbs } from '../../components/Breadcrumbs';
import { ListItem, Typography, UnorderedList } from 'styless-react';


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
    // the index of the first post on the page
    const paginationStart = (pageNo - 1) * itemsPerPage;

    // the index of the last post on the page
    const paginationEnd = paginationStart + itemsPerPage;

    // slice the posts from sanity with the start and end indices
    const paginatedPosts = posts.slice(
        paginationStart,
        paginationEnd
    );

    return paginatedPosts;
}

// POSTS_PER_PAGE constant controls how many posts each page will render
const POSTS_PER_PAGE = 3;

const BlogIndexPage = () => {
    const { query } = useRouter();

    const [posts, categories] = useQueries([
        { queryKey: 'getPostsForBlogPage', queryFn: getAllPosts },
        { queryKey: 'getCategories', queryFn: getCategories }
    ]);

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
    }, [ query.page ]);

    /**
     * Memoized totalPages with an empty dependency array to only calculate
     * on the first render and not subsequent renders.
     *
     * This is to reduce the amount of calculations per re-render and leave
     * room for implementation of dynamic postsPerPage feature.
     */
    const totalPages = Math.round(posts?.data.length / POSTS_PER_PAGE);

    const paginatedPosts = paginatePosts(posts?.data, pageIndex, POSTS_PER_PAGE);

    return <Page
        description={'Articles about React, application development, and happiness advice in the tech industry.'}
        title={'Web Development Blog - Joshua Blevins'}
    >
        
        <div className='content-wrapper'>
            <Breadcrumbs />

            <Typography variant='h1'>
                Blog
            </Typography>

            <div className={'root-container'}>
                <main>
                    <Typography variant='h2'>
                        Articles
                    </Typography>
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

                <aside>
                    <Typography variant='h2'>
                        Categories
                    </Typography>

                    <UnorderedList>
                        {
                            categories?.data && categories?.data.map((category: any) => {
                                return <ListItem>
                                    <Link href={`/blog/category/${category._id}`}>
                                        { category.title }
                                    </Link>
                                </ListItem>
                            })
                        }
                    </UnorderedList>
                </aside>
            </div>
        </div>
    </Page>;
};

export async function getStaticProps(context: any) {
    const queryClient = new QueryClient();
    
    await queryClient.prefetchQuery(
        'getPostsForBlogPage',
        getAllPosts
    );

    await queryClient.prefetchQuery(
        'getCategories',
        getCategories
    );

    return {
        props: {
            dehydratedState: dehydrate(queryClient)
        }
    };
}

export default BlogIndexPage;
