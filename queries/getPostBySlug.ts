import client from "../client"

// @todo: implement numberOfPosts to make query more dynamic
const getPostBySlug = (slug: string): Promise<any> => {
    const posts = client.fetch(
        `*[_type == "post" && slug.current == "${slug}"]{
            relatedUrl,
            slug,
            title,
            "thumbnail": mainImage.asset->{
                extension,
                metadata,
                mimeType,
                url,
                sha1hash,
            },
            author->{
                bio[],
                name,
                slug
            },
            _createdAt,
            publishedAt,
            _updatedAt,
            categories[]->{
              title
            },
            body[]{
                ...,
                asset->{
                    ...,
                    "_key": _id
                }
            }
        }`
    );

    if (!posts) {
        throw new Error('Network error.');
    }

    return Promise.resolve(posts);
};

export default getPostBySlug;
