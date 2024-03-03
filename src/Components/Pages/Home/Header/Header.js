import React from 'react';
import Container from '../../../UI/Container/Container';
import classes from "./Header.module.css";
import LogoImage from "../../../../Assets/logo.png";
import ProfileHeader from "../../../../Assets/profile-header.jpg";
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
// import { faXmark } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
    const navOpen = () => {
        console.log("NavOpen Clicked");
    }
    // const navClose = () => {
    //     console.log("NavClose Clicked");
    // }
  return (
    <header>
        <Container>
            <div className={classes.header_content}>
                <div className={classes.logo_container}>
                    <div className={classes.logo}>
                        <Link to="/"><img src={LogoImage} alt="Logo_image"/></Link>
                    </div>
                    <div className={classes.search_container}>
                        <form>
                            <div className={classes.search}>
                                <input type="search" id='search' name='serach' placeholder='Type something'/>
                            </div>
                        </form>
                    </div>
                </div>
                <div className={classes.navOpen} onClick={navOpen}>
                    <FontAwesomeIcon icon={faBars} color="#eb608f" size='xl' />
                </div>
                {/* <div className={classes.navClose} onClick={navClose}>
                    <FontAwesomeIcon icon={faXmark} color="#eb608f" size='xl' />
                </div> */}
                <nav>
                   <ul>
                    <li className={classes.list}><Link to="/"className={`${classes.link} ${classes.active}`}>home</Link></li>
                    <li className={classes.list}><Link to="/browse"className={classes.link}>browse</Link></li>
                    <li className={classes.list}><Link to="/details"className={classes.link}>details</Link></li>
                    <li className={classes.list}><Link to="/stream"className={classes.link}>stream</Link></li>
                    <li className={classes.list}><Link to="/profile" className={classes.link}><button type='button' className={classes.header_btn}>profile<img className={classes.profileHeader} src={ProfileHeader} alt='profileHeader'/></button></Link></li>
                    </ul> 
                </nav>
            </div>
        </Container>
    </header>
  );
}

export default Header;