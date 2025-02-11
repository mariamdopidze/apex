import React from "react";

const Navbar = () => {
  return (
    <div className="relative w-[1240px] h-[82px] bg-black mx-auto flex items-center justify-center overflow-visible">
      <img
        src="/images/Vector.svg"
        alt="img"
        className="w-[48px] h-[79px] absolute -left-[20px]"
      />

      <img
        src="/images/Vector 2.svg"
        alt="img"
        className="w-[48px] h-[79px] absolute -right-[17px]"
      />

      <div className="flex items-center justify-start w-full px-12">
        <img src="/images/Logo.png" alt="img" className="w-[70px] h-[45px]" />
        <div className="text-white flex items-center justify-start gap-6 px-10">
          <a href="">ABOUT</a>
          <a href="">MODES</a>
          <a href="">SEASON</a>
          <a href="">BATTLE PASS</a>
          <a href="">COMMUNITY</a>
          <a href="">COMPETE</a>
        </div>
      </div>
      <button className="w-[233px] h-[48px] bg-[#C83C35] text-white mr-16 rounded">DOWNLOAD FOR FREE</button>
    </div>
  );
};

export default Navbar;
