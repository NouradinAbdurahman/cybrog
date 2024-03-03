import React from "react";
import {Link} from "react-router-dom";
import classes from "./GamingLibrary.module.css";
import DivWrapper from "../../../UI/Container/DivWrapper";
import GamingLibraryCard from "../GamingLibrary/GamingLibraryCard";
import Button from "../../../UI/Button";

import image1 from "../../../../Assets/popular-01.jpg";
import image2 from "../../../../Assets/popular-02.jpg";
import image5 from "../../../../Assets/popular-05.jpg";


const GamingLibrary = () => {
  return (
    <section className={classes.gamingLibrary}>
      <DivWrapper>
        <h1 className={classes.gamingLibraryTitle}>
          {" "}
          <span>Your Gaming</span> Library
        </h1>
        <div className={classes.gamingLibraryContent}>
          <GamingLibraryCard
            image={image5}
            alt="cardImage"
            title="Dota 2"
            titleDescriptioin="Sandbox"
            dateTitle="Date Added"
            dateDescription="24/08/2036"
            hoursTitle="Hours Played"
            hoursDescriptioin="634 H 22 Mins"
            currentlyTitle="Currently"
            currentlyDescriptioin="Downloaded"
          />
          <GamingLibraryCard
            image={image1}
            alt="cardImage"
            title="Fortnite"
            titleDescriptioin="Sandbox"
            dateTitle="Date Added"
            dateDescription="22/06/2036"
            hoursTitle="Hours Played"
            hoursDescriptioin="740 H 52 Mins"
            currentlyTitle="Currently"
            currentlyDescriptioin="Downloaded"
          />
          <GamingLibraryCard
            image={image2}
            alt="cardImage"
            title="CS-GO"
            titleDescriptioin="Sandbox"
            dateTitle="Date Added"
            dateDescription="21/04/2036"
            hoursTitle="Hours Played"
            hoursDescriptioin="892 H 14 Mins"
            currentlyTitle="Currently"
            currentlyDescriptioin="Downloaded"
          />
        </div>
        <Link to="/profile"><Button className={classes.button}>View Your Library</Button></Link>
      </DivWrapper>
    </section>
  );
};

export default GamingLibrary;
