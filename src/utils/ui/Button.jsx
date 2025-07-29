import { FaAngleRight, FaAngleLeft, FaCheck } from "react-icons/fa";

const Button = ({ children, type, onClick }) => {
  let styles =
    "flex gap-2 items-center bg-green-500 hover:bg-green-600 shadow-lg px-4 py-2.5 rounded-lg text-white font-semibold cursor-pointer";
  let icon = <FaCheck />;
  if (type === "next") {
    styles =
      "flex gap-2 items-center bg-blue-600 hover:bg-blue-700 shadow-lg px-4 py-2.5 rounded-lg text-white font-semibold cursor-pointer";
    icon = <FaAngleRight />;
  }
  if (type === "previous") {
    styles =
      "flex gap-2 items-center bg-gray-500 hover:bg-gray-600 shadow-lg px-4 py-2.5 rounded-lg text-white font-semibold cursor-pointer";
    icon = <FaAngleLeft />;
  }

  return (
    <div onClick={onClick} className={styles}>
      {type === "previous" && icon}
      {children}
      {type !== "previous" && icon}
    </div>
  );
};

export default Button;
