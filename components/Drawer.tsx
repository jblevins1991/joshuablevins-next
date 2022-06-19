import * as React from 'react';
import Link from "next/link";
import {useRouter} from "next/router";

import {NavigationItem} from "./Header";

export interface DrawerProps {
    navItems: NavigationItem[];
    open: boolean;
}

const Drawer: React.FC<DrawerProps> = ({
    navItems,
    open,
}) => {
    const location = useRouter();

    if (!open) return null;

    return <nav className={'drawer'}>
        <ul>
        {
            navItems.map(navItem => {
                return <li
                    aria-current={navItem.uri === location.pathname}
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
    </nav>;
};

export default Drawer;