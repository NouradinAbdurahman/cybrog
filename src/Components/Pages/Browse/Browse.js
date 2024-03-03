import React from 'react';
import Container from '../../UI/Container/Container';
import WrappContainer from '../../UI/Container/WrappContainer';
import Header from "./Header/Header";
import classes from "./Browse.module.css";
import FeaturedGames from './FeaturedGames/FeaturedGames';
import HowToStartLiveStream from './HowToStartLiveStream/HowToStartLiveStream';
import MostPopularLiveStream from './MostPopularLiveStream/MostPopularLiveStream';

const Browse = () => {
  return (
    <>
    <Header />
    <Container>
      <WrappContainer>
        <section className={classes.browse}>
          <FeaturedGames />
          <HowToStartLiveStream />
          <MostPopularLiveStream />
        </section>
      </WrappContainer>
    </Container>
    </>
  );
}

export default Browse;