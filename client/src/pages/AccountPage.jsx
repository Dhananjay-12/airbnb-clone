import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import Spinner from "../ui/Spinner";
import { NavLink, Navigate, useNavigate, useParams } from "react-router-dom";
import Profile from "../ui/Profile";
import axios from "axios";
import toast from "react-hot-toast";

function AccountPage() {
  const { ready, user } = useContext(UserContext);
  let { subPage } = useParams();
  const navigate = useNavigate();

  if (subPage === undefined) subPage = "profile";

  if (!ready) return <Spinner />;
  if (ready && !user) return <Navigate to={"/login"} />;

  const activeStyles =
    "bg-primary text-gray-100 rounded-full hover:bg-pink-600 hover:shadow-gray-400 ";

  function linkStyles(type = null) {
    if (type === subPage)
      return `py-2 px-6  ${activeStyles} shadow-sm shadow-gray-500`;
    else return "py-2 px-6 ";
  }

  async function logout() {
    await axios.post("/logout");
    toast.success("You have been logged out");
    navigate("/login");
  }

  return (
    <div>
      <nav className="w-full flex justify-center mt-8 gap-2 ">
        <NavLink className={() => linkStyles("profile")} to="/account">
          My Profile
        </NavLink>
        <NavLink
          className={() => linkStyles("bookings")}
          to="/account/bookings"
        >
          My Bookings
        </NavLink>
        <NavLink className={() => linkStyles("places")} to="/account/places">
          My Accommodations
        </NavLink>
      </nav>
      {subPage === "profile" && <Profile user={user} logout={logout} />}
    </div>
  );
}

export default AccountPage;
