import React from "react";
import Image from "next/image";
import SwipeableViews from "react-swipeable-views";
import Amazon from "../public/Amz.jpg";
import NBS from "../public/nbs.png";
import { motion } from "framer-motion";

const Experience = () => {
  const styles = {
    slide: {
      padding: 15,
      color: "#fff",
    },
    slide1: {
      height: "600px",
      color: "white",
      marginRight: "15px",
    },
    slide2: {
      height: "600px",
      color: "white",
      marginRight: "15px",
    },
    slide3: {
      height: "600px",
      color: "white",
      marginRight: "15px",
    },
  };

  return (
    <>
      <div className=" bg-[#272121] text-white h-screen flex justify-center items-center pt-32  pb-20 relative  ">
        <h3 className=" absolute top-20  uppercase tracking-[20px] text-gray-400 text-2xl hidden lg:block">
          Experience
        </h3>
        <SwipeableViews enableMouseEvents className=" w-[600px] p-10  ">
          <div
            style={Object.assign({}, styles.slide, styles.slide1)}
            className=""
          >
            <div className="flex justify-center flex-col pt-10 pb-2 hover:cursor-pointer hover:opacity-70 ">
              <div className="flex flex-col justify-center text-center">
                <motion.div
                  initial={{ y: -100, opacity: 0 }}
                  transition={{ duration: 1.2 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  <Image
                    src={NBS}
                    alt="Nbs logo"
                    width={100}
                    height={100}
                    objectFit="cover"
                    className=" rounded-full"
                  />
                </motion.div>

                <h4 className="text-4xl font-light mt-2">Web Developer</h4>
                <p className="font-bold text-2xl mt-1">National Bus Sales</p>
                <p className="uppercase py-5 text-gray-300 mt-1 text-sm">
                  March 2022 - Present
                </p>
                <p className="uppercase  text-gray-300 mt-1 text-xs">
                  technogies used
                </p>
              </div>
              <ul className=" list-disc space-y-4 ml-5 mt-5 ">
                <li>
                  Front End:
                  <ul>
                    <li>
                      Next.js, React.js, Tailwind, Bootstrap, CSS, Redux, Axios
                    </li>
                  </ul>
                </li>
                <li>
                  Backend:
                  <ul>
                    <li>Node.js, Express.js, mongodb, php, C#, SQL Server</li>
                  </ul>
                </li>
                <li>
                  Devops:
                  <ul>
                    <li>
                      Linux Ubuntu, digital ocean, PM2, NGINX, Microsoft IIS
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
          <div style={Object.assign({}, styles.slide, styles.slide2)}>
            <div className="flex justify-center flex-col pt-10 hover:cursor-pointer hover:opacity-70">
              <div className="flex flex-col justify-center text-center">
                <motion.div
                  initial={{ y: -100, opacity: 0 }}
                  transition={{ duration: 1.2 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  <Image
                    src={Amazon}
                    alt="amazon logo"
                    width={100}
                    height={100}
                    objectFit="cover"
                    className=" rounded-full"
                  />
                </motion.div>

                <h4 className="text-4xl font-light mt-2">Data Analyst</h4>
                <p className="font-bold text-2xl mt-1">Amazon</p>
                <p className="uppercase py-5 text-gray-300 mt-1 text-sm">
                  March 2021 - March 2022
                </p>
                <p className="uppercase  text-gray-300 mt-1 text-xs">
                  technogies used
                </p>
              </div>
              <ul className=" list-disc space-y-4 ml-5 mt-5 ">
                <li>Excel</li>
                <li>Visual Baisc</li>
                <li>XML</li>
                <li>Python</li>
                <li>Postgres SQL</li>
                <li>Oracle</li>
              </ul>
            </div>
          </div>
        </SwipeableViews>
      </div>
    </>
  );
};

export default Experience;
