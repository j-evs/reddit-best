import { getBestPosts, getSubredditInfo } from "../api";

export const LOAD_BEST_POSTS_REQUEST = "LOAD_BEST_POSTS_REQUEST";
export const LOAD_BEST_POSTS_SUCCESS = "LOAD_BEST_POSTS_SUCCESS";
export const LOAD_BEST_POSTS_FAILURE = "LOAD_BEST_POSTS_FAILURE";

export const LOAD_SUBREDDIT_INFO_REQUEST = "LOAD_SUBREDDIT_INFO_REQUEST";
export const LOAD_SUBREDDIT_INFO_SUCCESS = "LOAD_SUBREDDIT_INFO_SUCCESS";
export const LOAD_SUBREDDIT_INFO_FAILURE = "LOAD_SUBREDDIT_INFO_FAILURE";

// best posts action creators
const requestBestPosts = () => ({
  type: LOAD_BEST_POSTS_REQUEST
});
const receiveBestPosts = posts => ({
  type: LOAD_BEST_POSTS_SUCCESS,
  payload: { bestPosts: posts }
});
const requestBestPostsError = err => ({
  type: LOAD_BEST_POSTS_FAILURE,
  payload: { error: err }
});

export const fetchBestPosts = ({ count }) => {
  return dispatch => {
    dispatch(requestBestPosts());
    return getBestPosts({ count })
      .then(posts => dispatch(receiveBestPosts(posts)))
      .catch(err => dispatch(requestBestPostsError(err)));
  };
};

// subreddit info action creators
const requestSubredditInfo = subreddit => ({
  type: LOAD_SUBREDDIT_INFO_REQUEST,
  payload: { subreddit }
});
const receiveSubredditInfo = (subreddit, subredditInfo) => ({
  type: LOAD_SUBREDDIT_INFO_SUCCESS,
  payload: { subreddit, subredditInfo }
});
const requestSubredditInfoError = (subreddit, err) => ({
  type: LOAD_SUBREDDIT_INFO_FAILURE,
  payload: { subreddit, error: err }
});

export const fetchSubredditInfo = subreddit => {
  return dispatch => {
    dispatch(requestSubredditInfo(subreddit));
    return getSubredditInfo(subreddit)
      .then(subredditInfo =>
        dispatch(receiveSubredditInfo(subreddit, subredditInfo))
      )
      .catch(err => dispatch(requestSubredditInfoError(subreddit, err)));
  };
};
