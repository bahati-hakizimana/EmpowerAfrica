import React from "react";
import blog2 from "../../assets/blog2.jpg";

const AboutUs = () => {
    return (
        <section>
            <main className="bg-slate-100 dark:bg-slate-900 dark:text-white" id="aboutus">
                <h2 className=" text-center text-3xl underline underline-offset-4">About us</h2>
                <section className="container flex flex-col items-center justify-center py-10 md:h-[500px] ">

                    <div className="grid grid-cols-1 items-center gap-4  md:grid-cols-2">
                        <div

                        >
                            <img
                                src={blog2}
                                alt="No image"
                                className="max-auto w-full hover:drop-shadow-md"
                            />
                        </div>
                        <div

                            data-aos="fade-right"
                            data-aos-duration="400"
                            data-aos-once="true"
                            className="flex flex-col items-start gap-4 text-left md:items-start md:p-8 md:text-left "

                        >
                            <h1 className="text-2xl md:text-2xl ">
                                Empowe Africa Now develops and maintains its products and services to be enterprise grade.
                            </h1>
                            <p className="text-sm  dark:text-slate-400">
                                Empower Africa Now develops and maintains its products and services to be enterprise grade.
                                reliable, secure,cost-efficient and interoperable while offering customers a choice in
                                customizable solutionsthat best meet their business needs.
                            </p>
                            <div>
                                <h2 className=" text-2xl">Vision</h2>
                                <p className="text-sm  dark:text-slate-400">
                                    Empower Africa Now develops and maintains its products and services to be enterprise grade.
                                    reliable, secure,cost-efficient and interoperable while offering customers a choice in
                                    customizable solutionsthat best meet their business needs.
                                </p>
                            </div>
                            <div>
                                <h2 className=" text-2xl">Mission</h2>
                                <p className="text-sm  dark:text-slate-400">
                                    To Ensure customer satisfaction with carefully crafted
                                    customizedsolutions to best fit their business needs
                                    Kts focuses at re-defining and providing the broadest selection
                                    of solutions to people and businesses that will take them to the next level
                                    Kts aim is to serve customers with the world class solutions
                                    to satisfy their business needs
                                </p>
                            </div>
                            {/* <div className="space-x-4">
                                <button className="rounded-md border-2 border-primary bg-primary px-4 py-2 text-sm text-white transition-colors duration-300 hover:bg-primary/80">
                                    Get Started
                                </button>
                            </div> */}
                        </div>

                    </div>
                </section>
            </main>
        </section>
    );
};

export default AboutUs;
