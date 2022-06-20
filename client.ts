import sanityClient from '@sanity/client';

export default sanityClient({
    projectId: '1n3bmnl4',
    dataset: 'development',
    useCdn: true,
})