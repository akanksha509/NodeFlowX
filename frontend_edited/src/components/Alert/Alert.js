import React from "react";
import parse from 'html-react-parser';

const DangerAlert = ({ message, onDismiss }) => {
  return (
    <div className="fixed w-screen h-screen top-0 bottom-0 right-0 left-0 z-20 flex items-center justify-center backdrop-blur">
      <div className="min-w-80 border border-red-500 flex flex-col">
        <div className="bg-red-500 text-white font-bold px-4 py-2">Error</div>
        <div className=" bg-red-100 px-4 py-3 text-red-700">
          <div>{parse(message)}</div>
        </div>
        <button
          className="bg-white hover:bg-red-500 text-red-700 font-semibold hover:text-white py-2 px-4 border border-red-500 hover:border-transparent"
          onClick={onDismiss}
        >
          Okay
        </button>
      </div>
    </div>
  );
};

const SuccessAlert = ({ message, onDismiss }) => {
  return (
    <div className="fixed w-screen h-screen top-0 bottom-0 right-0 left-0 z-20 flex items-center justify-center backdrop-blur">
      <div className="min-w-80 border border-green-500 flex flex-col">
        <div className="bg-green-500 text-white font-bold  px-4 py-2">
          Success
        </div>
        <div className="bg-green-100 px-4 py-3 text-green-700">
          <div>{parse(message)}</div>
        </div>
        <button
          className="bg-white hover:bg-green-500 text-green-700 font-semibold hover:text-white py-2 px-4 border border-green-500 hover:border-transparent"
          onClick={onDismiss}
        >
          Okay
        </button>
      </div>
    </div>
  );
};

const Alert = ({ type, message, onDismiss }) => {
  return type === "error" ? (
    <DangerAlert message={message} onDismiss={onDismiss} />
  ) : (
    <SuccessAlert message={message} onDismiss={onDismiss} />
  );
};

export default Alert;
