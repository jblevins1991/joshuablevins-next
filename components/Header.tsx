import * as React from 'react';
import Link from "next/link";
import Image from 'next/image';
import {useRouter} from "next/router";

export interface HeaderProps {
    navItems: NavigationItem[];
}

export interface NavigationItem {
    label: string;
    a11yLabel: string;
    uri: string;
}

const Header: React.FC<HeaderProps> = ({
    navItems,
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
                    return <li
                        aria-current={navItem.uri === router.pathname}
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
    </header>
};

export default Header;