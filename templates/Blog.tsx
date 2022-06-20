import * as React from 'react';
import PageTemplate from "./Page";

export interface BlogTemplateProps {
    slug: string;
    title: string;
    author: string;
    description: string;
    publishedDate: string;
}

const BlogTemplate: React.FC<BlogTemplateProps> = ({
    slug,
    title,
    author,
    publishedDate,
    description,
}) => {
    return <PageTemplate
        description={description}
        title={title}
    >
    </PageTemplate>
};

export default BlogTemplate;