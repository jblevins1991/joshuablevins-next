import * as React from "react";
import { Typography } from "styless-react";

import PageTemplate from "../templates/Page";

const NotFoundPage = () => {
  return (
      <PageTemplate
          description={''}
          title={'Content Not Found - Joshua Blevins'}
          canonicalUrl={`${process.env.NEXT_HOSTNAME}/not-found`}
      >
        <main>
            <Typography variant="h1">404 | Not Found</Typography>

            <Typography>
                It looks like the content you were looking for has been moved or deleted.
            </Typography>
        </main>
      </PageTemplate>
  )
}

export default NotFoundPage
