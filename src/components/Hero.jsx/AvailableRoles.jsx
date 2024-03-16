import React, { useState } from 'react';
import Apply from './Apply';

const AvailableRoles = () => {
    // const [showDetails, setShowDetails] = useState(false);
    // const [showApplyForm, setShowApplyForm] = useState(false);

    // const handleShowDetails = () => {
    //     setShowDetails(true);
    //     setShowApplyForm(false);
    // };

    // const handleShowApplyForm = () => {
    //     setShowDetails(false);
    //     setShowApplyForm(true);
    // };
    const [showApply, setShowApply] = useState(false)
    return (
        <>
            <section className="container pt-25 flex  flex-col items-center justify-center ">
                <div className=' text-2xl'>
                    <h5>Title : Fleet Supervisor, Car Rental</h5>
                </div>
                <div className="grid grid-cols-1 items-center gap-8 dark:text-white md:grid-cols-2">
                    <div className=''>
                        <div>
                            <p>Empower Africa Now Ltd is a privately owned dynamic and forward-thinking company
                                dedicated to empowering individuals and communities across Africa. Our mission is to
                                drive positive change through innovative solutions and sustainable practices. We are
                                committed to providing exceptional services and and creating opportunities that uplift
                                individuals and communities.</p>

                        </div>

                        {showDetails && (
                            <div className=''>
                                <h4 className=' text-2xl underline'>Job Description</h4>

                                <p>
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
                        )}

                       
                            <div className=''>
                                <h4 className=' text-2xl underline'>Duties and responsibilities</h4>

                                <p>
                                    Oversee daily operations of the fleet, including scheduling and dispatching vehicles to
                                    ensure timely and efficient service.
                                     Implement and enforce maintenance schedules for all vehicles to minimize downtime
                                    and extend the lifespan of the fleet.
                                     Monitor and manage fuel consumption and costs, implementing strategies to reduce
                                    expenses and improve efficiency.
                                     Ensure compliance with all government regulations and company policies regarding
                                    vehicle operation and safety.
                                     Handle recruitment, training, and performance evaluation of fleet drivers, promoting
                                    a culture of safety and professionalism.
                                </p>
                            </div>
                    
                    </div>

                    <div className="space-x-4">
                        <button
                            // onClick={handleShowApplyForm}
                            className="rounded-md border-2 border-white bg-primary px-4 py-2 text-sm text-white transition-colors duration-300 hover:bg-primary hover:text-white"
                        >
                            Apply Now
                        </button>

                        <button
                            // onClick={handleShowDetails}
                            className="border-1 bg-gray-400   rounded-md border-2 border-white px-4 py-2 text-sm text-white transition-colors duration-300 hover:bg-purple-400 hover:text-white "
                        >
                            Job Details
                        </button>
                    </div>
                </div>
            </section>
           <Apply isVisible/>
        </>
    )
}

export default AvailableRoles;
