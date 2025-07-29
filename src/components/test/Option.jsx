import React from "react";

const Option = ({ label, text, onSelect, questionId, answers }) => {
  const selected = answers.find((ans) => ans.id === questionId);
  const isSelected = selected?.option === label;

  let styles =
    "flex gap-8 items-center border-2 mb-2 cursor-pointer hover:border-[#163960]  transition-all duration-200 ";

  if (isSelected) {
    styles =
      "flex gap-8 items-center border-2 mb-2 cursor-pointer border-[#163960]  transition-all duration-200 ";
  }

  return (
    <div className={styles} onClick={() => onSelect(questionId, label)}>
      <p className="text-lg md:text-xl px-4 md:px-4 py-4 bg-[#163960] text-white ">
        {label}.
      </p>
      <p className="text-lg md:text-xl">{text}</p>
    </div>
  );
};

export default Option;
