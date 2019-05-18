const API_ROOT = "https://www.reddit.com";
const BEST_POSTS_ENDPOINT = "/best.json";
const BEST_POSTS_URL = `${API_ROOT}${BEST_POSTS_ENDPOINT}`;

const getSubredditInfoUrl = subreddit =>
  `${API_ROOT}/r/${subreddit}/about.json`;
const getBestPostsUrl = ({ count = 10 }) =>
  `${API_ROOT}${BEST_POSTS_ENDPOINT}?limit=${count}`;

// api helpers
const rejectIfNot2xx = res => {
  if (res.ok) {
    return res;
  }

  return res.json().then(data => {
    const err = new Error(res.statusText);
    err.status = res.status;
    err.response = data;
    throw err;
  });
};
const getData = url =>
  fetch(url)
    .then(rejectIfNot2xx)
    .then(res => res.json());

export const getBestPosts = ({ count }) =>
  getData(getBestPostsUrl({ count })).then(({ data }) => data.children);
export const getSubredditInfo = subreddit =>
  getData(getSubredditInfoUrl(subreddit)).then(({ data }) => data);
