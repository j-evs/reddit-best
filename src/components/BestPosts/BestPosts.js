import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { fetchBestPosts } from "../../redux/actions";
import { selectBestPosts, selectBestPostsStatus } from "../../redux/reducers";

import Header from "../common/Header/Header";
import Loader from "../common/Loader/Loader";
import Error from "../common/Error/Error";

import { convertNumberToLocaleString } from "../../helpers";

import styles from "./BestPosts.module.css";

const BestPosts = ({ bestPosts, fetchBestPosts, status, postsCount }) => {
  useEffect(() => {
    fetchBestPosts({ count: postsCount });
  }, []);

  const posts = bestPosts.map(post => <Post post={post} key={post.id} />);
  return (
    <section className={styles.bestPosts}>
      <Header title="Home" label={`Top ${postsCount} posts`} />
      {status === "ERROR" && <Error />}
      {status === "LOADING" && <Loader />}
      {status === "SUCCESS" && (
        <div className={styles.postsWrapper} data-testid="best-posts-wrapper">
          {posts}
        </div>
      )}
    </section>
  );
};

const Post = ({
  post: {
    title,
    subreddit_name_prefixed,
    subreddit,
    ups: upvotesCount,
    permalink
  }
}) => (
  <article className={styles.post} data-testid="post">
    <a
      className={styles.postLink}
      href={permalink}
      target="_blank"
      rel="noopener noreferrer"
    >
      <h2 className={styles.postTitle}>{title}</h2>
    </a>
    <Link to={`/about/${subreddit}`} className={styles.postSubreddit}>
      {subreddit_name_prefixed}
    </Link>
    <span className={styles.postInfoSeparator}> · </span>
    <span className={styles.postUpvotes}>
      <span className={styles.postUpvotesCount}>
        {convertNumberToLocaleString(upvotesCount)}
      </span>{" "}
      points
    </span>
  </article>
);

const mapStateToProps = state => ({
  bestPosts: selectBestPosts(state),
  status: selectBestPostsStatus(state)
});
const mapDispatchToProps = { fetchBestPosts };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BestPosts);
