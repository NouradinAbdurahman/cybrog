import React from 'react';
import classes from "./HowToStartLiveStreamCards.module.css";

const HowToStartLiveStreamCards = (props) => {
  return (
    <div className={classes.howToStartLiveStreamCards}>
      <div className={classes.howToStartLiveStreamCard}>
        <div className={classes.number}>{props.stepNumber}</div>
        <div className={classes.imageContainer}>
          <img src={props.cardImage} alt={props.cardAlt} />
        </div>
        <h4>{props.title}</h4>
        <p>{props.desc}</p>
      </div>
    </div>
  );
}

export default HowToStartLiveStreamCards;