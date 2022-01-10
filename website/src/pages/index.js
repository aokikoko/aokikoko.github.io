import React, { useState, useRef } from "react";
import Layout from "@theme/Layout";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import styles from "./index.module.css";
import mp4 from "../../static/index-page/Ep01_HomeTeaser.mp4";
import pic from "../../static/index-page/ski.png";
import Pause from "../../static/index-page/pause-svgrepo-com.svg";
import Play from "../../static/index-page/play-svgrepo-com.svg";

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  const videoRef = useRef(null);
  const [videoPlay, setVideoPlay] = useState(true);

  const pauseVideo = () => {
    videoRef.current.pause();
    setVideoPlay(false);
  };

  const playVideo = () => {
    videoRef.current.play();
    setVideoPlay(true);
  };

  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <div className={styles.section_a}>
        <div className={styles.section_b}>
          <figure>
            <img src={pic} className={styles.section_img}></img>
          </figure>
        </div>
        <div className={styles.section_mp4}>
          <video
            autoPlay
            loop
            muted
            type="video/mp4"
            className={styles.section_mp5}
            ref={videoRef}
          >
            <source src={mp4} type="video/mp4" />
          </video>
        </div>
      </div>
      <div className={styles.test_a}>
        <div className={styles.test_b}>
          <h2 className={styles.test_c} aria-label="Test">
            <div className={styles.test_Aspects}>Aspects:&nbsp;</div>
            <div>Ep.&nbsp;</div>
            <div>01</div>
          </h2>
          <div>
            <p className={styles.test_p}>
              Excitement drives us to explore. But what about when it overwhelms
              us? Experienced Swiss freeriders share what happened when what
              should have been the perfect day ended in an avalanche rescue.
            </p>
          </div>
        </div>
      </div>
      {/* 暂停|播放按钮 */}
      {videoPlay ? (
        <Pause
          className={styles.pause}
          onClick={() => pauseVideo()}
        ></Pause>
      ) : (
        <Play
          className={styles.play}
          onClick={() => playVideo()}
        ></Play>
      )}
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
