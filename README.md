# JoshuaBlevins-Next

This is the source code for my [personal website](https://www.joshuablevins.dev). It is 
developed using [Next.js]() to speed up development and serve pages fast, [Sanity.io]() 
for content, and [Playwright]() for end-to-end testing.

## Developing for the project

To develop this project you need to have a few tools install:

- [Node v16.x](https://nodejs.org/en/download/)
- [yarn v1.x](https://yarnpkg.com/) (installed globally)
- [visual studio code](https://code.visualstudio.com/)
- [git](https://git-scm.com/)

## Running the project

To run this project, you will need to create a `.env.local` file.

```dotenv
NEXT_HOSTNAME=localhost:3000
SANITY_PROJECT_ID=<project-id>
SANITY_API_VERSION='2021-08-31'
SANITY_DATASET_NAME=development
```

After you have your environment variables you can run the dev server.

```shell
# install dependencies
yarn

# run the dev server
yarn dev
```