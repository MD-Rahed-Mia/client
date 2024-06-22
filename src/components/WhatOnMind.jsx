import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";

import category from "../store/category";

export default function WhatOnMind() {
  return (
    <section className="w-[90%] my-7 mx-auto mb-12">
      <div className="what-on-mind-title flex w-full p-4 items-center justify-between">
        <div>
          <h1 className=" lg:text-3xl  md:text-2xl font-bold">
            What on your mind?
          </h1>
        </div>
        <div className="flex items-center justify-center gap-4">
          <span className="h-[40px] w-[40px] rounded-full bg-slate-300 flex items-center justify-center text-white font-thin cursor-pointer">
            <FaArrowLeft />
          </span>
          <span className="h-[40px] w-[40px] rounded-full bg-slate-300 flex items-center justify-center text-white font-thin cursor-pointer">
            <FaArrowRight />
          </span>
        </div>
      </div>

      <div className="flex items-center overflow-x-auto ">
        {category &&
          category.map((item, index) => {
            return (
              <div className="flex-shrink-0 cursor-pointer" key={index}>
                <a href="#">
                  <span>
                    <img
                      className="max-h-[180px]"
                      src={item?.img}
                      alt="image"
                    />
                  </span>
                </a>
              </div>
            );
          })}
      </div>
    </section>
  );
}
