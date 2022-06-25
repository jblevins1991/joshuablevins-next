import * as React from 'react';
import PageTemplate from "../templates/Page";

const AboutPage = () => {
    return <PageTemplate
        description={''}
        title={"About Me"}
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
                        {/* eslint-disable-next-line react/no-unescaped-entities */}
                        This blog's code is even open source. You can find it and all of my other
                        projects in my GitHub account.
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
                        <li>React Testing Library</li>
                        <li>Mock Service Worker</li>
                        <li>User Event</li>
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

            {/*  @todo: add helpful links (github, acloudguru, linkedin, etc.)  */}
            <button onClick={() => {
                throw new Error("Sentry Frontend Error")
            }}>
                Throw error
            </button>
        </main>
    </PageTemplate>;
}

export default AboutPage;