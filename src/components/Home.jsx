import React from 'react'
import Banner from "./Banner/Banner";
import Blogs from "./Blogs/Blogs";
import Swipe from "./Blogs/Swipe";
import Footer from "./Footer/Footer";
import Hero from "./Hero.jsx/Hero";
import Navbar2 from "./navbar/Navbar2";
import { useEffect } from "react";
import Service from "./Service/Service";
// import Banner1 from "./assets/blog1.jpg";
// import Banner2 from "./assets/blog3.jpg";
import AboutUs from "./BannerDetails/AboutUs";
// import Contact from "./components/contact/Contact";
import Career from "./careers/Career";
import Contact from './contact/Contact';
import Features from './features/Features';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Signin from './forms/Signin';

const Home = () => {
  return (
    <>
      <div className="dark:bg-slate-900 dark:text-white">
        <div className="fixed left-0 right-0 top-0 z-50 bg-gradient-to-l from-violet-900 via-violet-800 to-violet-900 ">
          <Navbar2 />
        </div>
        <Hero />
        <Service />
        <AboutUs />
        <Features />
        <Banner />
        <Blogs />
        <Contact />
        <Footer />
       
        {/* <Career /> */}
        {/* <Switch>
          <Route path="/careers" component={Career} />
        </Switch> */}
      </div>
    </>
  )
}

export default Home
