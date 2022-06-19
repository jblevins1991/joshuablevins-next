import * as React from 'react';
import PageTemplate from "./Page";

export interface BlogTemplateProps {
    slug: string;
    title: string;
    author: string;
    publishedDate: string;
}

const BlogTemplate: React.FC<BlogTemplateProps> = ({
    slug,
    title,
    author,
    publishedDate,
}) => {
    return <PageTemplate
        canonicalUrl={`https://www.joshuablevins.net/blog/${slug}`}
        title={title}
    >
        <h1>{ title }</h1>

        <small>
            Published by {author}, on {publishedDate}.
        </small>
    </PageTemplate>
};

export default BlogTemplate;