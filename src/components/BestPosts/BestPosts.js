import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { fetchBestPosts } from "../../redux/actions";
import { selectBestPosts } from "../../redux/reducers";

import Header from "../common/Header/Header";

import { convertNumberToLocaleString } from "../../helpers";

import styles from "./BestPosts.module.css";

const bestPostsCount = 10;
const BestPosts = ({ bestPosts, fetchBestPosts }) => {
  useEffect(() => {
    fetchBestPosts({ count: bestPostsCount });
  }, []);

  const posts = bestPosts.map(post => <Post post={post} key={post.id} />);
  return (
    <section className={styles.bestPosts}>
      <Header title="Home" label={`Top ${bestPostsCount} posts`} />
      <div className={styles.postsWrapper}>{posts}</div>
    </section>
  );
};

const Post = ({
  post: { title, subreddit_name_prefixed, subreddit, ups: upvotesCount }
}) => (
  <article className={styles.post}>
    <h2 className={styles.postTitle}>{title}</h2>
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

const mapStateToProps = state => ({ bestPosts: selectBestPosts(state) });
const mapDispatchToProps = { fetchBestPosts };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BestPosts);
