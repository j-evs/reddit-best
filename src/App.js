import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import BestPosts from "./components/BestPosts/BestPosts";
import SubredditInfo from "./components/SubredditInfo/SubredditInfo";

function App() {
  return (
    <Router>
      <div>
        <main>
          <Route path="/" exact component={BestPosts} />
          <Route path="/about/:subreddit" component={SubredditInfo} />
        </main>
      </div>
    </Router>
  );
}

export default App;
