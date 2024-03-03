import React from "react";
import DivWrapper from "../../UI/Container/DivWrapper";
import classes from "./OtherRelatedGames.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { faStar } from "@fortawesome/free-solid-svg-icons";

import gameImage1 from "../../../Assets/game-01.jpg";
import gameImage2 from "../../../Assets/game-02.jpg";
import gameImage3 from "../../../Assets/game-03.jpg";

const OtherRelatedGames = (props) => {
  return (
    <section className={classes.otherRelatedGames}>
      <DivWrapper>
        <h1 className={classes.otherRelatedGamesTitle}>
          {" "}
          <span>Other Related</span> Games
        </h1>
        <div className={classes.otherRelatedGamesContent}>
          <div className={classes.otherRelatedGamesContentLeft}>
            <div className={classes.otherRelatedGamesContentLeftContent}>
              <div className={classes.imageName}>
                <div className={classes.image}>
                  <img src={gameImage1} alt="gameImage" />
                </div>
                <div className={classes.name}>
                  <h3>Dota 2</h3>
                  <p>Sandbox</p>
                </div>
              </div>
              <div className={classes.stars}>
                <p>
                  <FontAwesomeIcon icon={faStar} color="yellow" /> 4.8
                </p>
                <p>
                  <FontAwesomeIcon icon={faDownload} color="#eb608f" /> 2.3M
                </p>
              </div>
            </div>
            <div className={classes.otherRelatedGamesContentLeftContent}>
              <div className={classes.imageName}>
                <div className={classes.image}>
                  <img src={gameImage2} alt="gameImage" />
                </div>
                <div className={classes.name}>
                  <h3>Dota 2</h3>
                  <p>Sandbox</p>
                </div>
              </div>
              <div className={classes.stars}>
                <p>
                  <FontAwesomeIcon icon={faStar} color="yellow" /> 4.8
                </p>
                <p>
                  <FontAwesomeIcon icon={faDownload} color="#eb608f" /> 2.3M
                </p>
              </div>
            </div>
            <div className={classes.otherRelatedGamesContentLeftContent}>
              <div className={classes.imageName}>
                <div className={classes.image}>
                  <img src={gameImage3} alt="gameImage" />
                </div>
                <div className={classes.name}>
                  <h3>Dota 2</h3>
                  <p>Sandbox</p>
                </div>
              </div>
              <div className={classes.stars}>
                <p>
                  <FontAwesomeIcon icon={faStar} color="yellow" /> 4.8
                </p>
                <p>
                  <FontAwesomeIcon icon={faDownload} color="#eb608f" /> 2.3M
                </p>
              </div>
            </div>
          </div>
          <div className={classes.otherRelatedGamesContentRight}>
            <div className={classes.otherRelatedGamesContentRightContent}>
              <div className={classes.imageName}>
                <div className={classes.image}>
                  <img src={gameImage2} alt="gameImage" />
                </div>
                <div className={classes.name}>
                  <h3>Dota 2</h3>
                  <p>Sandbox</p>
                </div>
              </div>
              <div className={classes.stars}>
                <p>
                  <FontAwesomeIcon icon={faStar} color="yellow" /> 4.8
                </p>
                <p>
                  <FontAwesomeIcon icon={faDownload} color="#eb608f" /> 2.3M
                </p>
              </div>
            </div>
            <div className={classes.otherRelatedGamesContentRightContent}>
              <div className={classes.imageName}>
                <div className={classes.image}>
                  <img src={gameImage1} alt="gameImage" />
                </div>
                <div className={classes.name}>
                  <h3>Dota 2</h3>
                  <p>Sandbox</p>
                </div>
              </div>
              <div className={classes.stars}>
                <p>
                  <FontAwesomeIcon icon={faStar} color="yellow" /> 4.8
                </p>
                <p>
                  <FontAwesomeIcon icon={faDownload} color="#eb608f" /> 2.3M
                </p>
              </div>
            </div>
            <div className={classes.otherRelatedGamesContentRightContent}>
              <div className={classes.imageName}>
                <div className={classes.image}>
                  <img src={gameImage3} alt="gameImage" />
                </div>
                <div className={classes.name}>
                  <h3>Dota 2</h3>
                  <p>Sandbox</p>
                </div>
              </div>
              <div className={classes.stars}>
                <p>
                  <FontAwesomeIcon icon={faStar} color="yellow" /> 4.8
                </p>
                <p>
                  <FontAwesomeIcon icon={faDownload} color="#eb608f" /> 2.3M
                </p>
              </div>
            </div>
          </div>
        </div>
      </DivWrapper>
    </section>
  );
};

export default OtherRelatedGames;
