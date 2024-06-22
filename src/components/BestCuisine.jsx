import React, { useState } from "react";
import bestCuisine from "../store/bestCuisine";
import { GoChevronDown } from "react-icons/go";

export default function BestCuisine() {
  const [limit, setLimit] = useState(4);

  function seeMoreCuisine() {
    setLimit((prev) => prev + limit);
  }

  return (
    <>
      <section className="w-[90%] mx-auto p-3 my-10">
        <h1 className="font-bold sm:text-2xl lg:text-3xl mb-3">
          Best Cuisine Near Me{" "}
        </h1>
        <div className="w-full min-h-[150px] grid grid-cols-1 md:grid-cols-3 items-center justify-center gap-2 flex-wrap">
          {bestCuisine &&
            bestCuisine.map((item, index) => {
              return index <= limit ? (
                <CuisineCard title={item.title} key={index} />
              ) : null;
            })}

          <div
            className="px-4 border text-center shadow-sm py-3 w-full rounded-lg cursor-pointer"
            onClick={seeMoreCuisine}
          >
            <p className="capitalize flex items-center justify-center">
              see more{" "}
              <span>
                <GoChevronDown />
              </span>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

const CuisineCard = ({ title }) => {
  return (
    <>
      <div className="px-4 border text-center shadow-sm py-3 w-full rounded-lg cursor-pointer">
        <p className="capitalize">{title}</p>
      </div>
    </>
  );
};
