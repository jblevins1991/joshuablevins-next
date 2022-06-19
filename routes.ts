import {NavigationItem} from "./components/Header";

const routes: NavigationItem[] = [
    {
        a11yLabel: 'Navigate to the home page.',
        label: 'Home',
        uri: '/'
    },
    {
        a11yLabel: 'Navigate to my blog.',
        label: 'Blog',
        uri: '/blog'
    },
    {
        a11yLabel: 'Navigate to the about me page.',
        label: 'About',
        uri: '/about'
    },
];

export default routes;
