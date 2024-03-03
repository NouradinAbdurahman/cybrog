import React from 'react';
import Header from './Header/Header';
import WrappContainer from '../../UI/Container/WrappContainer';
import Container from '../../UI/Container/Container';
import GamingLibrary from '../Home/GamingLibrary/GamingLibrary';
import ProfileBanner from './ProfileBanner';
import classes from ".//Profile.module.css";

const Profile = () => {
  return (
    <>
      <Header />
      <Container>
        <WrappContainer>
          <section className={classes.profile}>
            <ProfileBanner />
            <GamingLibrary />
          </section>
        </WrappContainer>
      </Container>
    </>
  );
}

export default Profile;