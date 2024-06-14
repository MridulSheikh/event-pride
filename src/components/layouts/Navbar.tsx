import { useState } from "react";
import { FaFire } from "react-icons/fa";
import { RiMenu3Fill } from "react-icons/ri";
import { NavLink } from "react-router-dom";
import { useAppSelector } from "../../redux/features/hook";
import { logout, useCurrentToken } from "../../redux/features/user/userSlice";
import { useDispatch } from "react-redux";

const Navbar = () => {
  const [open, setOpen] = useState<boolean>(false);
  const token = useAppSelector(useCurrentToken);
  const dispatch = useDispatch();
  console.log(token);
  return (
    <div className="bg-white sticky top-0 z-40 border-b">
      <div className=" max-w-screen-xl mx-auto px-5 py-3 flex justify-between items-center">
        <NavLink
          to={"/"}
          className=" flex items-center gap-x-1 text-xl text-orange-600"
        >
          <FaFire />
          <h1 className=" text-2xl font-bold bg-gradient-to-r ">eventpride</h1>
        </NavLink>
        <button onClick={() => setOpen((prev) => !prev)} className="lg:hidden">
          <RiMenu3Fill className=" text-2xl" />
        </button>
        <div className="  gap-x-4 items-center hidden lg:flex ">
          <NavLink className="font-semibold " to={"/dashboard"}>
            <span className=" px-3 py-2 rounded-md hover:bg-slate-100 ease-in-out duration-200">
              Dashboard
            </span>
          </NavLink>
          {!token && (
            <NavLink className="font-semibold " to={"/login"}>
              <span className=" px-3 py-2 rounded-md hover:bg-slate-100 ease-in-out duration-200">
                Login
              </span>
            </NavLink>
          )}

          {!token && (
            <NavLink className="font-semibold " to={"/signup"}>
              <span className=" px-3 py-2 rounded-md hover:bg-slate-100 ease-in-out duration-200">
                Sign up
              </span>
            </NavLink>
          )}
          {token && (
            <button
              onClick={() => dispatch(logout())}
              className=" text-white bg-orange-600 active:bg-orange-800 rounded-md px-4 py-2"
            >
              Logout
            </button>
          )}
        </div>
      </div>
      {open && (
        <div className=" flex-col  gap-y-4 items-center lg:hidden p-5">
          <NavLink className="font-semibold " to={"/dashboard"}>
            <div className=" py-2 rounded-md hover:bg-slate-100 border-b ease-in-out duration-200">
              Dashboard
            </div>
          </NavLink>
          {!token && (
            <NavLink className="font-semibold " to={"/login"}>
              <div className="py-2 rounded-md hover:bg-slate-100 border-b ease-in-out duration-200">
                Login
              </div>
            </NavLink>
          )}
          {!token && (
            <NavLink className="font-semibold " to={"/signup"}>
              <div className="py-2 rounded-md hover:bg-slate-100 border-b ease-in-out duration-200">
                Sign up
              </div>
            </NavLink>
          )}
          {token && (
            <button
              onClick={() => dispatch(logout())}
              className=" text-white bg-orange-600 active:bg-orange-800 rounded-md mt-5 w-full px-4 py-2"
            >
              Logout
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default Navbar;
