import { CiLocationOn } from "react-icons/ci";
import { FaRegClock } from "react-icons/fa";
import { SlCalender } from "react-icons/sl";

const DasboardEventCard = () => {
  return (
    <div className=" rounded-md overflow-hidden shadow-md border">
      <div className="relative h-40 overflow-hidden">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTv_363FC6lZOoIr9YRKT87C7QDEN0IzuSrug&s"
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>
      <div className=" p-4">
        <span className=" flex px-3 py-1 text-white rounded-full bg-orange-600 items-center gap-x-1 w-24">
          <FaRegClock />
          <p>30 min</p>
        </span>
        <h1 className=" text-xl font-bold text-slate-900 mt-1">
          GarmentTechBD Building a Sustainable Supply Chain:Best
          Practices&Solutions
        </h1>
        <div className=" mt-5">
          <div className=" flex items-center gap-x-2">
            <SlCalender />
            <p>14 February 2024</p>
          </div>
          <div className=" flex items-center gap-x-2 mt-3">
            <CiLocationOn />
            <p>Dhaka, Bangladesh</p>
          </div>
        </div>
        <p className=" mt-5">Free</p>
        <button className="bg-orange-600 text-white py-2 rounded-full w-full mt-5 active:bg-orange-700">
          Details
        </button>
      </div>
    </div>
  );
};

export default DasboardEventCard;
