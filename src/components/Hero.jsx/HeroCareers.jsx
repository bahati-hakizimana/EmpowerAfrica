import React, { useState, useRef } from "react";
import Banner from "../../assets/undraw_real_time_sync_re_nky7.svg";
import Apply from "../Hero.jsx/Apply";
import Apply1 from "../Hero.jsx/Apply1";
import AvailableRoles from "./AvailableRoles";
import emailjs from '@emailjs/browser';


const HeroCareers = () => {

  const form = useRef();
  const [showApply, setShowApply] = useState(false);
  const [showApply1, setShowApply1] = useState(false);
  const [uploadStatus, setUploadStatus] = useState(null);
  // Handle file format validation
  const validateFileFormat = (file) => {
    const allowedFormats = ["pdf", "doc", "docx"];
    const fileFormat = file.name.split(".").pop().toLowerCase();
    return allowedFormats.includes(fileFormat);
  };
  const MAX_FILE_SIZE = 5000000; // 5MB
  const handleFileUpload = (e, fileType) => {
    const file = e.target.files[0];
    if (!validateFileFormat(file)) {
      setUploadStatus({ success: false, message: "Please upload a file in PDF, DOC, or DOCX format." });
      e.target.value = null;
      return;
    }
    if (file.size > MAX_FILE_SIZE) {
      setUploadStatus({ success: false, message: "File size exceeds the limit. Please upload a smaller file." });
      e.target.value = null;
      return;
    }
    // Perform file upload logic
    console.log(`Uploading ${fileType}...`);
    // Assuming upload was successful
    setUploadStatus({ success: true, message: `${fileType} uploaded successfully.` });
  };

  // Handle file upload
  // const handleFileUpload = (e, fileType) => {
  //   const file = e.target.files[0];
  //   if (!validateFileFormat(file)) {
  //     setUploadStatus({ success: false, message: "Please upload a file in PDF, DOC, or DOCX format." });
  //     e.target.value = null;
  //     return;
  //   }
  //   // Perform file upload logic
  //   console.log(`Uploading ${fileType}...`);
  //   // Assuming upload was successful
  //   setUploadStatus({ success: true, message: `${fileType} uploaded successfully.` });
  // };
  // const handleShowAvailableRoles = () => {
  //   setShowAvailableRoles(true);
  // };
  // const sendEmail = (e) => {
  //   e.preventDefault();
  //   emailjs
  //     .sendForm('gmail', 'template_z1rbf9c', form.current, {
  //       publicKey: 'qLQfF6rOxYun6Uv7y',
  //     })
  //     .then(
  //       () => {
  //         console.log('SUCCESS!');
  //       },
  //       (error) => {
  //         console.log('FAILED...', error.text);
  //       },
  //       );
  //       e.target.reset();
  //     }

  const sendEmail = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const formDataSize = Array.from(formData).reduce((acc, [key, value]) => acc + key.length + value.length, 0);
    if (formDataSize <= 50000) {
      emailjs.sendForm('service_xjf51tb', 'template_z1rbf9c', e.target, 'qLQfF6rOxYun6Uv7y')
        .then((result) => {
          console.log('Email sent successfully:', result.text);
        }, (error) => {
          console.error('Email sending failed:', error.text);
        });
    } else {
      console.error('Form data size exceeds the limit');
    }

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

              <div>
                <h3 className="text-xl text-black">
                  Job Title:Fleet Supervisor, Car Rental
                </h3>
                <h3 className="text-xl text-black">
                  Died Line:31 March 2024
                </h3>

                <p className=" text-sm font-normal text-black">
                  <h3 className=" text-xl font-semibold text-gray-900 mb-0.5">Description</h3>

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
                <button onClick={() => setShowApply1(true)}
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

      {/* Visit More Details On this Job */}


      <Apply isVisible={showApply} onClose={() => setShowApply(false)} className=" ">
        <div className="p-6 px-20 py-2 ">
          <h3 className=" text-xl font-semibold text-gray-900 mb-2 text-center">Job Title: Fleet Supervisor, Car Rental</h3>
          <div className="">
            <div className="flex gap-4">

              <div>
                <h3 className=" text-xl underline font-semibold text-gray-900 mb-0.5 text-center">Duties and responsibilities</h3>
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

                </p>

              </div>


            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-4">
              <div className="">
                <h3 className=" text-xl underline font-semibold text-gray-900 mb-0.5 text-center">Qualifications</h3>
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
                <h3 className=" text-xl font-semibold text-gray-900 mb-0.5 text-center underline">Why Us</h3>
                <p className="tex-sm font-normal text-black">


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
          <button onClick={() => setShowApply1(true)}
            className="rounded-md border-2 border-white bg-primary px-4 py-2 text-sm text-white transition-colors duration-300 hover:bg-gray-500 hover:text-white"
          >
            Apply Now
          </button>

        </div>

      </Apply>

      {/* Apply For Job Section */}


      <Apply1 isVisible={showApply1} onClose={() => setShowApply1(false)} className="">
        {uploadStatus && (
          <div className={`text-center ${uploadStatus.success ? 'text-green-500' : 'text-red-500'}`}>
            {uploadStatus.message}
          </div>
        )}
        <div className="p-6 flex flex-col justify-self-center w-[675px]">
          <h3 className=" text-xl font-semibold text-gray-900 mb-2 text-center">Application process</h3>
          <div>
            <li className=" text-xl font-semibold text-gray-900 mb-2 text-center">Attarch Your Cv/resume</li>
            <li className=" text-xl font-semibold text-gray-900 mb-2 text-center">Attarch your Coverletter</li>
            <li className="text-xl font-semibold text-gray-900 mb-2">
              Submit both of them to:{" "}
              <a href="mailto:info@empowerafricanow.com" className="text-blue-600 hover:underline">
                info@empowerafricanow.com
              </a>
            </li>
            {/* <form ref={form} onSubmit={sendEmail} >
              <div className="border-b border-gray-900/10 pb-12">
                <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                  <div className="sm:col-span-3">
                    <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">
                      First name
                    </label>
                    <div className="mt-2">
                      <input
                        type="text"
                        name="first_name"
                        id="first_name"
                        autoComplete="given-name"
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                  <div className="sm:col-span-3">
                    <label htmlFor="last-name" className="block text-sm font-medium leading-6 text-gray-900">
                      Last name
                    </label>
                    <div className="mt-2">
                      <input
                        type="text"
                        name="last_name"
                        id="last_name"
                        autoComplete="family-name"
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                  <div className="sm:col-span-3">
                    <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                      Email
                    </label>
                    <div className="mt-2">
                      <input
                        type="email"
                        name="user_email"
                        id="email"
                        autoComplete="email"
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                  <div className="sm:col-span-3">
                    <label htmlFor="phone" className="block text-sm font-medium leading-6 text-gray-900">
                      Phone
                    </label>
                    <div className="mt-2">
                      <input
                        type="tel"
                        name="phone"
                        id="phone"
                        autoComplete="tel"
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                  <div className="sm:col-span-3">
                    <label htmlFor="resume" className="block text-sm font-medium leading-6 text-gray-900">
                      Upload CV/Resume
                    </label>
                    <div className="mt-2">
                      <input
                        type="file"
                        name="user_resume"
                        id="resume"
                        accept=".pdf,.doc,.docx"
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        onChange={(e) => handleFileUpload(e, "CV/Resume")}
                      />
                    </div>
                  </div>
                  <div className="sm:col-span-3">
                    <label htmlFor="coverletter" className="block text-sm font-medium leading-6 text-gray-900">
                      Upload Cover Letter
                    </label>
                    <div className="mt-2">
                      <input
                        type="file"
                        name="coverletter"
                        id="coverletter"
                        accept=".pdf,.doc,.docx"
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        onChange={(e) => handleFileUpload(e, "Cover Letter")}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="space-x-4 mb-5 flex justify-center">
                <button
                  className="rounded-md border-2 border-white bg-primary px-4 py-2 text-sm text-white transition-colors duration-300 hover:bg-primary hover:text-white"
                >
                  Submitt Application
                </button>
              </div>
            </form> */}
          </div>
        </div>

      </Apply1>
    </>

  );
};

export default HeroCareers;
