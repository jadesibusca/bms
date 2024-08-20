import React from 'react';
import { useState, useEffect } from "react";
import { Navigation } from "./components/navigation";
import { Header } from "./components/header";
import { About } from "./components/about";
import { Services } from "./components/services";
import { Testimonials } from "./components/testimonials";
import { Contact } from "./components/contact";
import JsonData from "./data/data.json";
import SmoothScroll from "smooth-scroll";
import "./App.css";
import { Howitworks } from './components/howitworks';
import {Outlet} from "react-router-dom";
export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});


const App = () => {
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);

  return (
    <div>
      {/* <Fragment>
        <Navbar />
        <div style={{ overflowY: "scroll", height: "800px" }}></div>
      </Fragment> */}
      {/* <Navbar /> */}
      <Navigation />
      
      <Header data={landingPageData.Header} />
      {/* <Features data={landingPageData.Features} /> */}
      <About data={landingPageData.About} />
      <Services data={landingPageData.Services} />
      <Howitworks data={landingPageData.Howitworks} />
      <Testimonials data={landingPageData.Testimonials} />
     
      {/* <Team data={landingPageData.Team} /> */}
      <Contact data={landingPageData.Contact} />
      <Outlet />

      {/* <iframe title="issmvideo" src="https://drive.google.com/file/d/1kCbm19H6paSspYBEnxzOKUGXjDr6bavN/preview" width="100%" height="100%" allow="autoplay"></iframe>
 */}

    </div>
  );
};

export default App;
