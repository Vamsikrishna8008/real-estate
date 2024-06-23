// components/Modal.js
import React, { useEffect } from "react";

const Modal = ({
  show,
  onClose,
  children,
}: {
  show: boolean;
  onClose: any;
  children: any;
}) => {
  useEffect(() => {
    if (show) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [show]);

  if (!show) {
    return null;
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-2xl w-full relative overflow-y-auto max-h-screen">
        <button
          className="absolute top-2 right-5 text-gray-500 hover:text-gray-700 text-5xl"
          onClick={onClose}
        >
          &times;
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
