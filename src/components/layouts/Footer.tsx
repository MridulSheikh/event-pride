import { FaFire, FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-slate-700">
      <div className=" max-w-screen-xl p-5 grid lg:grid-cols-3 gap-4 mx-auto">
        <div>
          <NavLink
            to={"/"}
            className=" flex items-center gap-x-1 text-xl text-orange-600"
          >
            <FaFire />
            <h1 className=" text-2xl font-bold text-white ">eventpride</h1>
          </NavLink>
          <div className=" mt-7">
            <div className=" flex items-center gap-x-2 text-white text-md">
              <FaPhoneAlt /> <p className="">Helpline : 01883992408</p>
            </div>
            <div className=" flex items-center gap-x-2 text-white text-md mt-1">
              <FaLocationDot />{" "}
              <p className="">Level-4, 34, kalabagan, Dhaka</p>
            </div>
            <div className=" flex items-center gap-x-2 text-white text-md mt-1">
              <MdEmail /> <p className="">support : learnwithnazir@gmail.com</p>
            </div>
          </div>
        </div>
        <div></div>
        <div>
          {/* <NavLink className="font-semibold " to={"/events"}>
            <div className=" py-2 rounded-md text-white">Find Events</div>
          </NavLink> */}
          <NavLink className="font-semibold " to={"/dashboard"}>
            <div className=" py-2 rounded-md text-white">Dashboard</div>
          </NavLink>
          <NavLink className="font-semibold " to={"/login"}>
            <div className=" py-2 rounded-md text-white">Login</div>
          </NavLink>
          <NavLink className="font-semibold " to={"/signup"}>
            <div className=" py-2 rounded-md text-white">Sign up</div>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Footer;
