import React from "react";
import DivWrapper from "../../UI/Container/DivWrapper";
import MostPopularLiveStream from "./MostPopularLiveStream/MostPopularLiveStream";
import classes from "./Stream.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import Container from "../../UI/Container/Container";

import featuredImage1 from "../../../Assets/featured-01.jpg";
import featuredImage2 from "../../../Assets/featured-02.jpg";
import featuredImage3 from "../../../Assets/featured-03.jpg";
import featuredImage4 from "../../../Assets/featured-02.jpg";
import LiveStreams from "./LiveStreams";
import TopStreams from "./TopStreams";
import Header from "./Header/Header";
import WrappContainer from "../../UI/Container/WrappContainer";

const Stream = () => {
  return (
    <>
      <Header />
      <Container>
        <WrappContainer>
          <section className={classes.streamContent}>
            <div className={classes.streamGames}>
              <DivWrapper>
                <div className={classes.streamTitle}>
                  <h1 className={classes.streamTitle}>
                    {" "}
                    <span>Live</span> Streams
                  </h1>
                  <div className={classes.prevNextBtn}>
                    <FontAwesomeIcon icon={faAngleLeft} color="gray" />
                    <FontAwesomeIcon icon={faAngleRight} color="gray" />
                  </div>
                </div>
                <div className={classes.streamCards}>
                  <LiveStreams
                    cardImage={featuredImage1}
                    cardImageAlt="cardImage"
                    cardTitle="CS-GO"
                    cardDesc="249K Downloads"
                    stars="4.8"
                    downloads="2.3M"
                    streaming="2.4k Streaming"
                  />
                  <LiveStreams
                    cardImage={featuredImage2}
                    cardImageAlt="cardImage"
                    cardTitle="Gamezer"
                    cardDesc="249K Downloads"
                    stars="4.8"
                    downloads="2.3M"
                    streaming="2.4k Streaming"
                  />
                  <LiveStreams
                    cardImage={featuredImage3}
                    cardImageAlt="cardImage"
                    cardTitle="Island Rusty"
                    cardDesc="249K Downloads"
                    stars="4.8"
                    downloads="2.3M"
                    streaming="2.4k Streaming"
                  />

                  <LiveStreams
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
            <div className={classes.topStreams}>
              <DivWrapper>
                <h1 className={classes.topStreamsTitle}>
                  {" "}
                  <span>Top</span> Streamers
                </h1>
                <TopStreams />
              </DivWrapper>
            </div>
          </section>
          <section className={classes.mostPopularLiveStream}>
          <MostPopularLiveStream />
          </section>
        </WrappContainer>
      </Container>
    </>
  );
};

export default Stream;
