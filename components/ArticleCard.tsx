import * as React from 'react';
import clsx from "clsx";
import Link from 'next/link';

export interface ArticleCardProps {
    title: string;
    description: string;
    slug: string;
}

const ArticleCard: React.FC<ArticleCardProps> = ({
    title,
    description,
    slug,
}) => {
    return <Link
        href={`/blog/${slug}`}
    >
        <a className={'article-link'} aria-label={`Read about ${title.toLowerCase()}`}>
            <article className={clsx('article', 'card')}>
                <h2>{ title }</h2>

                <p>
                    { description }
                </p>
            </article>
        </a>
    </Link>;
};

export default ArticleCard;