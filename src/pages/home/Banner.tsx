import { IoIosSearch } from "react-icons/io";

const Banner = () => {
  return (
    <div className=" h-[calc(100vh-10vh)] relative overflow-hidden">
      <img
        src="/images/event_banner.jpg"
        className=" absolute w-full  h-full top-0"
        alt=""
      />
      <div className=" relative z-30 bg-black bg-opacity-70 h-full w-full text-center py-20 px-5">
        <h1 className=" text-3xl lg:text-4xl text-white font-bold">
          Find Your Next Event
        </h1>
        <p className=" text-slate-300 lg:w-1/2 mt-2 mx-auto">
          Join us for an inspiring and practical event designed to help you
          discover and reach your next significant goal. Whether you are looking
          for your next job, considering a career change, seeking new business
          opportunities, or aiming for personal growth, this event will provide
          you with the tools, insights, and connections you need to succeed.
        </p>
        <div className=" flex rounded-full justify-between border-2 border-slate-600 overflow-hidden w-full lg:w-[500px] bg-[#f8f7fa] mx-auto mt-8">
          <div className="w-full">
            <input
              className="w-full outline-none px-4 py-2 bg-transparent"
              placeholder=" Search event"
            />
          </div>
          <button className=" flex gap-x-2 bg-orange-600 text-white items-center px-3 active:bg-orange-800">
            <IoIosSearch />
            <p>Search</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
