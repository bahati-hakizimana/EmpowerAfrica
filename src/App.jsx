// App.js
import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

import Navbar2 from './components/navbar/Navbar2';
// import Footer from './components/Footer/Footer';
import Home from './components/Home';
import Career from './components/careers/Career';
import Signin from './components/forms/Signin';

function App() {
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 500,
      easing: 'ease-in-sine',
      delay: 100,
    });
    AOS.refresh();
  }, []);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/careers" element={<Career />} />
          <Route path="/login" element={<Signin />} />
          <Route path="/" element={<Home />} />
        </Routes>
        {/* <Footer /> */}
      </BrowserRouter>
    </>
  );
}

export default App;
