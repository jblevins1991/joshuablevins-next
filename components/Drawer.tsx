import * as React from 'react';
import Link from "next/link";
import {NavigationItem} from "./Header";

export interface DrawerProps {
    navItems: NavigationItem[];
}

const Drawer: React.FC<DrawerProps> = ({
    navItems,
}) => {
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