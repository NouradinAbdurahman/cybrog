import React from 'react';
import classes from "./CardWrapper.module.css";

const CardWrapper = (props) => {
  return (
    <div className={`${classes.cardWrapper} ${props.className}`}>{props.children}</div>
  )
}

export default CardWrapper;