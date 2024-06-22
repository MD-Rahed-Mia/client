import React from "react";

export default function Hero() {
  return (
    <section className="pt-[100px] w-full flex items-center justify-evenly bg-gradient-to-b lg:bg-gradient-to-t  from-indigo-500 min-h-[40vh]">
      <div className="w-[90%] mx-auto my-0 lg:grid items-center justify-between  md:grid grid-cols-2 md:justify-center">
        <div className="md:place-items-center w-full">
          <span>
            <h1 className="text-4xl font-bold text-center capitalize text-white">
              Order online <br /> food in <br /> Chattogram
            </h1>
          </span>
        </div>
        <div className="md:place-items-center text-center">
          <span className="w-full text-center">
            <img
              src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1002,h_600/v1678428358/portal/m/seo_web/dweb_header.png"
              alt="hero"
              className="w-[360px] h-[360px] block mx-auto"
            />
          </span>
        </div>
      </div>
    </section>
  );
}
