import React from "react";

const Secmenu = () => {
  return (
    <div className="flex  w-full h-[40px] bg-[#161616] justify-end items-center ">
      <div className="flex gap-4 pr-[30px]">
        <img
          src="/images/Profile.svg"
          alt="img"
          className="  w-[17px] h-[19px] "
        />
        <img
          src="/images/Help.svg"
          alt="img"
          className="  w-[14px] h-[20px] "
        />
        <img src="/images/EA.svg" alt="img" className="  w-[33px] h-[18px] " />
      </div>
    </div>
  );
};

export default Secmenu;
