export const EctionsType = {
  FETCH_POSTS: "FETCH_POSTS",
  CHANGE_TAG: "CHANGE_TAG"
};

export const fetchPosts = posts => ({
  type: EctionsType.FETCH_POSTS,
  payload: posts
});

export const changeTag = tag => ({
  type: EctionsType.CHANGE_TAG,
  payload: tag
});
