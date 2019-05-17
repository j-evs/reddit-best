import React from "react";

const SubredditInfo = ({
  match: {
    params: { subreddit }
  }
}) => {
  return <h2>Hi from {subreddit}</h2>;
};

export default SubredditInfo;
