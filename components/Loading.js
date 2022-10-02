import React from "react";
import Image from "next/image";
import pacman from "../public/pacman.gif";

const Loading = () => {
  return (
    <div className="bg-[#272121] text-white h-screen flex justify-center items-center relative ">
      <Image src={pacman} alt="loading icon" />
    </div>
  );
};

export default Loading;
