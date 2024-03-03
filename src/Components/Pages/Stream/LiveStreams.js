import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import classes from "./LiveStreams.module.css";

const LiveStreams = (props) => {
  return (
    <div className={classes.liveStreamsCard}>
      <div className={classes.liveStreamsCardImage}>
        <img src={props.cardImage} alt={props.cardAlt} />
        <div className={classes.overlayStreaming}>
          <p>{props.streaming}</p>
        </div>
      </div>
      <div className={classes.liveStreamsCardContent}>
        <div className={classes.cardTitleStars}>
          <h3 className={classes.cardTitle}>{props.cardTitle}</h3>
          <div className={classes.stars}>
            <FontAwesomeIcon icon={faStar} size="xs" color="yellow" />
            <span>{props.stars}</span>
          </div>
        </div>
        <div className={classes.cardDescDownloads}>
          <p className={classes.cardDesc}>{props.cardDesc}</p>
          <div className={classes.downloads}>
            <FontAwesomeIcon icon={faDownload} size="xs" color="#e75e8c" />
            <span>{props.downloads}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LiveStreams;
