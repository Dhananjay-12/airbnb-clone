import { Link } from "react-router-dom";
import Form from "../ui/Form";

function RegisterPage() {
  return (
    <div className="mt-4 grow  flex items-center justify-center ">
      <div className="bg-white/70 px-4 py-12 max-w-[20rem] rounded-2xl shadow-sm shadow-gray-300">
        <h1 className="text-4xl text-center mb-4">Register</h1>
        <Form formStyle="max-w-md mx-auto " type="register" />
        <p className="text-sm text-center text-gray-500">
          Already have an account?{" "}
          <span className="text-grey-600 underline">
            <Link to="/login">Login</Link>
          </span>
        </p>
      </div>
    </div>
  );
}

export default RegisterPage;
