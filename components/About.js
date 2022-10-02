import React from "react";
import Image from "next/image";
import AboutImage from "../public/aboutImage.jpg";
import { motion } from "framer-motion";

const About = () => {
  return (
    <motion.div className="bg-[#272121] text-white h-screen flex  justify-center items-center relative">
      <h3 className="hidden lg:block absolute top-20  uppercase teacking-[20px] text-gray-400 text-2xl">
        About
      </h3>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="flex flex-col xl:flex-row"
      >
        <motion.div
          initial={{ x: -200, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{
            duration: 1.2,
          }}
          viewport={{ once: true }}
          className=" rounded-lg mt-24"
        >
          <Image src={AboutImage} alt="picture of dalton" />
        </motion.div>
        <div className="space-y-10 p-4  md:px-10 max-w-5xl  ">
          <h4 className="text-3xl font-semibold mt-5 text-center lg:text-left">
            A little About Me{" "}
          </h4>
          <p className="text-sm md:text-lg">
            Hi, my name is Dalton, I have a bachelors in Computer Science and I
            have been coding professionally for 2 years now. My journey started
            at Amazon as a Data Analyst, where I would code Visual Basic scripts
            with Excel, as well as python scripts to interact with internal
            Amazon APIs. This experience with cookies, HTTP Requests, JSON, and
            SQL pushed me to want to grow and interact with the web even more,
            so I decided that web development was the path I wanted to go. As of
            today I work at National Bus Sales as Web Developer, where I use
            multiple modern technogies such as React, Next.js, Express, Node,
            SQL, mongoDB, and many others to build and deploy websites. Please
            feel free to reach out and thank you for visiting my page!
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default About;
