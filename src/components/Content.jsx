import React from "react";

const Content = () => {
  return (
    <div className="flex justify-between w-[1240px] min-h-screen items-center mx-auto">
      <div className="flex flex-col items-start justify-start w-[600px]">
        <img src="/images/Logo (2).png" alt="img" />
        <div className="mt-4">
          <p className="text-white">
            For PlayStation® 4, PlayStation 5, Xbox One, Xbox Series X|S,
          </p>
          <span className="block mt-2 text-white">
            Nintendo Switch, and PC via Origin and Steam.
          </span>
        </div>
        <div className="text-white flex gap-4 mt-8">
          <button className="w-[200px] h-[43px] border-2 border-[#AAAAAA] border-b-4 border-b-[#FB4F1F]">
            PLAY FREE NOW
          </button>
          <button className="w-[200px] h-[43px] border-2 border-[#AAAAAA] border-b-4 border-b-[#FB4F1F]">
            WATCH THE TRAILER
          </button>
        </div>
      </div>

      <div className="relative w-[600px] min-h-[550px] flex items-center justify-center">
        <img
          src="/images/Logo (3).png"
          alt="img"
          className="absolute bottom-6 left-0 max-w-full h-auto object-contain"
        />
        <img
          src="/images/Character.png"
          alt="img"
          className="absolute top-0 right-0 max-w-full h-[550px] object-contain"
        />
      </div>
    </div>
  );
};

export default Content;
