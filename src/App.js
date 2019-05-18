import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import BestPosts from "./components/BestPosts/BestPosts";
import SubredditInfo from "./components/SubredditInfo/SubredditInfo";

const BEST_POSTS_COUNT = 10;

export const AppRoutes = () => (
  <div>
    <main>
      <Route
        path="/"
        exact
        render={props => <BestPosts {...props} postsCount={BEST_POSTS_COUNT} />}
      />
      <Route path="/about/:subreddit" component={SubredditInfo} />
    </main>
  </div>
);

const App = () => (
  <Router>
    <AppRoutes />
  </Router>
);

export default App;
