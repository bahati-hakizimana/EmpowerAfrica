import React from "react";
import { FaUserCircle } from "react-icons/fa";
import { Link } from 'react-router-dom';

const ResponsiveMenu = ({ showMenu }) => {
  console.log("showMenu", showMenu);
  
  return (
    <div
      className={`${
        showMenu ? "left-0" : "-left-[100%]"
      } fixed bottom-0 top-0 z-20 flex h-screen w-[75%] flex-col  justify-between bg-primary px-8 pb-6 pt-24 text-white transition-all duration-200 md:hidden`}
    >
      <div className="card">
       
        <nav className="mt-12">
          <ul className="space-y-4 text-xl">
            <li>
              <a href="#home" className="mb-5 inline-block">
                Home
              </a>
            </li>
            <li>
              <a href="#services" className="mb-5 inline-block">
                Services
              </a>
            </li>
            <li>
              <a href="#about" className="mb-5 inline-block">
                About us
              </a>
            </li>
            <li className='cursor-pointer '>
                <Link to="/careers" className="flex h-[72px] items-center gap-[2px] relative hover:text-yellow-400">
                  Careers
                  {/* {activeMenu === 'careers' && <div className="absolute bottom-0 left-0 h-1 w-full bg-white"></div>} */}
                </Link>
              </li>
            <li>
              <a href="#" className="mb-5 inline-block">
                Login
              </a>
            </li>
            <li>
              <a href="#" className="mb-5 inline-block">
                Careers
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <div className="footer">
        <h1>© 2024 Empower Africa Now Ltd. All Rights Reserved</h1>
      </div>
    </div>
  );
};

export default ResponsiveMenu;
