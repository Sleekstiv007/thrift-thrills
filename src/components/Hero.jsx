import React from "react";

const Hero = () => {
  return (
    <div className="max-w-[1640px] mx-auto p-4">
      <div className="max-h-[500px] relative ">
        {/* overlay */}
        <div className="absolute w-full h-full text-gray-200 max-h-[500px] bg-black/50 flex flex-col justify-center">
          <h1 className="px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold">
            The <span className="text-orange-500"> Best</span>
          </h1>
          <h1 className="px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold">
            Thrift <span className="text-orange-500">Shop </span>
          </h1>
        </div>
        <img
          className="w-full max-h-[500px] object-cover rounded-xl"
          src="https://images.pexels.com/photos/16176573/pexels-photo-16176573.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt="/"
        />
      
      </div>
    </div>
  );
};

export default Hero;
