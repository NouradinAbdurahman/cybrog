import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { faCirclePlay} from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom';
import CardWrapper from "../../UI/Container/CardWrapper";
import classes from "./MostPopularClipsCard.module.css";
const MostPopularClipsCard = (props) => {
  return (
    <section className={classes.mostPopularClipsCard}>
      <CardWrapper>
        <div className={classes.mostPopularClipsContent}>
          <div className={classes.mostPopularClipsImage}>
            <div className={classes.image}>
                <img src={props.image} alt={props.alt} />
            </div>
            <div className={classes.overlay}>
                <Link to={props.url}><FontAwesomeIcon icon={faCirclePlay} size="3x" color=" white" className={classes.colorr}/></Link>
            </div>
          </div>
          <div className={classes.mostPopularClipsInfo}>
            <h3>{props.name}</h3>
            <p><FontAwesomeIcon icon={faEye} color="#eb608f" /> {props.veiws}</p>
          </div>
        </div>
      </CardWrapper>
    </section>
  );
}
export default MostPopularClipsCard;