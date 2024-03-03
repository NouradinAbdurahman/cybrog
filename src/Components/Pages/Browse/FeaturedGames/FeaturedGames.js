import React from 'react';
import { Link} from "react-router-dom";
import DivWrapper from '../../../UI/Container/DivWrapper';
import classes from "./FeaturedGames.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import FeaturedGamesCard from './FeaturedGamesCard';

import featuredImage1 from "../../../../Assets/featured-01.jpg";
import featuredImage2 from "../../../../Assets/featured-02.jpg";
import featuredImage3 from "../../../../Assets/featured-03.jpg";
import featuredImage4 from "../../../../Assets/featured-02.jpg";
import TopDownloaded from '../TopDownloaded/TopDownloaded';

const FeaturedGames = () => {
  return (
    <section className={classes.browseContent}>
      <div className={classes.featuredGames}>
        <DivWrapper>
          <div className={classes.featuredTitle}>
            <h1 className={classes.featuredGamesrTitle}>
              {" "}
              <span>Featured</span> Games
            </h1>
            <div className={classes.prevNextBtn}>
              <FontAwesomeIcon icon={faAngleLeft} color="gray" />
              <FontAwesomeIcon icon={faAngleRight} color="gray" />
            </div>
          </div>
          <div className={classes.featuredCards}>
            <FeaturedGamesCard
              cardImage={featuredImage1}
              cardImageAlt="cardImage"
              cardTitle="CS-GO"
              cardDesc="249K Downloads"
              stars="4.8"
              downloads="2.3M"
              streaming="2.4k Streaming"
            />
            <FeaturedGamesCard
              cardImage={featuredImage2}
              cardImageAlt="cardImage"
              cardTitle="Gamezer"
              cardDesc="249K Downloads"
              stars="4.8"
              downloads="2.3M"
              streaming="2.4k Streaming"
            />
            <FeaturedGamesCard
              cardImage={featuredImage3}
              cardImageAlt="cardImage"
              cardTitle="Island Rusty"
              cardDesc="249K Downloads"
              stars="4.8"
              downloads="2.3M"
              streaming="2.4k Streaming"
            />
            
            <FeaturedGamesCard
              cardImage={featuredImage4}
              cardImageAlt="cardImage"
              cardTitle="Island Rusty"
              cardDesc="249K Downloads"
              stars="4.8"
              downloads="2.3M"
              streaming="2.4k Streaming"
            />
          </div>
        </DivWrapper>
      </div>
      <div className={classes.topDownloaded}>
        <DivWrapper>
          <h1 className={classes.topDownloadedTitle}>
            {" "}
            <span>Top</span> Downloaded
          </h1>
          <TopDownloaded />
          <Link to="/profile"><p className={classes.viewAllGames}>View All Games</p></Link>
        </DivWrapper>
      </div>
    </section>
  );
}

export default FeaturedGames;