import React from 'react';
import UserStreamers from './UserStreamers';
import classes from "./TopStreams.module.css";
import avatarImage1 from "../../../Assets/avatar-01.jpg";
import avatarImage2 from "../../../Assets/avatar-02.jpg";
import avatarImage3 from "../../../Assets/avatar-03.jpg";
import avatarImage4 from "../../../Assets/avatar-04.jpg";
import avatarImage5 from "../../../Assets/avatar-01.jpg";

const TopStreams = () => {
  return (
    <section className={classes.topStreams}>
      <UserStreamers
        count="01"
        avatar={avatarImage1}
        avatarAlt="avatarAltr"
        name="LahutaM"
      />
      <UserStreamers
        count="02"
        avatar={avatarImage2}
        avatarAlt="avatarAltr"
        name="Kengan"
      />
      <UserStreamers
        count="03"
        avatar={avatarImage3}
        avatarAlt="avatarAltr"
        name="Areluwa"
      />
      <UserStreamers
        count="04"
        avatar={avatarImage4}
        avatarAlt="avatarAltr"
        name="Omeg"
      />
      <UserStreamers
        count="05"
        avatar={avatarImage5}
        avatarAlt="avatarAltr"
        name="GangTeam"
      />
    </section>
  );
}

export default TopStreams