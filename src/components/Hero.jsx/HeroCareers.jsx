import React, { useState } from "react";
import Banner from "../../assets/undraw_real_time_sync_re_nky7.svg";
import Apply from "../Hero.jsx/Apply";
import AvailableRoles from "./AvailableRoles";

const HeroCareers = () => {
  const [showApply, setShowApply] = useState(false);

  const handleShowAvailableRoles = () => {
    setShowAvailableRoles(true);
  };

  return (
    <>
      <main className="bg-white from-violet-950 to-violet-900 pt-30 dark:bg-primary overflow-y-scroll min-h-screen" id="home">
        <section className="container mt-10 flex h-screen flex-col items-center justify-center md:h-[500px] ">
          <div className="grid grid-cols-1 items-center gap-8 dark:text-white md:grid-cols-2">
            <div
              data-aos="fade-right"
              data-aos-duration="400"
              data-aos-once="true"
              className="flex flex-col items-center gap-4 text-center text-black md:items-start md:text-left "
            >
              <h1 className=" text-4xl ">
                Equal Employment Opportunity
              </h1>
              <p className="">
                A diverse and inclusive workforce is an important driving force of an efficient tech ecosystem.
                Therefore, as part of our Equal Employment Opportunity, Empower Africa promotes gender equality and
                the inclusion of persons with disabilities. We are determined to be one of the market leaders
                in the global drive for employment equality. We celebrate diversity, thrive on creating an inclusive
                environment for all employees and aiming for balance in our workforce
              </p>
              <h3 className="text-xl text-black">
                Job Title: Job Title: Fleet Supervisor, Car Rental
              </h3>
              <div>
                <p className=" text-sm font-normal text-black">
                  <h3 className=" text-xl font-semibold text-gray-900 mb-0.5 text-center">Description</h3>

                  We are seeking a skilled and experienced fleet supervisor to oversee our car rental division.
                  The successful candidate will have oversight on operations and maintenance for a
                  company’s vehicle fleet, ensuring efficiency, safety, and compliance with regulations. This
                  position involves coordinating the daily activities of vehicles and drivers, managing
                  maintenance schedules, and optimizing routes to meet client needs. By monitoring
                  performance and implementing strategic improvements, the Fleet Supervisor contributes
                  to the overall operational success, aiming for cost-effectiveness and reliability in
                  transportation resources for our clients.
                </p>
              </div>
              <div className="space-x-4">
                <button
                  className="rounded-md border-2 border-white bg-primary px-4 py-2 text-sm text-white transition-colors duration-300 hover:bg-gray-500 hover:text-white"
                >
                  Apply here
                </button>

                <button onClick={() => setShowApply(true)} className="border-1 bg-gray-500  rounded-md border-2 border-white px-4 py-2 text-sm text-white transition-colors duration-300 hover:bg-primary hover:text-white ">
                  Show Job Details
                </button>

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
      <Apply isVisible={showApply} onClose={() => setShowApply(false)} className="">
        <div className="p-6">
          <h3 className=" text-xl font-semibold text-gray-900 mb-2 text-center">Job Title: Fleet Supervisor, Car Rental</h3>
          <div className="">
            <div className="flex gap-4">
              {/* <div>
                <p className=" text-sm font-normal text-black">
                  <h3 className=" text-xl font-semibold text-gray-900 mb-0.5 text-center">Description</h3>

                  We are seeking a skilled and experienced fleet supervisor to oversee our car rental division.
                  The successful candidate will have oversight on operations and maintenance for a
                  company’s vehicle fleet, ensuring efficiency, safety, and compliance with regulations. This
                  position involves coordinating the daily activities of vehicles and drivers, managing
                  maintenance schedules, and optimizing routes to meet client needs. By monitoring
                  performance and implementing strategic improvements, the Fleet Supervisor contributes
                  to the overall operational success, aiming for cost-effectiveness and reliability in
                  transportation resources for our clients.
                </p>
              </div> */}
              <div>
                <h3 className=" text-xl font-semibold text-gray-900 mb-0.5 text-center">Duties and responsibilities</h3>
                <p className="text-sm font-normal text-black">
                  <li>Oversee daily operations of the fleet, including scheduling and dispatching vehicles to timely and efficient service.</li>
                  <li>Implement and enforce maintenance schedules for all vehicles to minimize downtime
                    and extend the lifespan of  the fleet.</li>
                  <li>Monitor and manage fuel consumption and costs, implementing strategies to reduce
                    expenses and improve efficiency.</li>
                  <li>Ensure compliance with all government regulations and company policies regarding
                    vehicle operation and safety.</li>
                  <li>Handle recruitment, training, and performance evaluation of fleet drivers, promoting
                    a culture of safety and professionalism.</li>
                  <li>Develop and manage the fleet budget, including forecasting expenses and analyzing
                    cost-saving opportunities.</li>
                  <li>Investigate and resolve any accidents or incidents involving fleet vehicles, including
                    liaising with insurance companies and legal entities</li>

                  {/* Oversee daily operations of the fleet, including scheduling and 
                  dispatching vehicles to ensure timely and efficient service.Implement
                  and enforce maintenance schedules for all vehicles to minimize downtimeand
                  extend the lifespan of the fleet.Monitor and manage fuel consumption and costs,
                  implementing strategies to reduceexpenses and improve efficiency.Ensure compliance 
                  with all government regulations and company policies regardingvehicle operation and safety.
                  Handle recruitment, training, and performance evaluation of fleet drivers, promotinga culture
                  of safety and professionalism. */}
                </p>

              </div>


            </div>
            <div className="flex gap-8">
              <div className="">
                <h3 className=" text-xl font-semibold text-gray-900 mb-0.5 text-center">Qualifications</h3>
                <p className="text-sm font-normal text-black">

                  <li>High school Diploma (A2) at a minimum, preferably in moto mechanics or related field</li>
                  <li>bachelor’s degree in business administration with experience inmanagement.</li>
                  <li>Valid driver’s license, at least 2 years of driving experience and a clean driving record.</li>
                  <li>At least 2 years of experience in business management and or marketing</li>
                  <li>Strong knowledge of vehicle maintenance and repair procedures</li>
                  <li>Excellent organizational and time-management skills</li>
                  <li>Effective communication and interpersonal abilities.</li>
                  <li>Proficiency in MS Office and fleet management software.</li>

                </p>

              </div>
              <div>
                <p className="tex-sm font-normal text-black">
                  <h3 className=" text-xl font-semibold text-gray-900 mb-0.5 text-center">Why Us</h3>

                  At Empower Africa, you will have the opportunity <br />
                  to make a meaningful impact to our   <br />
                  business while enhancing your career. <br />
                  We offer a supportive and collaborative work <br />
                  environment where your contributions are valued and recognized. <br />
                </p>
              </div>



            </div>



          </div>

        </div>
        <div className="space-x-4 mb-5 flex justify-center">
          <button
            className="rounded-md border-2 border-white bg-primary px-4 py-2 text-sm text-white transition-colors duration-300 hover:bg-primary hover:text-white"
          >
            Apply here
          </button>

        </div>

      </Apply>
    </>

  );
};

export default HeroCareers;
