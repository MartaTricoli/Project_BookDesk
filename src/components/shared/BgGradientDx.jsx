import React from "react";

const BgGradientDx = () => {
  return (
    <>
      <div className="relative w-full h-56">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#171F43,#0077b5,#171F43)] dark:bg-[linear-gradient(to_right,white,#0077b5,white)] animate-gradient-x -skew-y-6 w-full"></div>
        <div className="py-8 px-4"></div>
      </div>
    </>
  );
};

export default BgGradientDx;
