import client from "../client"

// @todo: implement numberOfPosts to make query more dynamic
const getAllProjects = (): Promise<any> => {
    const posts = client.fetch(
        `*[_type == "project"]{
            ...
        }`
    );

    if (!posts) {
        throw new Error('Network error.');
    }

    return Promise.resolve(posts);
};

export default getAllProjects;
