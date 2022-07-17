import * as React from 'react';
import PageTemplate from "../templates/Page";
import Link from "next/link";
import { Typography, UnorderedList, ListItem } from 'styless-react';

const AboutPage = () => {
    return <PageTemplate
        description={'Learn about what makes Joshua Blevins tick professionally.'}
        title={"About Me - Joshua Blevins"}
        canonicalUrl={`${process.env.NEXT_HOSTNAME}/about`}
    >
        <main>
            <div className={'root-container'}>
                <main>
                    <Typography variant='h1'>About Me</Typography>

                    <Typography>
                        I started learning HTML and CSS back in 2013 when HTML 5 and CSS 3 were new
                        standards and React was being developed in the depths of Facebook HQ. My
                        first website was built using PHP 5.3 and WordPress. I decided to seek out work
                        in software development in 2017 and landed an internship at a small manufacturing
                        software development company. When I first heard about React.js I became
                        fascinated with Web Development all over again.
                    </Typography>

                    <Typography>
                        I slowly built up my skill set and started a contract in 2019 with Ford Motor Company
                        on their Single-Sign On team where I started working with Typescript and learned about
                        Test-Driven Development and grew a lot as a developer. I owned multiple features like the
                        password reset flow, content management integration, data layer integration, and hosted
                        many office hours for teams that integrate with the single-sign on library.
                    </Typography>

                    <Typography>
                        From here I moved on to Lowes Home Improvement, where I worked on their Design
                        System team. It was here I learned about the aria authoring practices and worked
                        closely with designers. I brought atomic components to life within design and
                        web accessibility specifications. We documented our design system and style guide
                        using Gatsby.
                    </Typography>

                    <Typography>
                        Another project that I learned a lot from is Clublabs of AAA. I was the technical
                        lead for the Design System team, where we prototyped and developed out their
                        component library. I introduced design system and style guide standards and
                        agile software development practices and prototyped Webpack Module Federation.
                    </Typography>

                    <Typography>
                        My favorite thing about web application development is creating something
                        with nothing but time and an idea. I like the challenges that I have to
                        overcome to making things work. My least favorite thing about being a
                        developer is not writing automated tests. I err on the lazy side and
                        testing tens of workflows manually does not sound like a fun or
                        productive use of my time when I can code a test.
                    </Typography>

                    <Typography>
                        {/* eslint-disable-next-line react/no-unescaped-entities */}
                        This blog's <Link href={'https://github.com/jblevins1991/joshuablevins-next'}><a rel={'nofollow'} target={'_blank'}>frontend</a></Link> code is open-source under the MIT license.
                    </Typography>
                </main>

                <aside>
                    <Typography variant='h2'>Known Technologies</Typography>

                    <UnorderedList>
                        <ListItem>HTML</ListItem>
                        <ListItem>CSS</ListItem>
                        <ListItem>Sass</ListItem>
                        <ListItem>Tailwind CSS</ListItem>
                        <ListItem>JavaScript</ListItem>
                        <ListItem>Typescript</ListItem>
                        <ListItem>React.js</ListItem>
                        <ListItem>Styled Components</ListItem>
                        <ListItem>React Spring</ListItem>
                        <ListItem>Next.js</ListItem>
                        <ListItem>Gatsby</ListItem>
                        <ListItem>Redux (Thunk and Sagas)</ListItem>
                        <ListItem>Webpack</ListItem>
                        <ListItem>Rollup</ListItem>
                        <ListItem>React Testing ListItembrary</ListItem>
                        <ListItem>User Event</ListItem>
                        <ListItem>Mock Service Worker</ListItem>
                        <ListItem>Cypress</ListItem>
                        <ListItem>Playwright</ListItem>
                        <ListItem>Express.js</ListItem>
                        <ListItem>Mongoose/MongoDB</ListItem>
                        <ListItem>MySQL</ListItem>
                        <ListItem>Docker/Compose</ListItem>
                        <ListItem>Kubernetes</ListItem>
                    </UnorderedList>
                </aside>
            </div>
        </main>
    </PageTemplate>;
}

export default AboutPage;