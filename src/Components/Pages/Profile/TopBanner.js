import React from 'react';
import { Link } from 'react-router-dom';
import classes from "./TopBanner.module.css";
import Button from '../../UI/Button';
import profileImage from "../../../Assets/profile.jpg";
import ProfileCard from './ProfileCard';
import MostPopularClips from './MostPopularClips';



const TopBanner = () => {
  return (
    <section className={classes.Banner}>
      <div className={classes.topBanner}>
        <div className={classes.topBannerCards}>
          <div className={classes.topBannerCardsContent}>
            <img src={profileImage} alt="profileImage" />
          </div>
        </div>
        <div className={classes.topBannerCards}>
          <div className={classes.topBannerCardsContent}>
            <Button className={classes.offline}>Offline</Button>
            <h3 className={classes.name}>Alan Smithee</h3>
            <p className={classes.desc}>
              You Haven't Gone Live yet. Go Live By Touching The Button Below.
            </p>
            <Link to="/profile">
              <Button className={classes.button}>Start Live Stream</Button>
            </Link>
          </div>
        </div>
        <div className={classes.topBannerCards}>
          <ProfileCard />
        </div>
      </div>
      <div className={classes.bottomBanner}>
        <MostPopularClips />
      </div>
    </section>
  );
}

export default TopBanner; 