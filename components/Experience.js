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
      backgroundColor: "#363333",
      height: "650px",
      color: "white",
      marginRight: "15px",
    },
    slide2: {
      backgroundColor: "#363333",
      height: "650px",
      color: "white",
      marginRight: "15px",
    },
    slide3: {
      backgroundColor: "#363333",
      height: "650px",
      color: "white",
      marginRight: "15px",
    },
  };

  return (
    <>
      <div className=" bg-[#272121] text-white h-screen flex justify-center items-center pt-28 pb-20 relative  ">
        <h3 className=" absolute top-20  uppercase teacking-[20px] text-gray-400 text-2xl">
          Experience
        </h3>
        <SwipeableViews enableMouseEvents className=" w-[700px] p-10  ">
          <div style={Object.assign({}, styles.slide, styles.slide1)}>
            <div className="flex justify-center flex-col pt-10 pb-2 hover:cursor-pointer hover:opacity-70">
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
              </div>
              <ul className=" list-disc space-y-4 ml-5 text-xs lg:text-sm">
                <li>
                  Creates scalable react apps using the next js framework for
                  server side rendering
                </li>
                <li>
                  Creates api endpoints in express and node js to handle
                  customer form submissions to MongoDB
                </li>
                <li>
                  Creates Node js server files to create subscriber lists via
                  Aweber api
                </li>
                <li>
                  Runs SQL query’s on Microsoft SQL Server, as well as creates
                  tables for basic customer information or events
                </li>
                <li>
                  Uses excel to gather data from Google analytics for tracking
                  form conversions and SEO Optimization.
                </li>
                <li>
                  Sets up digital ocean Linux servers on Ubuntu distributions
                </li>
                <li>Uses PM2 and NGINX for deployment</li>
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
              </div>
              <ul className=" list-disc space-y-4 ml-5 text-xs lg:text-sm">
                <li>
                  Gathers and reports data to senior operation managers in
                  PowerPoint format
                </li>
                <li>
                  Mines data using standard SQL query’s for more accurate Data
                </li>
                <li>
                  Creates VBA macros by using multiple data sets for a better
                  overview of metrics
                </li>
                <li>Debugs and maintains Excel VBA Macros</li>
                <li>
                  Creates webhooks for Amazon Chime chat rooms using Python
                </li>
              </ul>
            </div>
          </div>
          <div style={Object.assign({}, styles.slide, styles.slide3)}>
            <div className="flex justify-center flex-col pt-10 hover:cursor-pointer hover:opacity-70">
              <div className="flex flex-col justify-center text-center">
                <div>
                  <Image
                    src={Amazon}
                    alt="amazon logo"
                    width={100}
                    height={100}
                    objectFit="cover"
                    className=" rounded-full"
                  />
                </div>

                <h4 className="text-4xl font-light mt-2">Problem Solve Lead</h4>
                <p className="font-bold text-2xl mt-1">Amazon</p>
                <p className="uppercase py-5 text-gray-300 mt-1 text-sm">
                  September 2020 - March 2021
                </p>
              </div>
              <ul className=" list-disc space-y-4 ml-5 text-xs lg:text-sm">
                <li>
                  Trained and coached all 4 problem solvers on shift for the
                  pack singles department.
                </li>
                <li>
                  Partnered with operations leadership to ensure all customer
                  orders get to their destination in a timely manner, removing
                  barriers to order completion as necessary.
                </li>
                <li>
                  Exceeded learning curve, performing in the top 10% of
                  associates week 1 onwards.
                </li>
                <li>Debugs and maintains Excel VBA Macros</li>
              </ul>
            </div>
          </div>
        </SwipeableViews>
      </div>
    </>
  );
};

export default Experience;
