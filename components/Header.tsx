import * as React from 'react';
import Link from "next/link";
import Image from 'next/image';
import {useRouter} from "next/router";

export interface HeaderProps {
    isDrawerOpen: boolean;
    navItems: NavigationItem[];
    setIsDrawerOpen: () => void;
}

export interface NavigationItem {
    label: string;
    a11yLabel: string;
    uri: string;
}

const Header: React.FC<HeaderProps> = ({
    isDrawerOpen,
    navItems,
    setIsDrawerOpen,
}) => {
    const router = useRouter();

    return <header className={'header'}>
        {/*<Link href={'/'}>*/}
        {/*    <Image alt={'Return to the home page.'} image={""} />*/}
        {/*</Link>*/}

        <nav className={'desktop-navigation'}>
            <ul>
            {
                navItems.map(navItem => {
                    const isCurrent = navItem.uri === "/"
                        ? router.pathname === "/"
                        : router.pathname.substring(1).startsWith(navItem.uri.substring(1));

                    return <li
                        aria-current={isCurrent}
                        aria-label={navItem.a11yLabel}
                        className={'navigation-item'}
                        key={navItem.label}
                    >
                        <Link href={navItem.uri}>
                            { navItem.label }
                        </Link>
                    </li>;
                })
            }
            </ul>
        </nav>

        <button
            onClick={setIsDrawerOpen}
        >
            Nav
        </button>
    </header>
};

export default Header;