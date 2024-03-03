import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faEye } from '@fortawesome/free-solid-svg-icons';
import { faGamepad } from '@fortawesome/free-solid-svg-icons';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import {Link} from "react-router-dom";
import classes from "./MostPopularLiveStreamCard.module.css";

const MostPopularLiveStreamCard = (props) => {
  return (
    <div className={classes.mostPopularLiveStreamCard}>
      <div className={classes.mostPopularLiveStreamCardImage}>
        <img src={props.cardimage} alt={props.cardImageAlt} />
        <div className={classes.overlay}>
          <div className={classes.overlayTop}>
            <p>Live</p>
          </div>
          <div className={classes.overlayBottom}>
            <Link to="/browse"><p className={classes.view}><FontAwesomeIcon icon={faEye} /> {props.views}</p></Link>
            <Link to="/browse"><p className={classes.gameName}><FontAwesomeIcon icon={faGamepad} /> {props.gameName}</p></Link>
          </div>
        </div>
      </div>
      <div className={classes.mostPopularLiveStreamCardInfo}>
        <div className={classes.profileAvatar}>
          <img src={props.avatar} alt={props.avatarAlt}/>
        </div>
        <div className={classes.mostPopularLiveStreamCardInfoName}>
        <h3><FontAwesomeIcon icon={faCircleCheck}/> {props.cardName}</h3>
        <p>{props.cardTitle}</p>
        </div>
      </div>
    </div>
  );
}

export default MostPopularLiveStreamCard;