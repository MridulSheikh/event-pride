import EventItemCard from "../../components/shared/EventItemCard";

const DhakaEvent = () => {
  return (
    <div className=" max-w-screen-xl mx-auto px-5 -mt-36 relative z-30 mb-10">
      {/* <h1 className=" text-slate-800 text-3xl font-bold">Events in Dhaka</h1> */}
      <div className=" mt-7 grid lg:grid-cols-3 gap-4">
        <EventItemCard />
        <EventItemCard />
        <EventItemCard />
        <EventItemCard />
        <EventItemCard />
        <EventItemCard />
      </div>
    </div>
  );
};

export default DhakaEvent;
