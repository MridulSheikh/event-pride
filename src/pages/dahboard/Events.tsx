import { Link } from "react-router-dom";
import DasboardEventCard from "./DasboardEventCard";

const Events = () => {
  return (
    <div className=" p-5">
      <div className=" flex justify-between">
        <h1 className=" text-2xl font-bold text-slate-600">Events</h1>
        <Link to="/dashboard/create-events">
          <button className=" text-white bg-slate-700 px-4 py-2 rounded-md">
            Create Events
          </button>
        </Link>
      </div>
      <div className=" mt-10 grid grid-cols-3 gap-4">
        <DasboardEventCard />
        <DasboardEventCard />
        <DasboardEventCard />
        <DasboardEventCard />
        <DasboardEventCard />
        <DasboardEventCard />
        <DasboardEventCard />
      </div>
    </div>
  );
};

export default Events;
