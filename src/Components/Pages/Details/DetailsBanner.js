import React from 'react';
import classes from "./DetailsBanner.module.css";
import {Link} from "react-router-dom";

import featuredImage1 from "../../../Assets/feature-left.jpg";
import featuredImage2 from "../../../Assets/feature-right.jpg";

const DetailsBanner = (props) => {
  return (
    <section className={classes.detailsBanner}>
      <div className={classes.detailsBannerContent}>
        <div className={classes.featureLeft}>
          <img src={featuredImage1} alt={props.featureImageAlt} />
        </div>
        <div className={classes.featureRight}>
          <Link to="/">
            <img src={featuredImage2} alt={props.featureImageAlt} />
          </Link>
        </div>
      </div>
    </section>
  );
}

export default DetailsBanner;