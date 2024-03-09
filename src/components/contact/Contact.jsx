import React, { useEffect } from 'react';

const GoogleMap = () => {
  useEffect(() => {
    const kicukiroCenter = { lat: -1.98035, lng: 30.10775 };
    const map = new window.google.maps.Map(document.getElementById('map'), {
      center: kicukiroCenter,
      zoom: 12
    });
    const marker = new window.google.maps.Marker({
      position: kicukiroCenter,
      map: map,
      title: 'Kicukiro, Kigali'
    });
  }, []);

  return <div id="map" style={{ width: '100%', height: '100%' }}></div>;
};

const Contact = () => {
  return (
    <section>
      <main className="bg-slate-100 dark:bg-slate-900 dark:text-white mb-4" id="contact">
        <h2 className=" text-center mb-4 text-2xl">Contact Us</h2>
        <section className='container' >
          <div className=" grid grid-cols-1 md:grid-cols-2">
            <div className="">
              <form className="max-w-sm mx-auto mb-2">
                <div className="mb-5">
                  <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                  <input type="email" id="email" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="name@flowbite.com" required />
                </div>
                <div className="mb-5">
                  <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
                  <input type="password" id="password" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required />
                </div>
                <div className="mb-5">
                  <label htmlFor="repeat-password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Repeat password</label>
                  <input type="password" id="repeat-password" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required />
                </div>
                <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
              </form>
            </div>
            <div className="">
              <div className='w-full h-80'>
                <GoogleMap />
              </div>
            </div>
          </div>
        </section>
      </main>
    </section>
  );
};

export default Contact;
