import React from 'react';
import  {Link} from "react-router-dom";
import WrappContainer from '../../../UI/Container/WrappContainer';
import GamingLibrary from '../GamingLibrary/GamingLibrary';
import MostPopular from '../MostPopular/MostPopular';
import Button from '../../../UI/Button';
import classes from "./Banner.module.css";

const Banner = () => {
  return (
    <WrappContainer>
      <div className={classes.banner}>
        <div className={classes.banner_content}>
          <h3 className={classes.title}>Welcome to cybrog</h3>
          <p className={classes.desc}>
            <span>browse</span> our popular games here
          </p>
         <Link to="/browse"><Button className={classes.button}>browse now</Button></Link>
        </div>
      </div>
      <MostPopular/>
      <GamingLibrary />
    </WrappContainer>
  );
}

export default Banner;