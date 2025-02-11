import React from "react";

const Content = () => {
  return (
     
        <div className="flex justify-between w-[1240px] mt-[210px] mx-auto">
          <div className="w-[1240px] flex flex-col items-start mx-auto justify-start">
            <img src="/images/Logo (2).png" alt="img" />
            <div className="mt-4"> 
              <p className="text-white">
                For PlayStation® 4, PlayStation 5, Xbox One, Xbox Series X|S, 
              </p>
              <span className="block mt-2 text-white">
                Nintendo Switch, and PC via Origin and Steam.
              </span>
            </div>
            <div className="text-white flex gap-4 mt-8 text-center">
              <button className="w-[200px] h-[43px] border-2 border-[#AAAAAA] border-b-[#FB4F1F]">PLAY FREE NOW</button>
              <button className="w-[200px] h-[43px] border-2 border-[#AAAAAA] border-b-[#FB4F1F]">WATCH THE TRAILER</button>
            </div>
          </div>
          <div className="relative w-full overflow-hidden">
  <img src="/images/Logo (3).png" alt="img" className="absolute top-0 left-0 w-[800px] h-[350px] " />
  <img src="/images/Character.png" alt="img" className="absolute top-0 left-28 w-[500px] h-[450px]" />
</div>



        </div>
      
      

    
  );
};

export default Content;
