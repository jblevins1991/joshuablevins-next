import * as React from 'react';

import Head from 'next/head';
import {useRouter} from "next/router";
import {useSpring} from "@react-spring/core";

import Header from "../components/Header";
import Footer from "../components/Footer";
import Drawer from "../components/Drawer";
import routes from "../routes";

export interface PageTemplateProps {
    canonicalUrl: string;
    children: React.ReactNode;
    description: string;
    title: string;
}

const PageTemplate: React.FC<PageTemplateProps> = ({
    canonicalUrl,
    children,
    description,
    title,
}) => {
    const router = useRouter();
    const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setIsDrawerOpen(!isDrawerOpen);
    }

    const routeParts = router.pathname !== '/'
        ? router.pathname.split('/')
        : [];

    return <>
        <Head>
            <meta charSet='utf-8' />
            <title>{ title }</title>
            <meta name={'description'} content={description} />
            <link rel='canonical' href={canonicalUrl} />
        </Head>

        <Header
            isDrawerOpen={isDrawerOpen}
            navItems={routes}
            setIsDrawerOpen={handleDrawerToggle}
        />

        <div className={'breadcrumb-wrapper'}>
            <ol className={'breadcrumbs'}>
            {
                routeParts !== [ '', '' ] && routeParts.map((pathPart, index) => {
                    if (pathPart === '') {
                        return <li key={index}>
                            <a href={'/'}>
                                Home
                            </a>
                        </li>;
                    }

                    const capitalizedPathPart = pathPart[0].toUpperCase() + pathPart.substring(1);
                    const capitalizedSlug = router.query?.slug && (router.query.slug as string)?.substring
                        ? router.query.slug[0].toUpperCase() + (router.query.slug as string).substring(1)
                        : '';

                    if (index === router.pathname.split('/').length - 1) {
                        return <li key={index}>
                            { capitalizedSlug.replace('-', ' ') || capitalizedPathPart }
                        </li>
                    }

                    return <li key={index}>
                        <a href={`/${pathPart}`}>
                            { capitalizedPathPart }
                        </a>
                    </li>
                })
            }
            </ol>
        </div>

        <Drawer
            navItems={routes}
            setOpen={setIsDrawerOpen}
            open={isDrawerOpen}
        />

        { children }

        <Footer />
    </>
};

export default PageTemplate;
