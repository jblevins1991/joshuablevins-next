import * as React from 'react';
import { dehydrate, QueryClient, useQuery } from 'react-query';
import { Typography } from 'styless-react';

import PageTemplate from '../../../templates/Page';
import ArticleCard from '../../../components/ArticleCard';

import {
    getPostsByCategory
} from '../../../queries';

const CategoryPage = ({
    category
}: any) => {
    const {
        data: posts,
        isLoading,
        isError
    } = useQuery(
        ['getPostsByCategory', category],
        () => getPostsByCategory(category)
    );

    return <>
        <PageTemplate
            title=''
            description=''
        >
            <main>
                <Typography variant='h1'>
                    Articles
                </Typography>

                {
                    posts && posts.map((post: any, index: number) => {
                        return <ArticleCard
                            key={post.title}
                            title={post.title}
                            description={post?.body?.[0]?.children[0].text || ''}
                            slug={post.slug.current}
                        />;
                    })
                }
            </main>
        </PageTemplate>
    </>
};

export async function getServerSideProps(context: any) {
    const {category} = context.params;

    const queryClient = new QueryClient();
    
    await queryClient.prefetchQuery(
        ['getPostsByCategory', category],
        () => getPostsByCategory(category)
    );

    return {
        props: {
            category,
            dehydratedState: dehydrate(queryClient)
        }
    };
}

export default CategoryPage;