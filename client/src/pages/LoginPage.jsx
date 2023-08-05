import { Link } from "react-router-dom";
import Form from "../ui/Form";

function LoginPage() {
  return (
    <div className=" grow  flex items-center justify-center  bg-[url('form-bg-light.svg')] bg-cover bg-center">
      <div className="bg-white px-4 py-12 max-w-[20rem] rounded-xl shadow-sm shadow-gray-400">
        <h1 className="text-4xl text-center mb-4">LOGIN</h1>
        <Form formStyle="max-w-md mx-auto  " />
        <p className="text-sm text-center text-gray-500">
          Don&apos;t have an account yet?{" "}
          <span className="text-grey-600 underline">
            <Link to="/register">Register</Link>
          </span>
        </p>
      </div>
    </div>
  );
}

export default LoginPage;
