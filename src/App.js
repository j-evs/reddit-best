import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import BestPosts from "./components/BestPosts/BestPosts";
import SubredditInfo from "./components/SubredditInfo/SubredditInfo";

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about/askReddit">Askreddit link</Link>
            </li>
          </ul>
        </nav>
        <main>
          <Route path="/" exact component={BestPosts} />
          <Route path="/about/:subreddit" component={SubredditInfo} />
        </main>
      </div>
    </Router>
  );
}

export default App;
