import React from "react";

const Home = () => {
  return (
    <div className="w-full h-full md:h-screen p-5 flex flex-col items-start space-y-5 bg-gray-200">
      <h1 className="text-3xl font-bold w-full text-center">
        Menstrual cyle Tracker
      </h1>
      <div className="flex justify-evenly w-full flex-wrap  ">
        <div className="flex flex-col space-y-4">
          <div className="flex flex-col items-start space-y-2">
            <div>Start Date:</div>
            <div className="w-[500px] border-1 border-gray-200">
              <input
                type="date"
                className="w-full p-2 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
              />
            </div>
          </div>

          <h1 className="text-xl font-bold">Cyle Length</h1>
          <div className="flex flex-col items-start space-y-2">
            <div className="w-[500px] border-1 border-gray-200">
              <input
                type="text"
                className="w-full p-2 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
              />
              <button
                onClick={() =>
                  alert("Pridicted Cyle Functionality not implemented")
                }
                className="bg-blue-500 text-white font-semibold p-2 rounded-md mt-4 w-full
              focus:outline-none focus:ring-1 focus:ring-blue-700"
              >
                Pridicted Cyle
              </button>
            </div>
          </div>

          <h1 className="text-xl font-bold">Symptoms Analysis</h1>
          <h1 className="text-sm font-bold">Enter Symptoms(Comma separated)</h1>
          <div className="flex flex-col items-start space-y-2">
            <div className="w-[500px] border-1 border-gray-200">
              <input
                type="text"
                className="w-full p-2 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
              />
              <button
                onClick={() =>
                  alert("Symptoms Analysis Functionality not implemented")
                }
                className="bg-blue-500 text-white font-semibold p-2 rounded-md mt-4 w-full
              focus:outline-none focus:ring-1 focus:ring-blue-700"
              >
                Analysis Symptoms
              </button>
            </div>
          </div>
        </div>
        <div className="flex flex-col space-y-4 mt-4">
          <h1 className="text-xl font-bold">Remainders</h1>
          <h1 className="text-sm font-bold">Add Remainders</h1>
          <div className="flex flex-col items-start space-y-2">
            <div className="w-[500px] border-1 border-gray-200">
              <div className="flex flex-col space-y-2">
                <div>Remainder Message:</div>
                <input
                  type="text"
                  className="w-full p-2 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                />
              </div>
              <div className="flex flex-col space-y-2 mt-2">
                <div>Remainder Date:</div>
                <input
                  type="text"
                  className="w-full p-2 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                />
              </div>
              <button
                onClick={() =>
                  alert("Add Remainder Functionality not implemented")
                }
                className="bg-blue-500 text-white font-semibold p-2 rounded-md mt-4 w-full
              focus:outline-none focus:ring-1 focus:ring-blue-700"
              >
                Add Remainders
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
