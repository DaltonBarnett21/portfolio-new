import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import Image from "next/image";
import Me from "../public/dalton.jpg";
import Link from "next/link";

const Hero = () => {
  const [text, count] = useTypewriter({
    words: ["Hi, I'm Dalton.", "Welcome.", "<ILoveProgramming/>"],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <div className="bg-[#272121] text-white h-screen relative translate-y-[70px]   ">
      <div className="max-w-7xl mx-auto flex justify-center   ">
        <div className=" absolute top-2 ">
          <img
            src="/dalton.jpg"
            alt="picture of dalton"
            className="rounded-full object-cover h-[300px] w-[300px] 2xl:h-[375px] 2xl:w-[375px]   "
          />
        </div>
        <div className="absolute top-1/2 text-center lg:w-[500px]   xxl:mt-0  ">
          <h1 className="text-3xl lg:text-6xl font-semibold w-full ">
            <span>{text}</span>
            <Cursor cursorColor="white" />
          </h1>
          <h2 className=" text-xl tracking-[15px] mt-10">Web Developer</h2>
          <div className="flex justify-between mt-10">
            <Link href="#about">
              <p className=" hover:cursor-pointer hover:opacity-70">About</p>
            </Link>
            <Link href="#experience">
              <p className=" hover:cursor-pointer hover:opacity-70">
                Experience
              </p>
            </Link>

            <Link href="#projects">
              <p className=" hover:cursor-pointer hover:opacity-70">Projects</p>
            </Link>
            <Link href="#contact">
              <p className=" hover:cursor-pointer hover:opacity-70">Contact</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
