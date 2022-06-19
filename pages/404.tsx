import * as React from "react";

import PageTemplate from "../templates/Page";

const NotFoundPage = () => {
  return (
      <PageTemplate
          canonicalUrl={'https://www.joshuablevins.net/not-found'}
          description={''}
          title={'404 - Not Found'}
      >
        <main>
            <h1>404 | Not Found</h1>

            <p>
                It looks like the content you were looking for has been removed
                might have been moved.
            </p>
        </main>
      </PageTemplate>
  )
}

export default NotFoundPage
