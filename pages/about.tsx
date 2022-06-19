import * as React from 'react';
import PageTemplate from "../templates/Page";

const AboutPage = () => {
    return <PageTemplate
        canonicalUrl={'https://www.joshuablevins.net/about'}
        description={''}
        title={"About Me"}
    >
        <main>
            <h1>About Me</h1>

            <p>
                I am a web application developer based out of Michigan. I have a
                permanent student mentality in that I am always honing my craft. I
                specialize in web accessibility and test-driven development.
            </p>

            <p>
                When I am not writing code I am spending time with friends and
                family. I also enjoy playing guitar going to concerts.
            </p>

            <h2>Helpful Links</h2>

            {/*  @todo: add helpful links (github, acloudguru, linkedin, etc.)  */}
        </main>
    </PageTemplate>;
}

export default AboutPage;