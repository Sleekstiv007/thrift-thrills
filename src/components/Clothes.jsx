import React, { useState } from "react";
import { data } from "../data/data.js";

const Clothes = () => {
  // console.log(data);
  const [clothes, setClothes] = useState(data);

  // filter type trouser, jacket etc
  const filterType = (category) => {
    setClothes(
      data.filter((item) => {
        return item.category === category;
      })
    );
  };

  // filter by price
  const filterPrice = (price) => {
    setClothes(
      data.filter((item) => {
        return item.price === price;
      })
    );
  };

  return (
    <div className="max-w-[1640px] mx-auto p-4 py-12 ">
      <h1 className="text-orange-600 font-bold text-4xl text-center">
        Top Rated Menu Items
      </h1>

      {/* filter row */}
      <div className="flex flex-col lg:flex-row justify-between">
        {/* filter type */}

        <div>
          <p className="font-bold text-gray-700">Filter Type</p>

          <div className="flex justify-between flex-wrap">
            <button
              onClick={() => setClothes(data)}
              className="m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-black "
            >
              All
            </button>
            <button
              onClick={() => filterType("Trouser")}
              className="m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-black "
            >
              Trouser
            </button>
            <button
              onClick={() => filterType("Jacket")}
              className="m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-black "
            >
              Jacket
            </button>
            <button
              onClick={() => filterType("Female Outfit")}
              className="m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-black "
            >
              Female Outfit
            </button>
            <button
              onClick={() => filterType("Shirt")}
              className="m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-black "
            >
              Shirt
            </button>
          </div>
        </div>

        {/* filter price */}
        <div>
          <p className="font-bold text-gray-700">Filter Price</p>
          <div className="flex justify-between max-w-[390px] w-full">
            <button
              onClick={() => filterPrice("$")}
              className="m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-black"
            >
              $
            </button>
            <button
              onClick={() => filterPrice("$$")}
              className="m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-black"
            >
              $$
            </button>
            <button
              onClick={() => filterPrice("$$$")}
              className="m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-black"
            >
              $$$
            </button>
            <button
              onClick={() => filterPrice("$$$$")}
              className="m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-black"
            >
              $$$$
            </button>
          </div>
        </div>
      </div>

      {/* DISPLAY IMAGES */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-4">
        {clothes.map((items, index) => (
          <div
            key={index}
            className="border rounded-lg shadow-lg hover:scale-105 duration-300"
          >
            <img
              src={items.image}
              alt={items.name}
              className="w-full h-[200px] object-cover rounded-t-lg"
            />
            <div className="flex justify-between px-2 py-4">
              <p className="font-bold">{items.name}</p>
              <p>
                <span className="bg-orange-500 text-white p-1 rounded-full ">
                  {items.price}
                </span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Clothes;
