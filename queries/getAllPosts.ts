import client from "../client"

const getAllPosts = (): Promise<any> => {
    const posts = client.fetch(
        `*[_type == "post"]{
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
            _createdAt,
            publishedAt,
            _updatedAt,
            categories[]->{
                _id,
                title,
                "count": count(*[_type == "post" && ^.title in categories[]->title])
            },
            body
        }`
    );

    if (!posts) {
        throw new Error('Network error.');
    }

    return Promise.resolve(posts);
};

export default getAllPosts;
