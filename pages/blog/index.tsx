import * as React from 'react';
import Link from "next/link";

import Page from "../../templates/Page";
import ArticleCard from "../../components/ArticleCard";
import {firstParagraphToExcerpt} from "../../utils/firstParagraphToExcerpt";

import client from "../../client";
import {useRouter} from "next/router";

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

// POSTS_PER_PAGE constant controlls how many posts each page will render
const POSTS_PER_PAGE = 3;

const BlogIndexPage = ({ posts }: any) => {
    const { query } = useRouter();

    const pageIndex = !!query.page && Number(query.page) > 0
        ? Number(query.page)
        : 1;

    const paginatedPosts = React.useMemo(() => {
        return paginatePosts(posts, pageIndex, POSTS_PER_PAGE);
    }, [
        pageIndex
    ]);

    React.useEffect(() => {
        console.log('page index: ', pageIndex);
    }, [pageIndex]);

    const totalPages = Math.round(posts.length / POSTS_PER_PAGE);

    return <Page
        description={'Articles about React and application development.'}
        title={'Blog'}
        canonicalUrl={`${process.env.NEXT_HOSTNAME}/blog`}
    >
        <main>
            <h1>Blog</h1>

            {
                paginatedPosts.map((post: any) => {
                    const excerpt = firstParagraphToExcerpt(post?.body?.[0]?.children[0].text || '');

                    return <ArticleCard
                        key={post.title}
                        title={post.title}
                        description={excerpt}
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
    const posts = await client.fetch(
        `*[_type == "post"]{relatedUrl,
            slug,
            title,
            "thumbnail": mainImage.asset->{
                extension,
                metadata,
                mimeType,
                url,
                sha1hash,
            },
            _createdAt,
            publishedAt,
            _updatedAt,
            categories[]->{
                _id,
                title,
                "count": count(*[_type == "post" && ^.title in categories[]->title])
            },
            body
        }`
    );

    console.log(posts[0].categories);

    return {
        props: {
            posts: posts || [],
        }
    }
}

export default BlogIndexPage;
