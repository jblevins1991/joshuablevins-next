import * as React from "react";
import Link from 'next/link';

import ArticleCard from "../components/ArticleCard";
import PageTemplate from "../templates/Page";
import client from "../client";
import {firstParagraphToExcerpt} from "../utils/firstParagraphToExcerpt";

const IndexPage = ({ posts }: any) => {
  return <PageTemplate
    description={'Joshua Blevins - veteran react developer with special interests in web accessibility, user experience, and clean coding practices.'}
    title={'Home'}
    canonicalUrl={String(process.env.NEXT_HOSTNAME)}
  >
    <main>
      <section>
        <h1 className={'hero-heading'}>Joshua Blevins</h1>

        <p className={'hero-description'}>
          Veteran React developer with special interests in web accessibility,
          user experience, and clean coding practices.
        </p>
      </section>

      <section className={'home-blog'}>
        <h2>Blog</h2>

        <div className={'home-articles'}>
        {
          posts && posts.map((post: any) => {
              // const excerpt = firstParagraphToExcerpt(post.body[0].children[0].text);

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
  const posts = await client.fetch(
      `*[_type == "post"][0...3]`
  );

  return {
    props: {
      posts: posts || []
    }
  }
}

export default IndexPage
