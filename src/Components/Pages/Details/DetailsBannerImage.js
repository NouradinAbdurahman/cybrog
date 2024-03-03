import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faServer } from "@fortawesome/free-solid-svg-icons";
import { faGamepad } from "@fortawesome/free-solid-svg-icons";
import Button from "../../UI/Button"
import classes from "./DetailsBannerImage.module.css";
import DivWrapper from '../../UI/Container/DivWrapper';

import DetailsImage1 from "../../../Assets/details-01.jpg";
import DetailsImage2 from "../../../Assets/details-02.jpg";
import DetailsImage3 from "../../../Assets/details-03.jpg";
import { Link } from 'react-router-dom';

const DetailsBannerImage = (props) => {
  return (
    <DivWrapper>
      <section className={classes.detailsBannerImage}>
        <div className={classes.detailsBannerImageTop}>
          <div className={classes.detailsBannerImageTopContent}>
            <div className={classes.rightInfo}>
              <div className={classes.rightInfoContent}>
                <h4>Fortnite</h4>
                <p>Sandbox</p>
              </div>
              <div>
                <p><FontAwesomeIcon icon={faStar} color="yellow" /> 4.8</p>
                <p><FontAwesomeIcon icon={faDownload} color="#e75e8c" /> 3.2M</p>
              </div>
            </div>
            <div className={classes.leftInfo}>
              <p><FontAwesomeIcon icon={faStar} color="yellow" /> 4.8</p>
                <p><FontAwesomeIcon icon={faDownload} color="#e75e8c" /> 3.2M</p>
                <p><FontAwesomeIcon icon={faServer} color="#e75e8c" /> 36GB</p>
                <p><FontAwesomeIcon icon={faGamepad} color="#e75e8c" /> Action</p>
            </div>
          </div>
        </div>
        <div className={classes.detailsBannerImageBottom}>
          <div className={classes.detailsBannerImageBottomImages}>
            <div className={classes.detailsBannerImageBottomImagesContent}>
            <img src={DetailsImage1}  alt="DeatilsImages"/>
            </div>
            <div className={classes.detailsBannerImageBottomImagesContent}>
            <img src={DetailsImage2}  alt="DeatilsImages"/>
            </div>
            <div className={classes.detailsBannerImageBottomImagesContent}>
            <img src={DetailsImage3}  alt="DeatilsImages"/>
            </div>
          </div>
          <div className={classes.detailsBannerImageBottomContent}>
            <p>Cyborg Gaming is free HTML CSS website template provided by TemplateMo. This is Bootstrap v5.2.0 layout. You can make a small contribution via PayPal to info [at] templatemo.com and thank you for supporting. If you want to get the PSD source files, please contact us. Lorem ipsum dolor sit consectetur es dispic dipiscingei elit, sed doers eiusmod lisum hored tempor.</p>
            <Link to="/Stream"><Button className={classes.buuton}>Download Fortnite Now!</Button></Link>
          </div>
        </div>
      </section>
    </DivWrapper>
  );
}

export default DetailsBannerImage