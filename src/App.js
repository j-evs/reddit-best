import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function Index() {
  return <h2>Hi from Index</h2>;
}

function SubredditInfo({
  match: {
    params: { subreddit }
  }
}) {
  return <h2>Hi from {subreddit}</h2>;
}

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

        <Route path="/" exact component={Index} />
        <Route path="/about/:subreddit" component={SubredditInfo} />
      </div>
    </Router>
  );
}

export default App;
