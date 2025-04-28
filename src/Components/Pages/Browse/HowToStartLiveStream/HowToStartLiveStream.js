import React from 'react';
import {Link} from "react-router-dom";
import Button from '../../../UI/Button';
import classes from "./HowToStartLiveStream.module.css";
import HowToStartLiveStreamCards from './HowToStartLiveStreamCards';

import serviceImage1 from "../../../../Assets/service-01.jpg";
import serviceImage2 from "../../../../Assets/service-02.jpg";
import serviceImage3 from "../../../../Assets/service-03.jpg";

const HowToStartLiveStream = () => {
  return (
    <section className={classes.howToStartLiveStream}>
      <div className={classes.howToStartLiveStreamContent}>
        <div className={classes.howToStartLiveStreamTitle}>
          <h1 className={classes.title}>
            {" "}
            <span>How To Start Your </span> Live Stream
          </h1>
        </div>
        <div className={classes.howToStartLiveStreamCards}>
          <HowToStartLiveStreamCards
            stepNumber="1"
            cardImage={serviceImage1}
            cardAlt="CardImage"
            title="Go To Your Profile"
            desc="Cyborg Gaming is free HTML CSS website template provided by TemplateMo. This is Bootstrap v5.2.0 layout"
          />
          <HowToStartLiveStreamCards
            stepNumber="2"
            cardImage={serviceImage2}
            cardAlt="CardImage"
            title="Live Stream Button"
            desc="If you wish to support us, you can make a small contribution via PayPal to info [at] templatemo.com"
          />
          <HowToStartLiveStreamCards
            stepNumber="3"
            cardImage={serviceImage3}
            cardAlt="CardImage"
            title="You Are Live"
            desc="You are not allowed to redistribute this template's downloadable ZIP file on any other template collection website."
          />
        </div>
        <div className={classes.howToStartLiveStreamBtn}>
          <Link to="/profile"><Button>Go To Profile</Button></Link>
        </div>
      </div>
    </section>
  );
}

export default HowToStartLiveStream;