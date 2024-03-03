import React from 'react';
import classes from "./ProfileCard.module.css";
const ProfileCard = () => {
  return (
    <div className={classes.profileCard}>
      <div className={classes.profileCardContent}>
        <p>Games Downloaded</p>
        <p className={classes.count}>3</p>
      </div>
      <div className={classes.profileCardContent}>
        <p>Friends Online</p>
        <p className={classes.count}>16</p>
      </div>
      <div className={classes.profileCardContent}>
        <p>Live Streams</p>
        <p className={classes.count}>None</p>
      </div>
      <div className={classes.profileCardContent}>
        <p>Clips</p>
        <p className={classes.count}>29</p>
      </div>
    </div>
  );
}

export default ProfileCard;