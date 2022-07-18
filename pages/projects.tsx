import * as React from 'react';
import Link from "next/link";
import { Typography, UnorderedList, ListItem } from 'styless-react';

import PageTemplate from "../templates/Page";
import { Breadcrumbs } from '../components/Breadcrumbs';

const ProjectsPage = () => {
    return <PageTemplate
        description={'Learn about what makes Joshua Blevins tick professionally.'}
        title={"About Me - Joshua Blevins"}
    >
        <main>
            <Breadcrumbs />

            <Typography variant='h1'>
                Open Source Projects
            </Typography>

            <Typography>
                I enjoy building tools that developers love to use. By open-sourcing my projects, we 
                can build something greater than I ever could.
            </Typography>

            {}
        </main>
    </PageTemplate>;
};

export default ProjectsPage;