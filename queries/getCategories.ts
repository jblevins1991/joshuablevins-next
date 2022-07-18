import client from "../client"

// @todo: implement numberOfPosts to make query more dynamic
const getCategories = (): Promise<any> => {
    const categories = client.fetch(
        `*[_type == "category"] {
            ...,
            "postCount": count(*[_type == "post" && references(^._id)])
        }`
    );

    if (!categories) {
        throw new Error('Network error.');
    }

    return Promise.resolve(categories);
};

export default getCategories;
