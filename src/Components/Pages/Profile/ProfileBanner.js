import React from 'react';
import DivWrapper from '../../UI/Container/DivWrapper';
import classes from "./ProfileBanner.module.css";
import TopBanner from './TopBanner';

const ProfileBanner = (props) => {
  return (
    <section className={classes.profileBanner}>
        <DivWrapper>
            <TopBanner />
        </DivWrapper>
    </section>
  )
}

export default ProfileBanner;