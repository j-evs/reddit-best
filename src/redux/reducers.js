import { combineReducers } from "redux";

import {
  LOAD_BEST_POSTS_REQUEST,
  LOAD_BEST_POSTS_SUCCESS,
  LOAD_BEST_POSTS_FAILURE,
  LOAD_SUBREDDIT_INFO_REQUEST,
  LOAD_SUBREDDIT_INFO_SUCCESS,
  LOAD_SUBREDDIT_INFO_FAILURE
} from "./actions";

const initialBestPostsState = { data: [] };
const bestPostsReducer = (state = initialBestPostsState, action) => {
  switch (action.type) {
    case LOAD_BEST_POSTS_REQUEST: {
      return {
        ...state,
        status: "LOADING",
        error: null
      };
    }
    case LOAD_BEST_POSTS_SUCCESS: {
      const {
        payload: { bestPosts }
      } = action;
      return {
        data: parseBestPosts(bestPosts),
        status: "SUCCESS",
        error: null
      };
    }
    case LOAD_BEST_POSTS_FAILURE: {
      const {
        payload: { error }
      } = action;

      return {
        ...state,
        status: "ERROR",
        error
      };
    }
    default:
      return state;
  }
};

const initialSubredditInfoState = {};
const extractSubredditFromAction = ({ payload: { subreddit } }) => subreddit;
const subredditInfoReducer = (state = initialSubredditInfoState, action) => {
  switch (action.type) {
    case LOAD_SUBREDDIT_INFO_REQUEST: {
      const subreddit = extractSubredditFromAction(action);
      return {
        ...state,
        [subreddit]: {
          ...state[subreddit],
          status: "LOADING",
          error: null,
          data: {}
        }
      };
    }
    case LOAD_SUBREDDIT_INFO_SUCCESS: {
      const subreddit = extractSubredditFromAction(action);
      const {
        payload: { subredditInfo }
      } = action;

      return {
        ...state,
        [subreddit]: {
          ...state[subreddit],
          data: subredditInfo,
          status: "SUCCESS",
          error: null
        }
      };
    }
    case LOAD_SUBREDDIT_INFO_FAILURE: {
      const {
        payload: { error }
      } = action;

      const subreddit = extractSubredditFromAction(action);
      return {
        ...state,
        [subreddit]: {
          ...state[subreddit],
          status: "ERROR",
          error
        }
      };
    }
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  bestPosts: bestPostsReducer,
  subredditInfo: subredditInfoReducer
});

//helpers

const parseBestPosts = posts =>
  posts.map(
    ({
      data: { id, permalink, ups, title, subreddit_name_prefixed, subreddit }
    }) => ({
      id,
      permalink: `https://www.reddit.com/${permalink}`,
      ups,
      title,
      subreddit_name_prefixed,
      subreddit
    })
  );

// selectors
export const selectBestPosts = state => state.bestPosts.data;
export const selectBestPostsStatus = state => state.bestPosts.status;

export const selectSubredditInfo = (state, subreddit) => {
  if (state.subredditInfo[subreddit]) {
    return state.subredditInfo[subreddit].data;
  }
  return {};
};
export const selectSubredditInfoStatus = (state, subreddit) => {
  if (state.subredditInfo[subreddit]) {
    return state.subredditInfo[subreddit].status;
  }
  return null;
};

export default rootReducer;
