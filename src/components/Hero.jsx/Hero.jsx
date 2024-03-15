import React from "react";
import Banner from "../../assets/undraw_real_time_sync_re_nky7.svg";

const Hero = () => {
  return (
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
              <button className="rounded-md border-2 border-primary bg-white px-4 py-2 text-sm text-primary transition-colors duration-300 hover:bg-purple-400 hover:text-white">
                Get Started
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
  );
};

export default Hero;
