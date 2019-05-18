import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { fetchSubredditInfo } from "../../redux/actions";
import {
  selectSubredditInfo,
  selectSubredditInfoStatus
} from "../../redux/reducers";

import Header from "../common/Header/Header";
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
    <main className={styles.subredditInfo}>
      <nav className={styles.navigation}>
        <Link to="/" className={styles.link}>
          <BackIcon className={styles.backIcon} /> Home
        </Link>
      </nav>
      <section>
        <Header
          title={`r/${subreddit}`}
          label="Subreddit details"
          className={styles.header}
        />
        {status === "SUCCESS" && (
          <div className={styles.subreddit}>
            <SubredditSection title="Title" description={title} />
            <SubredditSection
              title="Public description"
              description={public_description}
            />
            <SubredditSection
              title="Subscriber count"
              description={convertNumberToLocaleString(subscribers)}
            />
          </div>
        )}
      </section>
    </main>
  );
};

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
