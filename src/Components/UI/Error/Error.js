import React from "react";
import { Link } from "react-router-dom";
import classes from "./Error.module.css";

const Error = () => {
  return (
    <section className={classes.error}>
      <div className={classes.errorContent}>
        <div className={classes.glitch}>
          <h2 data-text="404">404</h2>
        </div>
        <p className={classes.subtitle}>Page Not Found.</p>
        <div className={classes.description}>
          The page you are looking for might have been removed, 
          had its name changed, or is temporarily unavailable.
        </div>
        <Link to="/" className={classes.link}>
          <span className={classes.btnGlow}></span>
          Back To Home
          <span className={classes.btnGlow}></span>
        </Link>
      </div>
    </section>
  );
};

export default Error;
