import React from 'react';

const Apply = ({ isVisible, onClose, children }) => {
  if (!isVisible) return null;

  const handleClose = (e) => {
    if (e.target.id === 'wrapper') onClose();
  };

  return (
    <>
      <div
        className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center w-full h-screen mt-10 items-center mr-4"
        id="wrapper"
        onClick={handleClose}
      >
        <div className="flex flex-col">
          <button onClick={() => onClose()} className="text-white text-xl self-end">
            X
          </button>
          <div className="bg-white p-2 rounded">{children}</div>
        </div>
      </div>
    </>
  );
};

export default Apply;
