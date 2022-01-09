import React from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import styles from "./index.module.css";
import HomepageFeatures from "../components/HomepageFeatures";
import mp4 from "../../static/Ep01_HomeTeaser.mp4";
import pic from "../../static/img/ski.png";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro"
          >
            Docusaurus Tutorial - 5min ⏱️
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <div className={styles.slider_container}>
        <div className={styles.slider_pic}>
          <img src={pic} className={styles.slider_img}></img>
        </div>
        <div className={styles.slider_mp4}>
          <video autoPlay loop muted>
            <source src={mp4} type="video/mp4" />
          </video>
        </div>
        <div className={styles.slider_content}>
          <h2>Aspects:Ep.01</h2>
          <p>
            Excitement drives us to explore. But what about when it overwhelms
            us? Experienced Swiss freeriders share what happened when what
            should have been the perfect day ended in an avalanche rescue.
          </p>
        </div>
      </div>
    </Layout>
  );
}

{
  /* <HomepageHeader /> */
}
{
  /* <main>
        <HomepageFeatures />
      </main> */
}
