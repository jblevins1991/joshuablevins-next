import * as React from "react";
import Link from 'next/link';
import { dehydrate, QueryClient, useQuery } from "react-query";
import {
  Typography
} from "styless-react";

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
    getPosts
  );
  
  return <PageTemplate
    description={'Joshua Blevins - Veteran react developer based out of Michigan with special interests in web accessibility, user experience, and best practices.'}
    title={'Veteran React Developer - Joshua Blevins'}
    canonicalUrl={String(process.env.NEXT_HOSTNAME)}
  >
    <main>
      <section>
        <h1 className={'hero-heading'}>Joshua Blevins</h1>

        <Typography className={'hero-description'}>
          Veteran React developer based out of Michigan with special interests in web accessibility,
          user experience, and clean coding practices.
        </Typography>
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

        <Link href={'/blog'}>
          <a aria-label={'Navigate to my blog.'} href={'/blog'}>
            view all
          </a>
        </Link>
      </section>
    </main>
  </PageTemplate>;
};

export async function getStaticProps(context: any) {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery(
      'getPostsForBlogPage',
      getPosts
  );

  return {
      props: {
          dehydratedState: dehydrate(queryClient)
      }
  }
}

export default IndexPage
