import React from "react";

import Header from "../common/Header/Header";
import styles from "./BestPosts.module.css";

import { connect } from "react-redux";

import { convertNumberToLocaleString } from "../../helpers";

const BestPosts = ({ bestPosts }) => {
  const posts = bestPosts.map(post => <Post post={post} key={post.id} />);
  // TODO make post number as a variable (which is also used as a param in api request)
  return (
    <section className={styles.bestPosts}>
      <Header title="Home" label="Top 10 posts" />
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
        {convertNumberToLocaleString(upvotesCount)}
      </span>{" "}
      points
    </span>
  </article>
);

const mapStateToProps = ({ bestPosts }) => ({ bestPosts });

export default connect(mapStateToProps)(BestPosts);
