import * as React from 'react';

import Head from 'next/head';
import {useRouter} from "next/router";

import Header from "../components/Header";
import Footer from "../components/Footer";
import Drawer from "../components/Drawer";
import routes from "../routes";

export interface PageTemplateProps {
    children: React.ReactNode;
    description: string;
    title: string;
}

const PageTemplate: React.FC<PageTemplateProps> = ({
    children,
    description,
    title,
}) => {
    const router = useRouter();
    const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setIsDrawerOpen(!isDrawerOpen);
    }

    const handleDrawerClose = () => {
        setIsDrawerOpen(false);
    }

    return <>
        <Head>
            <meta charSet='utf-8' />
            <title>{ title }</title>
            <meta name={'description'} content={description} />
            <link rel='canonical' href={`${process.env.NEXT_HOSTNAME}${router.pathname}`} />
        </Head>

        <Header
            isDrawerOpen={isDrawerOpen}
            navItems={routes}
            setIsDrawerOpen={handleDrawerToggle}
        />

        <Drawer navItems={routes} open={isDrawerOpen} />

        { children }

        <Footer />
    </>
};

export default PageTemplate;
