// state.posts.filter

export const findFilter = state => state.posts.filter;

// export const findTagPosts = state => {
//   const posts = state.posts.post;
//   const tag = state.posts.filter;
//   return posts.filter(elem => elem.tag === tag);
// };

export const getPosts = state => state.posts.post;
export const getTag = state => state.posts.filter;
