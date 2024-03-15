import React from 'react';

const Apply = ({ isVisible }) => {
    if (!isVisible) return null;
  return (
    <div className='fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center'>
      <div className='w-[600px] bg-white rounded relative'>
        <button className="absolute top-0 right-0 m-2 text-black text-2xl">X</button>
        <div className='py-2'>Apply</div>
      </div>
    </div>
  );
};

export default Apply;
