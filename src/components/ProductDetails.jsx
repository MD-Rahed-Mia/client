import React, { useState } from "react";
import { MdStars } from "react-icons/md";
import { FaMotorcycle } from "react-icons/fa6";
import bestDeal from "../store/bestDeal";
import { TbCircleDotFilled } from "react-icons/tb";
import { IoStar } from "react-icons/io5";
import recomended from "../store/recomended";

export default function ProductDetails() {
  return (
    <div className="w-[90%] lg:w-6/12 mt-[80px] mx-auto">
      <h1 className="text-2xl font-bold mt-10">Chineese Wok</h1>
      <ProductCard />

      <div className="my-10">
        <h1 className="text-3xl font-bold ">Deals for you</h1>

        <div className="grid grid-cols-2 gap-3 items-center flex-wrap justify-start">
          {bestDeal &&
            bestDeal.map((item, index) => {
              return item.status ? (
                <DealCard
                  image={item.title}
                  time={item.time}
                  prize={item.prize}
                />
              ) : null;
            })}
        </div>
      </div>
      <div className="my-5">
        <h1 className="font-bold text-3xl">Recomended for you</h1>
        <div>
          {
            //recomended card here
            recomended &&
              recomended.map(function (item, index) {
                return <RecomendedCard detail={item} />;
              })
          }
        </div>
      </div>
    </div>
  );
}

const ProductCard = () => {
  return (
    <div className="p-4 border shadow-lg mt-10 rounded-lg">
      <h1 className="flex items-center justify-start gap-2">
        <span className="text-2xl text-green-500">
          <MdStars />
        </span>
        <span className="font-bold">4.1(500+ rating)</span>
        <span className="font-bold">$120 for two</span>
      </h1>
      <h3>
        <span>Chineese, Asian</span>
      </h3>
      <div className="my-3">
        <h1 className="text-[14px] font-bold px-2">
          Outlet <span>Rohini</span>
        </h1>
        <h1 className="text-[14px] font-bold px-2">30-40 mins</h1>
      </div>
      <hr />
      <div className="mt-4 opacity-65 flex items-center gap-3 font-bold text-[14px]">
        <span>
          <FaMotorcycle />
        </span>
        <span>2.5 kms</span> | <span> $40 will free delivery</span>
      </div>
    </div>
  );
};

// top deals card here
const DealCard = ({ prize, image, time }) => {
  return (
    <>
      <div className=" w-full p-2 border shadow-md flex flex-wrap gap-4 rounded-md cursor-pointer my-3">
        <span>
          <img src={image} alt="" className="max-w-[50px] mx-auto" />
        </span>
        <span>
          <h1 className="font-bold">{prize}</h1>
          <h1 className="text-[14px]">
            <span>Ends in</span> <span className="font-bold">{time}</span>
          </h1>
        </span>
      </div>
    </>
  );
};

const RecomendedCard = ({ detail }) => {

  return (
    <>
      <div className="border shadow-md rounded-lg p-3 flex items-center justify-between mt-3">
        <div>
          <span className="inline">
            <TbCircleDotFilled
              className={
                detail?.veg ? "text-green-500 text-2xl" : "text-red-600 text-2xl"
              }
            />
          </span>
          <h1 className="font-bold text-lg">{detail?.title}</h1>
          <h3 className="font-bold text-lg">${detail?.price}</h3>
          <span className="flex items-center gap-2">
            <span>
              <IoStar className="text-green-500 text-sm font-bold" />
            </span>
            <span className="text-sm text-black font-bold">
              <span className="text-green-500">{detail?.rating}</span> (12)
            </span>
          </span>
          <h1 className="font-bold opacity-65">{detail?.description}</h1>
        </div>
        <div>
          <span className="w-[180px] h-[120px] rounded-lg block">
            <img
              src={detail?.image}
              alt=""
              className="object-cover w-full h-full rounded-lg"
            />
          </span>
          <button className="w-[80%] px-3 py-1 mt-2 bg-white rounded-lg cursor-pointer text-[orangered] font-bold text-xl mx-auto text-center block border shadow-sm">
            ADD
          </button>
        </div>
      </div>
    </>
  );
};
