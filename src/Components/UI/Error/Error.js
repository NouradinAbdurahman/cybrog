import React from "react";
import { Link } from "react-router-dom";
import classes from "./Error.module.css";
const Error = () => {
  return (
    <section className={classes.error}>
      <div className={classes.errorContent}>
        <h2>404</h2>
        <p>page not found.</p>
        <Link to="/" className={classes.link}>
          back to home
        </Link>
      </div>
    </section>
  );
};

export default Error;
