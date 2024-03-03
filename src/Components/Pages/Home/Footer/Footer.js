import React from 'react';
import Container from "../../../UI/Container/Container";
import classes from "./Footer.module.css";

const Footer = () => {
  return (
    <Container>
      <div className={classes.footer}>
        <p className={classes.footerContent}>
          Copyright © 2036 Cyborg Gaming Company. All rights reserved.
        </p>
      </div>
    </Container>
  );
}

export default Footer;