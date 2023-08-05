function Profile({ user, logout }) {
  return (
    <div className="mx-auto bg-[url('form-bg-light.svg')] bg-center bg-no-repeat bg-cover rounded-lg min-h-[60vh] w-[20rem] shadow-sm shadow-gray-400 mt-6 flex justify-center items-center">
      <div className="flex items-center justify-center flex-col gap-4 ">
        <h1>
          Logged in as <span className="font-semibold">{user.name}</span>
        </h1>
        <h2>Your Email: {user.email}</h2>
        <button
          onClick={logout}
          className="primary max-w-[6rem] mt-4 shadow-sm shadow-gray-400"
        >
          Log Out
        </button>
      </div>
    </div>
  );
}

export default Profile;
