import * as React from "react";
import Link from 'next/link';
import { useQuery } from "react-query";

import ArticleCard from "../components/ArticleCard";
import PageTemplate from "../templates/Page";

import { getPosts } from "../queries";

const IndexPage = ({ posts }: any) => {
  const postsPerPage = 3;

  const {
    data: fetchedPosts,
    isError,
    isLoading
  } = useQuery(
    ['getPostsForHomePage', postsPerPage],
    getPosts,
    { initialData: posts }
  );
  
  return <PageTemplate
    description={'Joshua Blevins - Veteran react developer based out of Michigan with special interests in web accessibility, user experience, and best practices.'}
    title={'Veteran React Developer - Joshua Blevins'}
    canonicalUrl={String(process.env.NEXT_HOSTNAME)}
  >
    <main>
      <section>
        <h1 className={'hero-heading'}>Joshua Blevins</h1>

        <p className={'hero-description'}>
          Veteran React developer based out of Michigan with special interests in web accessibility,
          user experience, and clean coding practices.
        </p>
      </section>

      <section className={'home-blog'}>
        <h2>Blog</h2>

        <div className={'home-articles'}>
          {
            isLoading && <>LOADING</>
          }
          {
            isError && <>ERROR</>
          }
          {
            fetchedPosts &&
            !isError &&
            !isLoading &&
            fetchedPosts.map((post: any) => {
                return <ArticleCard
                    key={post.title}
                    title={post.title}
                    description={post?.body?.[0]?.children[0].text || ''}
                    slug={post.slug.current}
                />;
              })
          }
        </div>

        <Link
            aria-label={'Navigate to my blog.'}
            href={'/blog'}
        >
          view all
        </Link>
      </section>
    </main>
  </PageTemplate>;
};

export async function getStaticProps(context: any) {
    const posts = await getPosts();

    return {
        props: {
            posts: posts || [],
        }
    }
}

export default IndexPage
