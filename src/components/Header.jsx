import React from "react";
import { FaLocationArrow } from "react-icons/fa6";
import { RxCaretDown } from "react-icons/rx";
import { FaUser } from "react-icons/fa";

export default function Header() {
  return (
    <header className="p-2 z-50 shadow-lg w-full min-h-14 flex justify-evenly items-center fixed bg-white">
      <div className="flex">
        <div>
          <span>
            <img
              src="images/logo.webp"
              alt="swiggy"
              className="w-[50px] h-[50px]"
            />
          </span>
        </div>
        <div className="flex items-center justify-center font-bold cursor-pointer">
          <span className="text-[#f15700]">
            <FaLocationArrow />
          </span>
          <span>set up precise location</span>
          <span className="text-[#f15700] text-[30px]">
            <RxCaretDown />
          </span>
        </div>
      </div>
      <div className="flex items-center justify-center">
        <div className="flex p-3 text-lg bg-slate-300 rounded-lg">
          <input
            type="text"
            name="search"
            id="search"
            placeholder="search  your food or resturant"
            className="bg-slate-300 border-none outline-none"
          />
        </div>
        <div className="h-[50px] w-[50px] flex items-center justify-center ml-5  bg-slate-500 rounded-sm">
          <span>
            <FaUser className="text-[40px] cursor-pointer text-white" />
          </span>
        </div>
      </div>
    </header>
  );
}
