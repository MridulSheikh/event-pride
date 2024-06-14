import { SubmitHandler, useForm } from "react-hook-form";

type Inputs = {
  cover: string;
  title: string;
  duration: number;
  date: string;
  price: number;
  details: string;
};

const CreateEvent = () => {
  const { register, handleSubmit } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);
  return (
    <div className=" p-5">
      <h1>Create Event</h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        action=""
        className=" mt-5 w-6/12"
      >
        <div>
          <p>Cover</p>
          <input
            {...register("cover", { required: true })}
            type="text"
            className=" border px-5 py-2 rounded-md w-full"
          />
        </div>
        <div className="mt-5">
          <p>Title</p>
          <input
            {...register("title", { required: true })}
            type="text"
            className=" border px-5 py-2 rounded-md w-full"
          />
        </div>
        <div className=" mt-5">
          <p>Duration</p>
          <input
            {...register("duration", { required: true })}
            type="number"
            className=" border px-5 py-2 rounded-md w-full"
          />
        </div>
        <div className=" mt-5">
          <p>Date</p>
          <input
            {...register("date", { required: true })}
            type="string"
            className=" border px-5 py-2 rounded-md w-full"
          />
        </div>
        <div className=" mt-5">
          <p>Price</p>
          <input
            {...register("price", { required: true })}
            type="number"
            className=" border px-5 py-2 rounded-md w-full"
          />
        </div>
        <div className=" mt-5">
          <p>Details</p>
          <textarea
            {...register("details", { required: true })}
            className=" border px-5 py-2 rounded-md w-full"
          />
        </div>
        <button className=" text-white bg-slate-700 px-4 py-2 mt-5 rounded-md">
          Create Events
        </button>
      </form>
    </div>
  );
};

export default CreateEvent;
