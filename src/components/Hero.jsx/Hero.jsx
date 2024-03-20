import React, { useState } from "react";
import Banner from "../../assets/undraw_real_time_sync_re_nky7.svg";
import Cont from "../contact/Cont";

const Hero = () => {
  const [showCont, setShowCont] = useState(false);
  return (
    <>
      <main className="bg-primary from-violet-950 to-violet-900 pt-20 dark:bg-primary" id="home">
        <section className="container flex h-[650px] flex-col items-center justify-center md:h-[500px] ">
          <div className="grid grid-cols-1 items-center gap-8 dark:text-white md:grid-cols-2">
            <div
              data-aos="fade-right"
              data-aos-duration="400"
              data-aos-once="true"
              className="flex flex-col items-center gap-4 text-center text-white md:items-start md:text-left "
            >
              <h1 className=" text-4xl ">
                Welcome to Empower Africa Now
              </h1>
              <p className="">
                <span className=" text-2xl text-green-400">Accelerate Your Business Growth With Us</span> <br />
                Empower Africa Now believes in growth <br />
                by the result of forces working together <br />
              </p>
              <div className="space-x-4">
                <button onClick={() => setShowCont(true)} className="rounded-md border-2 border-primary bg-white px-4 py-2 text-sm text-primary transition-colors duration-300 hover:bg-purple-400 hover:text-white">
                  Get Our News Letter
                </button>
                <a href="#contact">
                  <button className="border-1  rounded-md border-2 border-white px-4 py-2 text-sm text-white transition-colors duration-300 hover:bg-purple-400 hover:text-white ">
                    Talk to Us
                  </button>
                </a>

              </div>
            </div>
            <div
              data-aos="fade-left"
              data-aos-duration="400"
              data-aos-once="true"
              className="mx-auto max-w-xs p-4"
            >
              <img src={Banner} alt="No image" className="hover:drop-shadow-md" />
            </div>
          </div>
        </section>
      </main>
      <Cont isVisible={showCont} onClose={() => setShowCont(false)}>
        <div className="p-6 dark:text-black w-[657px]">
          <h3 className="text-xl text-center">Subscribe for our news letter</h3>
          <div className="flex flex-row justify-center">

            <form className="max-w-sm mx-auto mb-2">
              <div className="mb-5">
                <label htmlFor="email" className=" block mb-2 text-sm font-medium text-gray-900 dark:text-black">Your email</label>
                <input type="email" id="email" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="name@gmail.com" required />
              </div>
              <div className="mb-5">
                <label htmlFor="confirmemail" className=" block mb-2 text-sm font-medium text-gray-900 dark:text-black">Confirm Your email</label>
                <input type="email" id="email" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="re enter name@gmail.com" required />
              </div>
              <button type="submit" className="text-white bg-blue-700 hover:bg-purple-500 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Substcribe</button>
            </form>
          </div>
        </div>



      </Cont>
    </>

  );
};

export default Hero;
