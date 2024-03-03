import React from 'react';
import Container from './Container';
import classes from "./WrappContainer.module.css";

const WrappContainer = (props) => {
  return (
    <Container>
      <div className={classes.wrappContainer}>{props.children}</div>
    </Container>
  );
}

export default WrappContainer;