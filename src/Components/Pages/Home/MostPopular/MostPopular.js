import React from 'react';
import {Link} from "react-router-dom";
import classes from "./MostPopular.module.css";
import DivWrapper from '../../../UI/Container//DivWrapper';
import MostPopularCard from '../MostPopular/MostPopularCard';
import Button from '../../../UI/Button';

import image1 from "../../../../Assets/popular-01.jpg";
import image2 from "../../../../Assets/popular-02.jpg";
import image3 from "../../../../Assets/popular-03.jpg";
import image4 from "../../../../Assets/popular-04.jpg";
import image5 from "../../../../Assets/popular-05.jpg";
import image6 from "../../../../Assets/popular-06.jpg";
import image7 from "../../../../Assets/popular-07.jpg";
import image8 from "../../../../Assets/popular-08.jpg";

const MostPopular = (props) => {
  return (
    <section className={classes.mostPopular}>
      <DivWrapper>
        <h1 className={classes.mostPopularTitle}>
          {" "}
          <span>Most Popular</span> Right Now
        </h1>
        <div className={classes.mostPopularContent}>
          <MostPopularCard
            image={image1}
            imageAlt="cardImage"
            title="Fortnite"
            description="Sandbox"
            star="4.8"
            downloads="2.3M"
          />
          <MostPopularCard
            image={image2}
            imageAlt="cardImage"
            title="Pubg"
            description="Battle S"
            star="4.8"
            downloads="2.3M"
          />
          <MostPopularCard
            image={image3}
            imageAlt="cardImage"
            title="Dota2"
            description="Steam-X"
            star="4.8"
            downloads="2.3M"
          />
          <MostPopularCard
            image={image4}
            imageAlt="cardImage"
            title="CS-GO"
            description="Legendary"
            star="4.8"
            downloads="2.3M"
          />
          <MostPopularCard
            image={image5}
            imageAlt="cardImage"
            title="Mini Craft"
            description="Legendary"
            star="4.8"
            downloads="2.3M"
          />
          <MostPopularCard
            image={image6}
            imageAlt="cardImage"
            title="Eagles Fly"
            description="Matrix Games"
            star="4.8"
            downloads="2.3M"
          />
          <MostPopularCard
            image={image7}
            imageAlt="cardImage"
            title="Warface"
            description="Max 3D"
            star="4.8"
            downloads="2.3M"
          />
          <MostPopularCard
            image={image8}
            imageAlt="cardImage"
            title="Warcraft"
            description="Legend"
            star="4.8"
            downloads="2.3M"
          />
        </div>
        <Link to="/browse"><Button className={classes.button}>Discover Popular</Button></Link>
      </DivWrapper>
    </section>
  );
}

export default MostPopular;