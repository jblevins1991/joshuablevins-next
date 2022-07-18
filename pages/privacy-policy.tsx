import * as React from "react";
import { Typography } from "styless-react";

import PageTemplate from "../templates/Page";

const PrivacyPolicyPage = () => {
  return (
      <PageTemplate
          description={''}
          title={'Privacy Policy - Joshua Blevins'}
      >
        <main>
            <Typography variant='h1'>
                Privacy Policy
            </Typography>

            <Typography>
            </Typography>
        </main>
      </PageTemplate>
  )
}

export default PrivacyPolicyPage;
