import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";

import BestPosts from "./components/BestPosts/BestPosts";
import SubredditInfo from "./components/SubredditInfo/SubredditInfo";

const BEST_POSTS_COUNT = 10;
function App() {
  return (
    <Router>
      <div>
        <main>
          <Route
            path="/"
            exact
            render={props => (
              <BestPosts {...props} postsCount={BEST_POSTS_COUNT} />
            )}
          />
          <Route path="/about/:subreddit" component={SubredditInfo} />
        </main>
      </div>
    </Router>
  );
}

export default App;
