import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { fetchSubredditInfo } from "../../redux/actions";
import {
  selectSubredditInfo,
  selectSubredditInfoStatus
} from "../../redux/reducers";

import Header from "../common/Header/Header";
import Error from "../common/Error/Error";
import Loader from "../common/Loader/Loader";
import { ReactComponent as BackIcon } from "./images/Back.svg";

import { convertNumberToLocaleString } from "../../helpers";

import styles from "./SubredditInfo.module.css";

const SubredditInfo = ({
  match: {
    params: { subreddit }
  },
  fetchSubredditInfo,
  subredditInfo,
  status
}) => {
  useEffect(() => {
    fetchSubredditInfo(subreddit);
  }, [subreddit]);

  const { title, public_description, subscribers } = subredditInfo;
  return (
    <div className={styles.subredditInfo}>
      <Navigation />
      <section>
        <Header
          title={`r/${subreddit}`}
          label="Subreddit details"
          className={styles.header}
        />
        {status === "SUCCESS" && (
          <article className={styles.subreddit}>
            <SubredditSection title="Title" description={title} />
            <SubredditSection
              title="Public description"
              description={public_description}
            />
            <SubredditSection
              title="Subscriber count"
              description={convertNumberToLocaleString(subscribers)}
            />
          </article>
        )}
        {status === "ERROR" && <Error />}
        {status === "LOADING" && <Loader />}
      </section>
    </div>
  );
};

const Navigation = () => (
  <nav className={styles.navigation}>
    <Link to="/" className={styles.link}>
      <BackIcon className={styles.backIcon} /> Home
    </Link>
  </nav>
);

const SubredditSection = ({ title, description }) => (
  <div className={styles.subredditSection}>
    <p className={styles.subredditSectionTitle}>{title}</p>
    <p className={styles.subredditSectionDescription}>{description}</p>
  </div>
);

const mapStateToProps = (
  state,
  {
    match: {
      params: { subreddit }
    }
  }
) => ({
  subredditInfo: selectSubredditInfo(state, subreddit),
  status: selectSubredditInfoStatus(state, subreddit)
});
const mapDispatchToProps = {
  fetchSubredditInfo
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SubredditInfo);
