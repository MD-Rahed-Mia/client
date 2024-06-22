import React from "react";

import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";
import ProductCard from "./ProductCard";

export default function ProductSlider({ title }) {
  return (
    <section className="w-[90%] my-7 mx-auto my-0">
      <div className="what-on-mind-title flex w-full p-4 items-center justify-between">
        <div>
          <h1 className=" lg:text-3xl  md:text-2xl font-bold">{title}</h1>
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

      <div className="flex w-full overflow-x-auto items-center gap-3">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>

      <div className="w-6/12 mt-5 mx-auto my-0 min-h-[30px]">
        <span className="w-[80px] bg-slate-400 h-1 block mx-auto my-0 rounded-lg">
          <span className="w-[20px] bg-orange-600 h-1 block"></span>
        </span>
      </div>
    </section>
  );
}
