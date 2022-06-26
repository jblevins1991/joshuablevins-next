
export const generateFeedContent = (posts: any[]) => {
    return posts.map((post: any) => {
        return {
            guid: post._id,
            name: post.title,
            link: `${process.env.NEXT_HOSTNAME}/blog/${post.slug.current}`,
            category: [],
            pubDate: post._createdAt,
            author: '',
        };
    });
};