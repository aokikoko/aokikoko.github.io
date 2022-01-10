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
      <div className={styles.note}>
        <div className={styles.note_b}>
          <h2 className={styles.note_main} aria-label="Test">
            <div className={styles.note_aspects}>Aspects:&nbsp;</div>
            <div>Ep.&nbsp;</div>
            <div>01</div>
          </h2>
          <div>
            <p className={styles.note_p}>
              It's not that big of a deal. Nothing in life is that complicated.
              You can do anything you set your mind to, if you roll up your sleeves,
              you get in there and you do it. Everything is figure-outable.
              「凡事皆有出路」
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
