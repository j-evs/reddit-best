import React from "react";
import styles from "./BestPosts.module.css";

import { connect } from "react-redux";

const BestPosts = ({ bestPosts }) => {
  const posts = bestPosts.map(post => <Post post={post} key={post.id} />);
  // TODO make post number as a variable (which is also used as a param in api request)
  return (
    <section className={styles.bestPosts}>
      <header className={styles.header}>
        <h1 className={styles.headerMain}>Home</h1>
        <h2 className={styles.headerLabel}>Top 10 posts</h2>
      </header>
      <div className={styles.postsWrapper}>{posts}</div>
    </section>
  );
};

const Post = ({ post: { title, subreddit, ups: upvotesCount } }) => (
  <article className={styles.post}>
    <h2 className={styles.postTitle}>{title}</h2>
    <span className={styles.postSubreddit}>{subreddit}</span>
    <span className={styles.postInfoSeparator}> · </span>
    <span className={styles.postUpvotes}>
      <span className={styles.postUpvotesCount}>
        {upvotesCount.toLocaleString("nl-NL")}
      </span>{" "}
      points
    </span>
  </article>
);

const mapStateToProps = ({ bestPosts }) => ({ bestPosts });

export default connect(mapStateToProps)(BestPosts);
