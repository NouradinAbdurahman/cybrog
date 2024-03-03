import React from 'react';
import MostPopularClipsCard from './MostPopularClipsCard';
import Button from '../../UI/Button';
import classes from "./MostPopularClips.module.css";

import clipImage1 from "../../../Assets/clip-01.jpg";
import clipImage2 from "../../../Assets/clip-02.jpg";
import clipImage3 from "../../../Assets/clip-03.jpg";
import clipImage4 from "../../../Assets/clip-04.jpg";
import { Link } from 'react-router-dom';

const MostPopularClips = (props) => {
  return (
    <section className={classes.mostPopularClips}>
      <h1 className={classes.mostPopularClipsTitle}>
        {" "}
        <span>Your Most Popular</span> Clips
      </h1>
      <div className={classes.mostPopularClipsCrds}>
        <MostPopularClipsCard
          name="First Clip"
          image={clipImage1}
          alt="clip image"
          veiws="250"
          url="https://www.youtube.com/watch?v=8DM0fweRLLo"
        />
        <MostPopularClipsCard
          name="Second Clip"
          image={clipImage2}
          alt="clip image"
          veiws="183"
          url="https://www.youtube.com/watch?v=8DM0fweRLLo"
        />
        <MostPopularClipsCard
          name="Third Clip"
          image={clipImage3}
          alt="clip image"
          veiws="141"
          url="https://www.youtube.com/watch?v=8DM0fweRLLo"
        />
        <MostPopularClipsCard
          name="Fourth Clip"
          image={clipImage4}
          alt="clip image"
          veiws="91"
          url="https://www.youtube.com/watch?v=8DM0fweRLLo"
        />
      </div>
      <div className={classes.MostPopularClipsButton}>
        <Link to="/profile">
          <Button className={classes.button}>Load More Clips</Button>
        </Link>
      </div>
    </section>
  );
}

export default MostPopularClips; 