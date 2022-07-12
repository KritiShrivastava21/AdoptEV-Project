import React from "react";

const Newsletter = () => {
  return (
    <div className="flex md:flex-row flex-col md:px-16 px-6 py-8 mb-8 w-full">
      <div className="md:w-5/12 w-full md:h-auto h-20" style={{ backgroundColor: "#FEEBCB" }}></div>
      <div
        className="md:w-7/12 w-full md:px-16 px-4 md:py-8 py-4 md:h-72 flex flex-col"
        style={{ backgroundColor: "#C6F6D5" }}
      >
        <div className="text-xl w-full font-semibold">
          <div className="md:text-5xl text-xl font-semibold">STAY UPDATED </div>WITH LATEST OFFERS AND NEWS
        </div>
        <div className="mt-4 text-sm md:w-7/12 lg:11/12">
          Enter your email below to receive updates on launches, offers, and
          many others.
        </div>
        <div className="mt-4 flex md:flex-row flex-col">
          <div>
            <input className="px-3 py-2 outline-none border-none md:w-64" type="emailnpm " placeholder="Email address"/>
          </div>
          <div>
            <button className="outline-none border-none px-3 py-2 md:truncate bg-white opacity-50 text-black font-semibold md:ml-4 md:mt-0 mt-2">Subscribe Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;