import { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import Loading from "./Loading";
import { Success } from "./Success";
import Failed from "./Failed";

const Contact = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const [formStatus, setFormStatus] = useState("");

  const onSubmit = async (data) => {
    setFormStatus("SENDING");
    setTimeout(() => {
      axios
        .post("https://daltoncreates.site/api/contact", data)
        .then((res) => {
          setFormStatus("SENT");
          setTimeout(() => {
            setFormStatus("");
          }, 3000);
        })
        .catch((err) => {
          setFormStatus("ERROR");
          setTimeout(() => {
            setFormStatus("");
          }, 3000);
        });
    }, 1000);
  };

  switch (formStatus) {
    case "ERROR":
      return <Failed />;
    case "SENT":
      return <Success />;
    case "SENDING":
      return <Loading />;
    default:
      return (
        <div className="bg-[#272121] text-white h-screen flex justify-center items-center relative ">
          <div className=" absolute top-20 text-center   ">
            <h3 className="uppercase teacking-[20px] text-gray-400 text-2xl">
              Contact
            </h3>
            <h2 className="py-5 lg:py-10 text-xl">
              Have questions? Get in Touch!
            </h2>
          </div>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col w-[500px] mt-32  m-5 text-white "
          >
            <input
              type="text"
              {...register("name", { required: true, maxLength: 20 })}
              placeholder="Name"
              className={`formInput mt-6`}
            />
            {errors.name?.type === "required" && (
              <p className=" text-red-500" role="alert">
                Name is required
              </p>
            )}
            <input
              type="email"
              {...register("email", {
                required: true,
                pattern:
                  "^([a-zA-Z0-9_-.]+)@(([[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}.)|(([a-zA-Z0-9-]+.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(]?)$",
              })}
              placeholder="Email"
              className="formInput"
            />
            {errors.email?.type === "required" && (
              <p className=" text-red-500" role="alert">
                Email is required
              </p>
            )}
            <input
              type="text"
              {...register("subject", { required: true, maxLength: 30 })}
              placeholder="Subject"
              className="formInput"
            />
            {errors.subject?.type === "required" && (
              <p className=" text-red-500" role="alert">
                Subject is required
              </p>
            )}
            <textarea
              placeholder="Message"
              className="formInput"
              {...register("message", { required: true, maxLength: 300 })}
            />
            {errors.message?.type === "required" && (
              <p className=" text-red-500" role="alert">
                Message is required
              </p>
            )}
            <button className=" bg-cyan-600 p-4 hover:bg-cyan-700 mt-4">
              Submit
            </button>
          </form>
        </div>
      );
  }
};

export default Contact;
