import React from 'react';
import DivWrapper from '../../../UI/Container/DivWrapper';
import classes from "./MostPopularLiveStream.module.css";
import MostPopularLiveStreamCard from './MostPopularLiveStreamCard';
import Button from "../../../UI/Button";
import {Link} from "react-router-dom";

import image1 from "../../../../Assets/stream-01.jpg";
import image2 from "../../../../Assets/stream-02.jpg";
import image3 from "../../../../Assets/stream-03.jpg";
import image4 from "../../../../Assets/stream-04.jpg";

import avatarImage1 from "../../../../Assets/avatar-01.jpg";
import avatarImage2 from "../../../../Assets/avatar-02.jpg";
import avatarImage3 from "../../../../Assets/avatar-03.jpg";
import avatarImage4 from "../../../../Assets/avatar-04.jpg";


const MostPopularLiveStream = () => {
  return (
    <section className={classes.mostPopularLiveStream}>
      <DivWrapper>
        <h1 className={classes.mostPopularTitle}>
          {" "}
          <span>Most Popular</span> Live Stream
        </h1>
        <div className={classes.mostPopularLiveStreamCardContent}>
          <MostPopularLiveStreamCard
            avatar={avatarImage1}
            avatarAlt="AvatarImage"
            cardimage={image1}
            cardImageAlt="CardImage"
            cardName="KenganC"
            cardTitle="Just Talking With Fans"
            views="1.2K"
            gameName="CS-GO"
          />
          <MostPopularLiveStreamCard
            avatar={avatarImage2}
            cardimage={image2}
            cardImageAlt="CardImage"
            cardName="LunaMa"
            cardTitle="CS-GO 36 Hours Live Stream"
            views="1.2K"
            gameName="CS-GO"
          />
          <MostPopularLiveStreamCard
            avatar={avatarImage3}
            cardimage={image3}
            cardImageAlt="CardImage"
            cardName="Areluwa"
            cardTitle="JMaybe Nathej Allnight Chillin"
            views="1.2K"
            gameName="CS-GO"
          />
          <MostPopularLiveStreamCard
            avatar={avatarImage4}
            cardimage={image4}
            cardImageAlt="CardImage"
            cardName="GangTm"
            cardTitle="Live Streaming Till Morning"
            views="1.2K"
            gameName="CS-GO"
          />
        </div>
        <Link to="/stream">
          <Button className={classes.button}>Discover All Streams</Button>
        </Link>
      </DivWrapper>
    </section>
  );
}

export default MostPopularLiveStream;