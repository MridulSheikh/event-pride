import { NavLink } from "react-router-dom";
import { cn } from "../../utils/cn";

const sidebarLinks = [
  {
    name: "Events",
    link: "/dashboard",
  },
];

const DashobardSideBard = () => {
  return (
    <div
      className={cn(
        " bg-[#1c2434] dark:bg-slate-900 h-screen w-0 lg:w-[370px] overflow-y-scroll scrollbar-none fixed lg:sticky left-0 top-0 z-20 ease-in-out duration-300"
      )}
    >
      <div className="py-10 px-5">
        <h2 className=" text-md font-semibold uppercase text-[#8a99af] px-5">
          Menu
        </h2>
        <div className=" mt-5 text-white">
          {sidebarLinks.map((data) => (
            <NavLink
              to={data.link}
              className={cn(
                "flex gap-x-3 items-center text-lg px-5 py-2 hover:bg-[#333a48] rounded-sm my-2"
              )}
            >
              <p>{data.name}</p>
            </NavLink>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DashobardSideBard;
