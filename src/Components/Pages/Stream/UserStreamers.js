import React from 'react';
import Button from '../../UI/Button';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import classes from "./UserStreamers.module.css";

const UserStreamers = (props) => {
  return (
    <section className={classes.userStreamers}>
      <div className={classes.userStreamersContent}>
        <div className={classes.userStreamersContentInfo}>
          <div className={classes.profile}>
            <div className={classes.count}>{props.count}</div>
            <div><img src={props.avatar} alt={props.avatarAlt}/></div>
          </div>
          <div className={classes.name}>
            <FontAwesomeIcon icon={faCircleCheck} color="#eb608f"/> {props.name}
          </div>
        </div>
        <div className={classes.userStreamersContentButton}>
          <Button className={classes.button}>
            <Link to="/stream"><span>Follow</span></Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

export default UserStreamers;