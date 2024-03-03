import React from 'react';
import {Link} from "react-router-dom";
import Button from '../../../UI/Button';
import classes from "./GamingLibraryCard.module.css";

const GamingLibraryCard = (props) => { 
  return (
    <section className={classes.GamingLibraryCard}>
      <div className={classes.GamingLibraryCardImageName}>
        <div className={classes.GamingLibraryCardImage}>
          <img src={props.image} alt={props.alt} />
        </div>
        <div className={classes.GamingLibraryCardName}>
          <h3 className={classes.GamingLibraryCardTitle}>{props.title}</h3>
          <p className={classes.GamingLibraryCardDesc}>{props.titleDescriptioin}</p>
        </div>
      </div>
      <div className={classes.GamingLibraryCardInfo}>
        <div className={classes.GamingLibraryCardDate}>
          <h3 className={classes.GamingLibraryCardDateInfo}>{props.dateTitle}</h3>
          <p className={classes.GamingLibraryCardDateDesc}>{props.dateDescription}</p>
        </div>
        <div className={classes.GamingLibraryCardHours}>
          <h3 className={classes.GamingLibraryCardHoursTitle}>{props.hoursTitle}</h3>
          <p className={classes.GamingLibraryCardHoursDesc}>{props.hoursDescriptioin}</p>
        </div>
        {/* <div className={classes.GamingLibraryCardCurrently}>
             <h3 className={classes.GamingLibraryCardCurrentlyTitle}>{props.currentlyTitle}</h3>
          <p className={classes.GamingLibraryCardCurrentlyDesc}>{props.currentlyDescriptioin}</p>
        </div> */}
      </div>
      <div className={classes.GamingLibraryCardButton}>
        <div className={classes.GamingLibraryCardCurrently}>
             <h3 className={classes.GamingLibraryCardCurrentlyTitle}>{props.currentlyTitle}</h3>
          <p className={classes.GamingLibraryCardCurrentlyDesc}>{props.currentlyDescriptioin}</p>
        </div>
       <div>
        <Link to="/"><Button className={classes.GamingLibraryCardBtn}>downloaded</Button></Link>
       </div>
      </div>
    </section>
  );
}

export default GamingLibraryCard;