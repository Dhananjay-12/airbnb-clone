function Profile({ user, logout }) {
  return (
    <div className="mx-auto bg-[url('form-bg-dark.svg')] bg-center bg-no-repeat bg-cover rounded-lg min-h-[60vh] w-[20rem] shadow-sm shadow-gray-600 mt-6 flex justify-center items-center overflow-hidden">
      <div className="flex items-center justify-center flex-col gap-4 text-gray-100 ">
        <h1>
          Logged in as <span className="font-semibold">{user.name}</span>
        </h1>
        <h2>Your Email: {user.email}</h2>
        <button
          onClick={logout}
          className="primary max-w-[7rem] mt-4 shadow-sm shadow-gray-400 inline-flex gap-1 items-center justify-center "
        >
          <span>Log Out</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-5 h-5"
          >
            <path
              fillRule="evenodd"
              d="M7.5 3.75A1.5 1.5 0 006 5.25v13.5a1.5 1.5 0 001.5 1.5h6a1.5 1.5 0 001.5-1.5V15a.75.75 0 011.5 0v3.75a3 3 0 01-3 3h-6a3 3 0 01-3-3V5.25a3 3 0 013-3h6a3 3 0 013 3V9A.75.75 0 0115 9V5.25a1.5 1.5 0 00-1.5-1.5h-6zm10.72 4.72a.75.75 0 011.06 0l3 3a.75.75 0 010 1.06l-3 3a.75.75 0 11-1.06-1.06l1.72-1.72H9a.75.75 0 010-1.5h10.94l-1.72-1.72a.75.75 0 010-1.06z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default Profile;
