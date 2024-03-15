import AOS from "aos";
import "aos/dist/aos.css";
// import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';


import Banner from "./components/Banner/Banner";
import Blogs from "./components/Blogs/Blogs";
import Swipe from "./components/Blogs/Swipe";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero.jsx/Hero";
import Navbar2 from "./components/navbar/Navbar2";
import { useEffect } from "react";
import Service from "./components/Service/Service";
import Banner1 from "./assets/blog1.jpg";
import Banner2 from "./assets/blog3.jpg";
import AboutUs from "./components/BannerDetails/AboutUs";
import Features from "./components/features/Features";
import Contact from "./components/contact/Contact";
import Career from "./components/careers/Career";
import Home from "./components/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Signin from "./components/forms/Signin";

function App() {
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 500,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);
  return (
    <>
   <BrowserRouter>
   <Routes>
   <Route path="/" Component={Home} />
   <Route path="/careers" Component={Career} />
   <Route path="/login" Component={Signin} />
   </Routes>
   
   </BrowserRouter>
      
        
     
    </>
  );
}

export default App;
