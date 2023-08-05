import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

import ErrorMessage from "./ErrorMessage";
import axios from "axios";
import { useContext } from "react";
import { UserContext } from "../context/UserContext";

function Form({ formStyle, type }) {
  const navigate = useNavigate();
  const { setUser } = useContext(UserContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  async function onSubmit(data) {
    if (type === "register") {
      try {
        await axios.post("/register", {
          data,
        });
        toast.success("Registration successful. Now you can log in!");
      } catch (err) {
        toast.error("We encountered an error while registering you in");
      }
    } else {
      try {
        const user = await axios.post("/login", {
          data,
        });
        toast.success("Login successful");
        setUser(user.data);
        navigate("/");
      } catch (err) {
        toast.error("Cannot log you in : " + err.message);
      }
    }
  }

  function onError() {}

  return (
    <form className={formStyle} onSubmit={handleSubmit(onSubmit, onError)}>
      {type === "register" && (
        <input
          type="text"
          id="name"
          placeholder="Username"
          {...register("name", {
            required: "This field is required!",
          })}
        />
      )}
      {errors?.email?.message && (
        <ErrorMessage message={errors?.email?.message} />
      )}
      <input
        type="email"
        placeholder="demo@example.com"
        {...register("email", {
          required: "This field is required!",
        })}
      />
      {errors?.email?.message && (
        <ErrorMessage message={errors?.email?.message} />
      )}
      <input
        type="password"
        placeholder="Password"
        {...register("password", {
          required: "This field is required!",
        })}
      />
      {errors?.password?.message && (
        <ErrorMessage message={errors?.password?.message} />
      )}

      <button className="primary hover:bg-pink-500">
        {type === "register" ? "Register" : "Login"}
      </button>
    </form>
  );
}

export default Form;
