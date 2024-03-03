import React from "react";
import Header from "./Header/Header";
import WrappContainer from "../../UI/Container/WrappContainer";
import Container from "../../UI/Container/Container";
import OtherRelatedGames from "./OtherRelatedGames";

import classes from "./Details.module.css";
import DetailsBanner from "./DetailsBanner";
import DetailsBannerImage from "./DetailsBannerImage";

const Details = () => {
  return (
    <>
      <Header />
      <Container>
        <WrappContainer>
          <section className={classes.details}>
            <div className={classes.Banner}>
              <DetailsBanner featureImageAlt="featuredImage" />
            </div>
            <h2 className={classes.detailsTitle}>FORTNITE DETAILS</h2>
            <DetailsBannerImage />
            <OtherRelatedGames/>
          </section>
        </WrappContainer>
      </Container>
    </>
  );
};

export default Details;
