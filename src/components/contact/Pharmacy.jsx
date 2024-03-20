import React from 'react';

const Pharmacy = ({ isVisible, onClose, children }) => {
  if (!isVisible) return null;

  const handleClose = (e) => {
    if (e.target.id === 'wrapper') onClose();
  };

  return (
    <>
      <div
        className="fixed inset-0 bg-gray-400 bg-opacity-25 backdrop-blur-sm flex justify-center w-full h-screen mt-10 items-center mb-5"
        id="wrapper"
        onClick={handleClose}
      >
        <div className="flex flex-col mr-2 ml-2 mb-4">
          <button
            onClick={() => onClose()}
            className="text-white text-xl self-end rounded-full border-1 border-white bg-gray-500 px-2 py-1 hover:bg-purple-300 hover:text-white"
          >
            X
          </button>
          <div className="bg-white p-4 rounded justify-center">{children}</div>

        </div>
      </div>
    </>
  );
};

export default Pharmacy;
