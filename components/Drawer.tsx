import * as React from 'react';
import {useRouter} from "next/router";
import { Button, ListItem, UnorderedList } from 'styless-react';
import Link from "next/link";
import Image from "next/image";

import {NavigationItem} from "./Header";

export interface DrawerProps {
    navItems: NavigationItem[];
    setOpen: React.Dispatch<boolean>;
    open: boolean;
}

const Drawer: React.FC<DrawerProps> = ({
    navItems,
    setOpen,
    open,
}) => {
    const location = useRouter();

    if (!open) return null;

    return <nav className={'drawer'}>
        <Button onClick={() => setOpen(false)}>
            <Image
                aria-label={'Close Mobile Navigation Icon'}
                height={40}
                src={'/iconmonstr-x-mark-lined.svg'}
                width={40}
            />
        </Button>
        <UnorderedList>
        {
            navItems.map(navItem => {
                return <ListItem
                    aria-current={navItem.uri === location.pathname}
                    className={'navigation-item'}
                    key={navItem.label}
                >
                    <Link href={navItem.uri}>
                        { navItem.label }
                    </Link>
                </ListItem>;
            })
        }
        </UnorderedList>
    </nav>;
};

export default Drawer;