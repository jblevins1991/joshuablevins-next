import { useRouter } from 'next/router';
import * as React from 'react';

export const Breadcrumbs = () => {
    const router = useRouter();

    const routeParts = router.pathname !== '/'
        ? router.pathname.split('/')
        : [];

    return <nav aria-label='Breadcrumb Navigation' className={'breadcrumb-wrapper'}>
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
    </nav>;
}