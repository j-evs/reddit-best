import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { convertNumberToLocaleString } from "../../helpers";

import Header from "../common/Header/Header";
import { ReactComponent as BackIcon } from "./images/Back.svg";

import styles from "./SubredditInfo.module.css";

const SubredditInfo = ({
  match: {
    params: { subreddit }
  },
  data: { title, public_description, subscribers }
}) => {
  return (
    <main className={styles.subredditInfo}>
      <nav className={styles.navigation}>
        <Link to="/" className={styles.link}>
          <BackIcon className={styles.backIcon} /> Home
        </Link>
      </nav>
      <section>
        <Header
          title={subreddit}
          label="Subreddit details"
          className={styles.header}
        />
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
  { subredditInfo },
  {
    match: {
      params: { subreddit }
    }
  }
) => ({
  data: subredditInfo[subreddit]
});

export default connect(mapStateToProps)(SubredditInfo);
