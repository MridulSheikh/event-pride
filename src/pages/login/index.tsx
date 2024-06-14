import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { FaRegEye } from "react-icons/fa";
import { IoIosEyeOff } from "react-icons/io";
import { toast } from "sonner";
import { useLoginMutation } from "../../redux/features/user/userApi";
import { jwtDecode } from "jwt-decode";
import { setUser } from "../../redux/features/user/userSlice";
import { useAppDispatch } from "../../redux/features/hook";
import { JwtPayload } from "../../types/types";
import { useNavigate } from "react-router-dom";

type Inputs = {
  email: string;
  password: string;
};

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const [isView, setIsView] = useState(false);
  const [login] = useLoginMutation();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    const toastID = toast.loading("please wait...");
    try {
      const response = await login(data).unwrap();
      console.log(response);
      const user = jwtDecode<JwtPayload>(response.token);
      dispatch(setUser({ user: user, token: response.token }));
      toast.success("User Successfully logged in ", { id: toastID });
      navigate("/");
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      toast.error(error.errorMessage || "Something Went Wrong!", {
        id: toastID,
      });
    }
  };
  return (
    <div className="bg-[url('/images/login_banner.jpg')] bg-no-repeat bg-center flex justify-center items-center h-[calc(100vh-10vh)]">
      <div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className=" p-7 rounded-md border bg-white lg:w-96 w-full"
        >
          <h1 className=" text-orange-600 font-bold text-2xl">Login</h1>
          <div className=" mt-10">
            <div>
              <p>
                Email<sup className="text-red-600">*</sup>
              </p>
              {errors.email && (
                <div className="text-red-600 text-sm mt-1">
                  {errors.email.message}
                </div>
              )}
              <input
                {...register("email", { required: "email field is required" })}
                className=" w-full border focus-within:border-none mt-1 px-4 py-2 rounded-md focus:outline-orange-600"
                placeholder="john@provider.com"
                type="email"
              />
            </div>
            <div className="mt-2">
              <p>
                Password<sup className="text-red-600">*</sup>
              </p>
              {errors.password && (
                <div className="text-red-600 text-sm mt-1">
                  {errors.password.message}
                </div>
              )}
              <div className=" w-full mt-1 rounded-md border focus-within:outline outline-2 flex items-center   focus-within:outline-orange-600 overflow-hidden">
                <input
                  {...register("password", {
                    required: "password field is required",
                  })}
                  type={isView ? "text" : "password"}
                  className=" w-full px-4 py-2 outline-none border-none"
                  placeholder="*********"
                />
                <div
                  onClick={() => setIsView((prev) => !prev)}
                  className="px-2 cursor-pointer text-2xl text-slate-500"
                >
                  {isView ? <IoIosEyeOff /> : <FaRegEye />}
                </div>
              </div>
            </div>
          </div>
          <div className=" flex justify-end">
            <button className=" mt-5 bg-orange-600 active:bg-orange-800 text-white px-5 py-2 rounded-md">
              login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
