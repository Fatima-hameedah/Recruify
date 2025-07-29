import { useEffect, useRef } from "react";

import success from "/images/success2.gif";

const Modal = ({ isOpen, onCancel, onConfirm, isSubmitted, testScore }) => {
  const modal = useRef(null);

  useEffect(() => {
    if (isOpen) {
      modal.current?.showModal();
    } else {
      modal.current?.close();
    }
  }, [isOpen]);

  let content = (
    <div>
      <h2 className="mb-2 text-lg font-medium">Confirm Submission</h2>
      <p className="mb-4 text-lg">Are you sure you want to submit?</p>
      <div className="flex gap-4 justify-end">
        <button
          className="py-2 px-4 rounded-md cursor-pointer font-bold bg-[#ccc] text-[#333] hover:bg-[#beb8b8]"
          onClick={onCancel}
        >
          Cancel
        </button>
        <button
          className="py-2 px-4 rounded-md cursor-pointer font-bold bg-[#2d89ef] text-white hover:bg-[#3380d8] "
          onClick={onConfirm}
        >
          Yes, Submit
        </button>
      </div>
    </div>
  );

  if (isSubmitted) {
    content = (
      <div>
        <img src={success} alt="success" className="mb-2" />
        <div className="flex flex-col items-center">
          <p className="mb-4">
            Your Score is: <span>{parseInt(testScore)}</span>
          </p>
          <button
            className="py-2 px-4 rounded-md cursor-pointer font-bold bg-[#2d89ef] text-white hover:bg-[#3380d8]"
            onClick={onCancel}
          >
            Ok
          </button>
        </div>
      </div>
    );
  }

  return (
    <dialog
      ref={modal}
      className="modal p-8 max-w-[400px] w-[90%] fade-in rounded-md shadow-md"
    >
      {content}
    </dialog>
  );
};

export default Modal;
