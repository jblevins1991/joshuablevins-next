import client from "../client"

// @todo: implement numberOfPosts to make query more dynamic
const getPostsByCategory = (categoryId: string): Promise<any> => {
    const categories = client.fetch(
        `*[_type == "post" && "${categoryId}" in categories[]->_id]{
            ...,
            categories[]->{
              ...
            }
          }`
    );

    if (!categories) {
        throw new Error('Network error.');
    }

    return Promise.resolve(categories);
};

export default getPostsByCategory;
