import React, { useEffect } from "react";
import cars from "../../assets/cars.jpg";
import realestate from "../../assets/real-estate.jpg";
import pharmacy from "../../assets/pharmacy.webp";
import AOS from "aos";
import "aos/dist/aos.css";

const Blogs = () => {
  return (
    <main data-aos="fade-up" data-aos-offset="200" id="services">
      <section className="container mb-10 py-8" id="services">
        <h1 className="mb-8 border-l-8 py-2 pl-2 text-center text-3xl font-bold">
          Our Projects
        </h1>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3">
          <div
            id="card"
            className="p-4 shadow-lg transition-all duration-500 hover:shadow-xl dark:bg-slate-950"
          >
            <div className="overflow-hidden">
              <a href="https://drive.empowerafricanow.com/" target="blank">
              <img
                src={cars}
                alt="No image"
                className="mx-auto h-[250px] w-full object-cover transition duration-700 hover:skew-x-2 hover:scale-110"
              />
              </a>
            </div>
            
            <div className="space-y-3 py-3">
              <h1 className="line-clamp-1 text-xl font-bold">
                Car Rental Website
              </h1>
              <p className="line-clamp-2">
                We have developed car rental system to make our client happy and easy booking , book with us on afoldable price and get discount
              </p>
            </div>
            <a href="https://drive.empowerafricanow.com/" target="blank">
            <button className="rounded-md border-2 border-primary bg-primary px-4 py-2 text-sm text-white transition-colors duration-300 hover:bg-primary/80">
                Book Now
              </button>
              </a>
            
            
          </div>
          <div
            id="card"
            className="p-4 shadow-lg transition-all duration-200 hover:shadow-xl dark:bg-slate-950"
          >
            <div className="overflow-hidden">
              <img
                src={realestate}
                alt="No image"
                className="mx-auto h-[250px] w-full object-cover transition duration-700 hover:skew-x-2 hover:scale-110"
              />
            </div>
            
            <div className="space-y-3 py-3">
              <h1 className="line-clamp-1 text-xl font-bold">
                Real Estate system
              </h1>
              <p className="line-clamp-2">
                Empower Africa Now developed Real estate system for making easy life for our client, rent house, by house, buy Prot with us
              </p>
            </div>
            <a href="#">
            <button className="rounded-md border-2 border-primary bg-primary px-4 py-2 text-sm text-white transition-colors duration-300 hover:bg-primary/80">
                Vist Website
              </button>
              </a>
          </div>
          <div
            id="card"
            className="p-4 shadow-lg transition-all duration-200 hover:shadow-xl dark:bg-slate-950"
          >
            <div className="overflow-hidden">
              <img
                src={pharmacy}
                alt="No image"
                className="mx-auto h-[250px] w-full object-cover transition duration-700 hover:skew-x-2 hover:scale-110"
              />
            </div>
            
            <div className="space-y-3 py-3">
              <h1 className="line-clamp-1 text-xl font-bold">
                Pharmacy
              </h1>
              <p className="line-clamp-2">
                Empower Africa Now owns Pharmacy located at Kicukiro center
              </p>
            </div>
            <a href="#">
            <button className="rounded-md border-2 border-primary bg-primary px-4 py-2 text-sm text-white transition-colors duration-300 hover:bg-primary/80">
                Talk to Pharmacist 
              </button>
              </a>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Blogs;
