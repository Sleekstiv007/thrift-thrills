import React from "react";

const HeadlineCards = () => {
  return (
    <div className="max-w-[1640px] mx-auto p-4 py-12 grid md:grid-cols-3 gap-6">
      {/* Cards */}
      <div className="rounded-xl relative">
        {/* overlay */}
        <div className="absolute w-full h-full bg-black/50 rounded-xl text-white">
          <p className="font-bold text-2xl px-2 pt-4">Hot Fashion</p>
          <p className="px-2">Est.2023</p>
          <button className="border-white bg-white text-black absolute mx-2 bottom-4">
            Order Now
          </button>
        </div>
        <img
          className="max-h-[1600px] md:max-h-[200px] w-full object-cover"
          src="https://images.unsplash.com/photo-1604882767135-b41fac508fff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8dGhyaWZ0JTIwc3RvcmV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
          alt="/"
        />
      </div>
      <div className="rounded-xl relative">
        {/* overlay */}
        <div className="absolute w-full h-full bg-black/50 rounded-xl text-white">
          <p className="font-bold text-2xl px-2 pt-4">Ken's Corner</p>
          <p className="px-2">Est.2023</p>
          <button className="border-white bg-white text-black absolute mx-2 bottom-4">
            Order Now
          </button>
        </div>
        <img
          className="max-h-[1600px] md:max-h-[200px] w-full object-cover"
          src="https://images.unsplash.com/photo-1578939662863-5cd416d45a69?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHRocmlmdCUyMHN0b3JlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
          alt="/"
        />
      </div>
      <div className="rounded-xl relative">
        {/* overlay */}
        <div className="absolute w-full h-full bg-black/50 rounded-xl text-white">
          <p className="font-bold text-2xl px-2 pt-4">Barbie Section</p>
          <p className="px-2">Est.2023</p>
          <button className="border-white bg-white text-black absolute mx-2 bottom-4">
            Order Now
          </button>
        </div>
        <img
          className="max-h-[1600px] md:max-h-[200px] w-full object-cover"
          src="https://images.pexels.com/photos/4777547/pexels-photo-4777547.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt="/"
        />
      </div>
    </div>
  );
};

export default HeadlineCards;
