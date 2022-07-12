import React, { useState } from "react";
import { ReactComponent as SearchIcon } from "../assets/svgs/Linear.svg";
import { ReactComponent as Login } from "../assets/svgs/Bold.svg";

const Header = () => {
  const [search, setsearch] = useState("");
  const [sidenav, setSidenav] = useState(false);

  const searchHandler = (e) => {
    e.preventDefault();
    setsearch(e.target.value);
  };
  return (
    <div style={{ backgroundColor: "#E2E8F0" }} className="px-2 py-3">
      <div className="flex justify-between items-center w-full md:px-12">
        <div className="md:text-xl text-lg font-bold md:ml-2" style={{ color: "#4A5568" }}>
          ADOPTEV
        </div>
        <div className="flex justify-start bg-white items-center md:px-3 px-1 md:py-2 py-0.5 md:ml-0 ml-2">
          <div>
            <SearchIcon />
          </div>
          <input
            type="text"
            value={search}
            placeholder="Search Your Favourite EV"
            className="md:px-2 px-1 py-1 outline-none border-none text-sm md:w-80 w-32"
            onChange={searchHandler}
          />
          {search && (
            <div className="cursor-pointer" onClick={() => setsearch("")}>
              X
            </div>
          )}
        </div>
        <div className="md:flex justify-around items-center text-sm w-72 hidden md:ml-16 ml-0 ">
          <div>Finance</div>
          <div>Partner with us</div>
          <div
            className="flex items-center px-4 py-2 text-white rounded"
            style={{ background: "#319795" }}
          >
            <div>
              <Login />
            </div>
            <button className="outline-none border-none cursor-pointer ml-2 font-semibold">
              Login
            </button>
          </div>
        </div>
        <div className="flex md:hidden">
          <div className="flex md:hidden ml-4 font-bold">
            <button
              onClick={() => {
                setSidenav(!sidenav);
              }}
            >
              =
            </button>
          </div>
          {sidenav && (
            <div className="absolute flex-col px-6 py-4 text-xl bg-blue-400 justify-between h-full z-50 top-0 left-0 w-full  items-center md:hidden">
              <div className="font-bold">
                <button
                  onClick={() => {
                    setSidenav(!sidenav);
                  }}
                >
                  x
                </button>
              </div>
              <div className="mt-4">Finance</div>
              <div className="mt-4">Partner with us</div>
              <div
                className="flex items-center px-4 py-2 w-40 mt-4 text-white rounded"
                style={{ background: "#319795" }}
              >
                <div>
                  <Login />
                </div>
                <button className="outline-none border-none cursor-pointer ml-2 font-semibold">
                  Login
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
