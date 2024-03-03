import React from 'react';
import classes from "./HowToStartLiveStreamCards.module.css";


const HowToStartLiveStreamCards = (props) => {
  return (
    <div className={classes.howToStartLiveStreamCards}>
      <div className={classes.howToStartLiveStreamCard}>
        <img src={props.cardImage} alt={props.cardAlt} />
        <h4>{props.title}</h4>
        <p>{props.desc}</p>
      </div>
    </div>
  );
}

export default HowToStartLiveStreamCards;