import { FaUser } from "react-icons/fa";
import logo from "/images/logo.png";

const MainNavigation = () => {
  return (
    <div className="flex md:px-16 justify-between items-center p-4 shadow bg-[#163960]">
      <div className="flex items-end ">
        <img
          src={logo}
          alt="recruify logo"
          className="h-12 cursor-pointer bg-white rounded-full"
        />
      </div>
      <div className="flex flex-col items-center gap-1">
        <FaUser
          size={24}
          className="text-white hover:text-[#b8d1dd] cursor-pointer transition-colors duration-300"
        />
        <p className="text-white font-medium">John Carter</p>
      </div>
    </div>
  );
};

export default MainNavigation;
