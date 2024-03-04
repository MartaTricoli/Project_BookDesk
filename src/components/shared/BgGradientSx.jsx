import React from "react";

const BgGradientSx = () => {
  return (
    <>
      <div className="relative w-full h-60 ">
        <div className="absolute inset-0 skew-y-6 bg-[linear-gradient(to_right,#171F43,#0077b5,#171F43)] animate-gradient-x w-full"></div>
        <div className="py-8 px-4"></div>
      </div>
    </>
  );
};

export default BgGradientSx;
