/* eslint-disable react/no-unknown-property */
import React, { useEffect, useState } from "react";
import { RxCross1 } from "react-icons/rx";
import ProductCard from "./ProductCard";
import chainStore from "../store/chainStore";

export default function ProductList() {
  const [filterMenuActive, setfilterMenuActive] = useState(false);

  const [filterValue, setFilterValue] = useState({});

  return (
    <section className="w-[90%] mx-auto my-7">
      <h2 className="text-2xl font-bold">
        Restaurants with online food delivery in Bangalore
      </h2>
      <div>
        <ProductMenu toggle={{ setfilterMenuActive, filterMenuActive }} />
      </div>

      <div className="grid mt-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 gap-4">
        {chainStore &&
          chainStore.map((item, index) => {
            return (
              <ProductCard
                key={index}
                title={item.title}
                image={item.image}
                place={item.place}
                rating={item.rating}
                minTime={item.minTime}
                maxTime={item.maxTime}
                name={item.name}
              />
            );
          })}
      </div>
    </section>
  );
}

//top row of productlist
const ProductMenu = ({ toggle }) => {
  return (
    <>
      <ul className="flex items-center gap-4">
        <li
          className="py-2 px-4 border shadow min-w-[70px] cursor-pointer rounded-3xl"
          onClick={(e) => {
            e.stopPropagation();
            toggle.setfilterMenuActive(true);
          }}
        >
          filter
          {toggle.filterMenuActive ? (
            <>
              <div
                className="h-[100%] w-full bg-[#00000073] z-50 fixed top-0 left-0 flex items-center justify-center"
                onClick={(e) => e.stopPropagation()}
              >
                <FilterMenu toggle={toggle} />
              </div>
            </>
          ) : (
            ""
          )}
        </li>
        <li className="py-2 px-4 border shadow min-w-[70px] cursor-pointer rounded-3xl">
          sort
        </li>
        <li className="py-2 px-4 border shadow min-w-[70px] cursor-pointer rounded-3xl">
          Fast Delivery
        </li>
      </ul>
    </>
  );
};

// filter menu here
const FilterMenu = ({ toggle }) => {
  const [filterSelectedItem, setFilterSelectedItem] = useState("sort");

  function handleFilterItem(e) {
    const item = e.target.getAttribute("filter-item");
    setFilterSelectedItem(item);
  }

  function cancelFilterMenu(e) {
    e.stopPropagation();
    toggle.setfilterMenuActive(false);
  }

  return (
    <>
      <div className=" bg-white w-6/12 h-[50vh] rounded-2xl p-5">
        <div className="flex items-center justify-between font-bold text-2xl">
          <span>
            <h1>Filter</h1>
          </span>
          <span
            className="cursor-pointer h-8  flex items-center justify-center w-8   rounded-full shadow-lg "
            onClick={cancelFilterMenu}
          >
            <RxCross1 fontSize={12} />
          </span>
        </div>
        <div className="flex justify-between">
          <ul className="h-full flex flex-col w-6/12 border ">
            <li
              className="w-auto font-bold p-2 text-lg cursor-pointer"
              filter-item="sort"
              onClick={handleFilterItem}
            >
              Sort
            </li>
            <li
              className="w-auto font-bold p-2 text-lg cursor-pointer"
              filter-item="deliveryTime"
              onClick={handleFilterItem}
            >
              Delivery Time
            </li>
            <li
              className="w-auto font-bold p-2 text-lg cursor-pointer"
              filter-item="cuisine"
              onClick={handleFilterItem}
            >
              Cuisine
            </li>
            <li
              className="w-auto font-bold p-2 text-lg cursor-pointer"
              filter-Item="explore"
            >
              Explore
            </li>
            <li className="w-auto font-bold p-2 text-lg cursor-pointer">
              Ratings
            </li>
            <li className="w-auto font-bold p-2 text-lg cursor-pointer">
              Veg/none-Veg
            </li>
            <li className="w-auto font-bold p-2 text-lg cursor-pointer">
              Offer
            </li>
            <li className="w-auto font-bold p-2 text-lg cursor-pointer">
              Cost for two
            </li>
          </ul>

          <div className="border w-full p-3">
            {filterSelectedItem == "sort" ? (
              <SortBy />
            ) : filterSelectedItem == "deliveryTime" ? (
              <DeliveryTime />
            ) : filterSelectedItem == "cuisine" ? (
              <Cuisine />
            ) : null}
          </div>
        </div>

        <FilterButton />
      </div>
    </>
  );
};

//sort by filter items
const SortBy = () => {
  return (
    <>
      <div>
        <p>sort by</p>

        <ul>
          <li>
            <input
              type="radio"
              name="Relevence"
              id="Relevance"
              placeholder="Relevence(default)"
            />{" "}
            <span>Relevence(default)</span>
          </li>
          <li>
            <input
              type="radio"
              name="Relevence"
              id="Relevance"
              placeholder="Relevence(default)"
            />{" "}
            <span>Relevence(default)</span>
          </li>
          <li>
            <input
              type="radio"
              name="Relevence"
              id="Relevance"
              placeholder="Relevence(default)"
            />{" "}
            <span>Relevence(default)</span>
          </li>
          <li>
            <input
              type="radio"
              name="Relevence"
              id="Relevance"
              placeholder="Relevence(default)"
            />{" "}
            <span>Relevence(default)</span>
          </li>
        </ul>
      </div>
    </>
  );
};

//filter by delivery time
const DeliveryTime = () => {
  return (
    <>
      <div>
        <p>Filter Delivery</p>
        <ul>
          <li>
            <input type="checkbox" name="delivery-time" id="delivery-time" />{" "}
            <span>Fast Delivery</span>
          </li>
        </ul>
      </div>
    </>
  );
};

//filter by cuisine
const Cuisine = () => {
  return (
    <>
      <div>
        <p>Filter Cuisine</p>
        <ul>
          <li>
            <input type="checkbox" name="cuisine" id="delivery-time" />{" "}
            <span>Afghani</span>
          </li>
          <li>
            <input type="checkbox" name="cuisine" id="delivery-time" />{" "}
            <span>Italian</span>
          </li>
          <li>
            <input type="checkbox" name="cuisine" id="delivery-time" />{" "}
            <span>American</span>
          </li>
          <li>
            <input type="checkbox" name="cuisine" id="delivery-time" />{" "}
            <span>Chineese</span>
          </li>
        </ul>
      </div>
    </>
  );
};

const FilterButton = () => {
  return (
    <>
      <div className="flex justify-end items-center gap-3 p-3">
        <button className="text-[#ff3300] cursor-pointer inline text-xl capitalize">
          clear filter
        </button>
        <button className="px-3 py-2 bg-[#ff3300] text-white text-xl rounded-full cursor-pointer">
          apply filter
        </button>
      </div>
    </>
  );
};
