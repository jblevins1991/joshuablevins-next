import * as React from 'react';
import PageTemplate from "../templates/Page";

const AboutPage = () => {
    return <PageTemplate
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

            <h2>Helpful Links</h2>

            {/*  @todo: add helpful links (github, acloudguru, linkedin, etc.)  */}
        </main>
    </PageTemplate>;
}

export default AboutPage;