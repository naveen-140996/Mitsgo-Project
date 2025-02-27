import React, { useState } from "react";

const Accordion = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-gray-300 my-4 px-4">
      {/* Button for Toggling */}
      <button
        className="w-full flex justify-between items-center py-4 text-lg font-semibold"
        onClick={() => setIsOpen(!isOpen)}
      >
        <p className="text-[18px] text-[#fff] text-left font-bold ">{title}</p>
        <p className="text-xl text-[#fff]">{isOpen ? "−" : "+"}</p>
      </button>

      {/* Accordion Content with Smooth Transition */}
      <div
        className={`overflow-hidden accordian-content ${
          isOpen ? "h-auto py-2" : "h-0"
        }`}
      >
        <p className="text-[#fff] text-[14px]">{content}</p>
      </div>
    </div>
  );
};

export default Accordion;
