import { useForm } from "react-hook-form";
import ErrorMessage from "./ErrorMessage";

function Form({ formStyle, type }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  function onSubmit(data) {
    console.log(data);
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

      <button className="primary hover:bg-pink-500">Login</button>
    </form>
  );
}

export default Form;
