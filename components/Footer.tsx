import * as React from 'react';

import { useQueries, useQuery } from 'react-query';
import Link from 'next/link';
import { ListItem, Typography, UnorderedList } from 'styless-react';

import { getAllProjects, getCategories } from '../queries';

export interface FooterProps {}

export const Footer: React.FC<FooterProps> = ({}) => {
    const [categories, projects] = useQueries([
        { queryKey: ['getCategoriesForTemplate'], queryFn: getCategories },
        { queryKey: ['getAllProjects'], queryFn: getAllProjects }
    ])

    return <footer className={'footer'}>
        <section>
            <Typography variant='h2'>
                My OSS Projects
            </Typography>

            <UnorderedList>
            {
                projects?.data && projects?.data.map((project: any, index: number) => {
                    const {
                        name,
                        url
                    } = project;

                    return <ListItem key={name}>
                    <Link href={url}>
                        { name }
                    </Link>
                </ListItem>;
                })
            }
            </UnorderedList>
        </section>

        <section>
            <Typography variant='h2'>
                Blog Categories
            </Typography>

            <UnorderedList>
                {
                    categories?.data && categories?.data.map((category: any, index: number) => {
                        const {
                            _id,
                            title,
                            postCount
                        } = category;

                        if (postCount === 0) {
                            return null;
                        }

                        return <ListItem key={index}>
                            <Link href={`/blog/category/${_id}`}>
                                { title }
                            </Link>

                            <span aria-label={`The ${title} category has ${postCount} articles.`}>
                                { postCount }
                            </span>
                        </ListItem>;
                    })
                }
            </UnorderedList>
        </section>

        <section>
            <Typography variant='h2'>
                Additional Links
            </Typography>

            <UnorderedList>
                    <ListItem>
                        <Link
                            href={'/privacy-policy'}
                        >
                            Privacy Policy
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Link
                            href={'/cookie-disclosure'}
                        >
                            Cookie Disclosure
                        </Link>
                    </ListItem>
                </UnorderedList>
        </section>
    </footer>;
};
