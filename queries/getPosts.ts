import client from "../client"

// @todo: implement numberOfPosts to make query more dynamic
const getPosts = (): Promise<any> => {
    const posts = client.fetch(
        `*[_type == "post"][0...3]`
    );

    if (!posts) {
        throw new Error('Network error.');
    }

    return Promise.resolve(posts);
};

export default getPosts;
