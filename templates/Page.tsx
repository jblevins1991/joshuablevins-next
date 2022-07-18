import * as React from 'react';
import Head from 'next/head';

import {Header} from "../components/Header";
import {Footer} from "../components/Footer";
import {Drawer} from "../components/Drawer";
import routes from "../routes";

export interface PageTemplateProps {
    canonicalUrl?: string;
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
    const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setIsDrawerOpen(!isDrawerOpen);
    }

    return <>
        <Head>
            <meta charSet='utf-8' />
            <title>{ title }</title>
            <meta name={'description'} content={description} />
            {canonicalUrl && <link rel='canonical' href={canonicalUrl} />}
        </Head>

        <Header
            isDrawerOpen={isDrawerOpen}
            navItems={routes}
            setIsDrawerOpen={handleDrawerToggle}
        />

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
