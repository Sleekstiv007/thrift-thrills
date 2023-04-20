import React from "react";
import { categories } from "../data/data.js";

const Category = () => {
  // console.log(categories);
  return (
    <div className="max-w-[1640] mx-auto px-4 py-12">
      <h1 className="text-orange-600 font-bold text-4xl text-center">
        Top Rated Menu Items
      </h1>
      {/* CATEGORIES */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-6">
        {categories.map((item, index) => (
          <div className="bg-gray-100 rounded-lg p-4 text-center " key={index}>
            <h2 className="font-bold flex justify-center items-center sm:text-xl">
              {item.name}
            </h2>
            <img
              className="w-[400px] md:w-[300px] h-[200px] object-cover "
              src={item.image}
              alt={item.name}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;
