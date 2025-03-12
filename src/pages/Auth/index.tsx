import React from "react";

const Login = () => {
  return (
    <div className="w-full h-full md:h-screen p-5 pt-44 flex flex-col items-center space-y-5 bg-gray-200">
      <div className="text-3xl font-bold">Login!</div>
      <div className="w-full flex justify-center space-x-12">
        <div>Enter your email:</div>
        <div className="w-[400px]">
          <input
            type="text"
            className="w-full p-2 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
        </div>
      </div>
      <div className="w-full flex justify-center space-x-4">
        <div>Enter your password:</div>
        <div className="w-[400px]">
          <input
            type="password"
            className="w-full p-2 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
        </div>
      </div>
      <div className="w-[120px] mr-[444px]">
        <button
          className="bg-blue-500 text-white font-semibold p-2 rounded-md w-full
          focus:outline-none focus:ring-1 focus:ring-blue-700"
        >
          Sign In
        </button>
      </div>
    </div>
  );
};

export default Login;
