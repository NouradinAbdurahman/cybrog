import React from 'react';
import classes from "./DivWrapper.module.css";

const DivWrapper = (props) => {
  return (
    <div className={`${classes.divWrapper} ${props.className}`}>{props.children}</div>
  )
}

export default DivWrapper;