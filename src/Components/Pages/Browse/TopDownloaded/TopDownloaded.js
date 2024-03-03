import React from 'react';
import classes from "./TopDownloaded.module.css";
import TopDownloadedCard from './TopDownloadedCard';

import gameImage1 from "../../../../Assets/game-01.jpg";
import gameImage2 from "../../../../Assets/game-02.jpg";
import gameImage3 from "../../../../Assets/game-03.jpg";

const TopDownloaded = () => {
  return (
    <div className={classes.topDownloaded}>
      <TopDownloadedCard
        cardImage={gameImage1}
        cardImageAlt="cardImage"
        cardTitle="Fortnite"
        cardDesc="Sandbox"
        stars="4.8"
        downloads="2.2M"
      />
      <TopDownloadedCard
        cardImage={gameImage2}
        cardImageAlt="cardImage"
        cardTitle="CS-GO"
        cardDesc="Legendary"
        stars="4.8"
        downloads="2.2M"
      />
      <TopDownloadedCard
        cardImage={gameImage3}
        cardImageAlt="cardImage"
        cardTitle="PugG"
        cardDesc="Battle Royale"
        stars="4.8"
        downloads="2.2M"
      />
    </div>
  );
}

export default TopDownloaded;