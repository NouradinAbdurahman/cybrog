import React from 'react';
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
// import { Header, Container, Footer, Banner } from './Components/index';
import Home from './Components/Pages/Home/Home';
import Browse from './Components/Pages/Browse/Browse';
import Details from './Components/Pages/Details/Details';
import Stream from "./Components/Pages/Stream/Stream";
import Profile from './Components/Pages/Profile/Profile';
import Error from './Components/UI/Error/Error';
import { Footer } from './Components';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="browse" element={<Browse />} />
        <Route path="details" element={<Details />} />
        <Route path="stream" element={<Stream />} />
        <Route path="profile" element={<Profile />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer/>
    </Router>
  );
}
export default App;
