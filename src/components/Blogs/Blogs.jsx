import React, { useEffect, useState } from "react";
import cars from "../../assets/cars.jpg";
import realestate from "../../assets/real-estate.jpg";
import pharmacy from "../../assets/pharmacy.webp";
import AOS from "aos";
import "aos/dist/aos.css";
import Pharmacy from "../contact/Pharmacy";

const Blogs = () => {
  const [showPharmacy, setShowPharmacy] = useState(false);
  return (

    <>
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
              <a href="#" onClick={() => setShowPharmacy(true)}>
              <img
                src={pharmacy}
                alt="No image"
                className="mx-auto h-[250px] w-full object-cover transition duration-700 hover:skew-x-2 hover:scale-110"
              />

              </a>
              
            </div>
            
            <div className="space-y-3 py-3">
              <h1 className="line-clamp-1 text-xl font-bold">
                Pharmacy
              </h1>
              <p className="line-clamp-2">
                Empower Africa Now owns Pharmacy located at Kicukiro center
              </p>
            </div>
            
            <button onClick={() => setShowPharmacy(true)} className="rounded-md border-2 border-primary bg-primary px-4 py-2 text-sm text-white transition-colors duration-300 hover:bg-primary/80">
                Talk to Pharmacist 
              </button>
              
          </div>
        </div>
      </section>
    </main>
    {/* Talk to Pharmacisty */}

    <Pharmacy isVisible={showPharmacy} onClose={() => setShowPharmacy(false)}>
                <div className="p-6 dark:text-black w-[657px]">
                    <h3 className="text-xl text-center">Reach Our Pharmacist</h3>
                    <div className="flex flex-row justify-center">

                        <form className="max-w-sm mx-auto mb-2">
                            <div className="mb-3">
                                <label htmlFor="email" className=" block mb-2 text-sm font-medium text-gray-900 dark:text-black">Your email</label>
                                <input type="email" id="email" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="name@gmail.com" required />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="phone" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Phone Number</label>
                                <input type="txt" id="phone" name="hpone" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="+250........" required />
                            </div>
                            <div className="mb-3">
                                <label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Your message</label>
                                <textarea id="message" rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Text your message..."></textarea>

                            </div>
                            <button type="submit" className="text-white bg-blue-700 hover:bg-purple-500 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
                        </form>
                    </div>
                </div>



            </Pharmacy>
    </>
    
  );
};

export default Blogs;
