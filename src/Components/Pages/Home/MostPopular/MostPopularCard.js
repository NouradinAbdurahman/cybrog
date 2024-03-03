import React from 'react';
import CardWrapper from '../../../UI/Container/CardWrapper';
import classes from "./MostPopularCard.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const MostPopularCard = (props) => {
  return (
    <>
      <CardWrapper>
        <div className={classes.mostPopularCard}>
          <div className={classes.cardContent}>
            <div className={classes.cardImage}>
              <img src={props.image} alt={props.imageAlt} />
            </div>
            <div className={classes.cardTitleStars}>
              <h3 className={classes.cardTitle}>{props.title}</h3>
              <div className={classes.stars}>
                <FontAwesomeIcon icon={faStar} size="xs" color="yellow" />
                <span>{props.star}</span>
              </div>
            </div>
            <div className={classes.cardDescDownloads}>
              <p className={classes.cardDesc}>{props.description}</p>
              <div className={classes.downloads}>
                <FontAwesomeIcon icon={faDownload} size="xs" color="#e75e8c" />
                <span>{props.downloads}</span>
              </div>
            </div>
          </div>
        </div>
      </CardWrapper>
    </>
  );
}

export default MostPopularCard;