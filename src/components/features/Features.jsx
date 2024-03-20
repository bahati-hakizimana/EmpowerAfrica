import React, { useEffect } from "react";
import Img1 from "../../assets/blog1.jpg";
import Img2 from "../../assets/blog2.jpg";
import Img3 from "../../assets/blog3.jpg";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaComputer } from "react-icons/fa6";
import { BiShapePolygon } from "react-icons/bi";
import { FaCar } from "react-icons/fa";
import { BsFillHouseFill } from "react-icons/bs";
import { GiMiracleMedecine } from "react-icons/gi";


const Features = () => {
    return (
        <>
            <main data-aos="fade-up" data-aos-offset="200" id="services">
                <section className="container mb-10 py-8" id="services">
                    <h1 className="mb-8 border-l-8 py-2 pl-2 text-center text-3xl font-bold">
                        Our Services
                    </h1>
                    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3">
                        <div
                            id="card"
                            className="p-4 shadow-lg transition-all duration-500 hover:shadow-xl dark:bg-slate-950"
                        >
                            <div className="overflow-hidden">
                                <a href="https://drive.empowerafricanow.com/" target="blank">
                                    <FaCar className="mx-autocover h-[50px] w-full object- transition duration-700 hover:skew-x-2 hover:scale-110" />
                                </a>

                            </div>

                            <div className="space-y-3 py-3">
                                <h1 className="line-clamp-1 text-xl font-bold text-center">
                                    Car Rental
                                </h1>
                            </div>
                        </div>
                        <div
                            id="card"
                            className="p-4 shadow-lg transition-all duration-200 hover:shadow-xl dark:bg-slate-950"
                        >
                            <div className="overflow-hidden">

                                <GiMiracleMedecine className="mx-autocover h-[50px] w-full object- transition duration-700 hover:skew-x-2 hover:scale-110" />
                            </div>

                            <div className="space-y-3 py-3">
                                <h1 className="line-clamp-1 text-xl text-center font-bold">
                                    Pharmacy Services
                                </h1>

                            </div>
                        </div>
                        <div
                            id="card"
                            className="p-4 shadow-lg transition-all duration-200 hover:shadow-xl dark:bg-slate-950"
                        >
                            <div className="overflow-hidden">

                                <BsFillHouseFill className="mx-autocover h-[50px] w-full object- transition duration-700 hover:skew-x-2 hover:scale-110" />
                            </div>

                            <div className="space-y-3 py-3">
                                <h1 className="line-clamp-1 text-xl font-bold text-center">
                                    Real Estate
                                </h1>

                            </div>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3">
                        <div
                            id="card"
                            className="p-4 shadow-lg transition-all duration-500 hover:shadow-xl dark:bg-slate-950"
                        >
                            <div className="overflow-hidden">
                                <FaComputer className="mx-autocover h-[50px] w-full object- transition duration-700 hover:skew-x-2 hover:scale-110" />
                            </div>

                            <div className="space-y-3 py-3">
                                <h1 className="line-clamp-1 text-xl font-bold text-center">
                                    Busness Advertising
                                </h1>

                            </div>
                        </div>
                        <div
                            id="card"
                            className="p-4 shadow-lg transition-all duration-200 hover:shadow-xl dark:bg-slate-950"
                        >
                            <div className="overflow-hidden">

                                <BiShapePolygon className="mx-autocover h-[50px] w-full object- transition duration-700 hover:skew-x-2 hover:scale-110" />
                            </div>

                            <div className="space-y-3 py-3">
                                <h1 className="line-clamp-1 text-xl text-center font-bold">
                                    Customize Solutions
                                </h1>

                            </div>
                        </div>
                        <div
                            id="card"
                            className="p-4 shadow-lg transition-all duration-200 hover:shadow-xl dark:bg-slate-950"
                        >
                            <div className="overflow-hidden">

                                <FaComputer className="mx-auto cover h-[25px] w-full object- transition duration-700 hover:skew-x-2 hover:scale-110" />
                            </div>

                            <div className="space-y-3 py-3">
                                <h1 className="line-clamp-1 text-xl font-bold text-center">
                                    Bisness Integration
                                </h1>

                            </div>
                        </div>
                    </div>
                </section>
            </main>
           
        </>

    );
};

export default Features;
