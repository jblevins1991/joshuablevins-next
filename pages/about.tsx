import * as React from 'react';
import PageTemplate from "../templates/Page";

const AboutPage = () => {
    return <PageTemplate
        description={'Learn about what makes Joshua Blevins tick professionally.'}
        title={"About Joshua Blevins"}
        canonicalUrl={`${process.env.NEXT_HOSTNAME}/about`}
    >
        <main>
            <div className={'root-container'}>
                <main>
                    <h1>About Me</h1>

                    <p>
                        I am a web application developer based out of Michigan. I have a
                        permanent student mentality in that I am always honing my craft. I
                        specialize in web accessibility and test-driven development.
                    </p>

                    <p>
                        I have been writing React applications since 2018, ranging from smaller
                        businesses to large enterprise applications. Some of these companies
                        include Ford Motor Company, Lowes Home Improvement, and AAA.
                    </p>

                    <p>
                        I have been on a large variety of projects throughout my career. This
                        includes greenfield web applications, matured web applications, node.js
                        module libraries, and full-stack projects. I have had the pleasure of
                        taking responsibility and ownership of entire features during this time,
                        including analytics data layer implementation, performance testing and
                        monitoring, search-engine optimization, web accessibility, and business
                        logic.
                    </p>

                    <p>
                        {/* eslint-disable-next-line react/no-unescaped-entities */}
                        This blog's <a href={'https://github.com/jblevins1991/joshuablevins-next'}>frontend </a>
                        and <a href={''}>backend</a> code is open-source under the GPT-3 license.
                    </p>
                </main>

                <aside>
                    <h2>Known Technologies</h2>

                    <ul>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>Sass</li>
                        <li>Tailwind CSS</li>
                        <li>JavaScript</li>
                        <li>Typescript</li>
                        <li>React.js</li>
                        <li>Styled Components</li>
                        <li>React Spring</li>
                        <li>Next.js</li>
                        <li>Gatsby</li>
                        <li>Redux (Thunk and Sagas)</li>
                        <li>Webpack</li>
                        <li>Rollup</li>
                        <li>React Testing Library</li>
                        <li>User Event</li>
                        <li>Mock Service Worker</li>
                        <li>Cypress</li>
                        <li>Playwright</li>
                        <li>Express.js</li>
                        <li>Mongoose/MongoDB</li>
                        <li>MySQL</li>
                        <li>Docker/Compose</li>
                        <li>Kubernetes</li>
                    </ul>
                </aside>
            </div>
        </main>
    </PageTemplate>;
}

export default AboutPage;