import React, { useEffect, useState } from "react";
import { BiSolidSun, BiPhoneCall, BiSolidMoon } from "react-icons/bi";
import { HiMenuAlt3, HiMenuAlt1 } from "react-icons/hi";
import { FaCaretDown } from "react-icons/fa";
import ResponsiveMenu from "./ResponsiveMenu";
import logo from '../../assets/Empower.png'
const Navbar2 = () => {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light",
  );
  const [showMenu, setShowMenu] = useState(false);
  const [activeMenu, setActiveMenu] = useState('home'); // Default active menu is 'home'

  const element = document.documentElement;

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const handleMenuClick = (menu) => {
    setActiveMenu(menu);
  };

  useEffect(() => {
    if (theme === "dark") {
      element.classList.add("dark");
      localStorage.setItem("theme", "dark");
      console.log("dark theme");
    } else {
      element.classList.remove("dark");
      localStorage.setItem("theme", "light");
      console.log("light theme");
    }
  }, [theme]);

  return (
    <>
      <header
        data-aos="fade"
        data-aos-duration="300"
        className="relative z-[99] border-b-[1px]  border-primary/50 bg-purple-500 from-violet-900 via-violet-800 to-violet-900 text-white shadow-lg"
      >
        <nav className="container  flex h-[70px] items-center justify-between py-2 ">
          <div className="text-2xl text-white md:text-3xl ">
            <a href="/#home" className="">
              {/* COZ
              <span className="inline-block font-bold text-primary">WEB</span> */}
              <img src={logo} alt="" className=" w-35 h-12"  />
            </a>
          </div>
          {/* Desktop Menu */}
          <div className="hidden md:block">
            <ul className="flex items-center gap-10">
              <li className={`group relative cursor-pointer ${activeMenu === 'home' ? 'active' : ''}`} onClick={() => handleMenuClick('home')}>
                <a
                  href="/#home"
                  className="flex h-[72px] items-center gap-[2px] relative hover:text-yellow-300"
                >
                  Home
                  {activeMenu === 'home' && <div className="absolute bottom-0 left-0 h-1 w-full bg-white"></div>}
                </a>
                </li>
                
              <li className={`cursor pointer group ${activeMenu === 'services' ? 'active' : ''}`} onClick={() => handleMenuClick('services')}>
                <a
                  href="/#services"
                  className="flex h-[72px] items-center gap-[2px] relative hover:text-yellow-400"
                >
                  Services
                  {activeMenu === 'services' && <div className="absolute bottom-0 left-0 h-1 w-full bg-white"></div>}
                </a>
               
              </li>
              <li className={`cursor pointer group ${activeMenu === 'about' ? 'active' : ''}`} onClick={() => handleMenuClick('about')}>
                <a
                  href="/#aboutus"
                  className="flex h-[72px] items-center gap-[2px] relative hover:text-yellow-400"
                >
                  About
                  {activeMenu === 'about' && <div className="absolute bottom-0 left-0 h-1 w-full bg-white"></div>}
                </a>
               
              </li>
              
              <li className={`cursor pointer ${activeMenu === 'careers' ? 'active' : ''}`} onClick={() => handleMenuClick('careers')}>
                <a href="/#careers" 
                 className="flex h-[72px] items-center gap-[2px] relative hover:text-yellow-400"
                >
                  Careers
                  {/* {activeMenu === 'careers' && <div className="absolute bottom-0 left-0 h-1 w-full bg-white"></div>} */}
                </a>
              </li>
              <li className={`cursor pointer group ${activeMenu === 'contact' ? 'active' : ''}`} onClick={() => handleMenuClick('contact')}>
                <a
                  href="/#contact"
                  className="flex h-[72px] items-center gap-[2px] relative hover:text-yellow-400"
                >
                  Contact Us
                  {activeMenu === 'contact' && <div className="absolute bottom-0 left-0 h-1 w-full bg-white"></div>}
                </a>
               
              </li>
              <li className={`cursor pointer ${activeMenu === 'login' ? 'active' : ''}`} onClick={() => handleMenuClick('login')}>
                <a href="#" className="relative">
                  Login
                  {activeMenu === 'login' && <div className="absolute bottom-0 left-0 h-1 w-full bg-white"></div>}
                </a>
              </li>
              
              {theme === "dark" ? (
                <BiSolidSun
                  onClick={() => setTheme("light")}
                  className="text-2xl"
                />
              ) : (
                <BiSolidMoon
                  onClick={() => setTheme("dark")}
                  className="text-2xl"
                />
              )}
            </ul>
          </div>

          {/* Mobile view  */}
          <div className="flex items-center gap-4 md:hidden ">
            {theme === "dark" ? (
              <BiSolidSun
                onClick={() => setTheme("light")}
                className="text-2xl"
              />
            ) : (
              <BiSolidMoon
                onClick={() => setTheme("dark")}
                className="text-2xl"
              />
            )}
            {showMenu ? (
              <HiMenuAlt1
                onClick={toggleMenu}
                className=" cursor-pointer transition-all"
                size={30}
              />
            ) : (
              <HiMenuAlt3
                onClick={toggleMenu}
                className="cursor-pointer transition-all"
                size={30}
              />
            )}
          </div>
        </nav>
      </header>
      <ResponsiveMenu showMenu={showMenu} />
    </>
  );
};

export default Navbar2;
