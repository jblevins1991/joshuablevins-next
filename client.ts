import sanityClient from '@sanity/client';

export default sanityClient({
    projectId: process.env.SANITY_PROJECT_ID,
    apiVersion: process.env.SANITY_API_VERSION,
    dataset: process.env.SANITY_DATASET_NAME,
    useCdn: true,
})