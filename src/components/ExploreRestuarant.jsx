import React, { useState } from "react";
import bestResturant from "../store/bestResturant";
import { GoChevronDown } from "react-icons/go";

export default function ExploreResturant() {
  const [limit, setLimit] = useState(4);

  function seeMoreResturant() {
    setLimit((prev) => prev + limit);
  }
  return (
    <>
      <section className="w-[90%] mx-auto p-3 my-12">
        <h1 className="font-bold sm:text-2xl lg:text-3xl mb-3">
          Best Resturant Near Me{" "}
        </h1>
        <div className="w-full min-h-[150px] items-center justify-center  gap-2 flex-wrap grid grid-cols-1  md:grid-cols-3 ">
          {bestResturant &&
            bestResturant.map((item, index) => {
              return index <= limit ? (
                <ResturantCard title={item.title} key={index} />
              ) : null;
            })}

          <div
            className="text-center border shadow-sm py-3 w-full md:min-w-full rounded-lg cursor-pointer"
            onClick={seeMoreResturant}
          >
            <p className="flex items-center justify-center">
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

const ResturantCard = ({ title }) => {
  return (
    <>
      <div className="text-center border shadow-sm py-3 w-full md:min-w-full rounded-lg cursor-pointer">
        <p>{title}</p>
      </div>
    </>
  );
};
