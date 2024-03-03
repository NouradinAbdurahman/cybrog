import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import classes from "./TopDownloadedCard.module.css";

const TopDownloadedCard = (props) => {
  return (
    <div className={classes.topDownloadedCard}>
      <div className={classes.topDownloadedCardImage}>
        <img src={props.cardImage} alt={props.cardAlt} />
        <div className={classes.topDownloadedCardInfo}>
            <h3 className={classes.cardTitle}>{props.cardTitle}</h3>
            <p className={classes.cardDesc}>{props.cardDesc}</p>
          <div className={classes.cardDescDownloads}>
              <div className={classes.stars}>
                <FontAwesomeIcon icon={faStar} size="xs" color="yellow" />
                <span>{props.stars}</span>
              </div>
              <FontAwesomeIcon icon={faDownload} size="xs" color="#e75e8c" />
              <span>{props.downloads}</span>
          </div>
        </div>
      </div>
      <div className={classes.topDownloadedCardBtn}>
        <FontAwesomeIcon icon={faDownload} color="#e75e8c" />
      </div>
    </div>
  );
}

export default TopDownloadedCard;