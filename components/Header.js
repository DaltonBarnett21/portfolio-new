import React from "react";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import { motion } from "framer-motion";
import Link from "next/link";

const Header = () => {
  return (
    <header className="bg-[#272121] p-5 text-white  top-0 sticky z-10  ">
      <div className="flex justify-between items-center max-w-7xl mx-auto ">
        <motion.div
          initial={{ x: -500, opacity: 0, scale: 0.5 }}
          animate={{ x: 0, opacity: 1, scale: 1 }}
          transition={{ duration: 1.0 }}
          className="  font-bold   text-3xl"
        >
          <Link href="#hero">
            <span className="hover:cursor-pointer">DB</span>
          </Link>
        </motion.div>

        <motion.div
          initial={{ x: 500, opacity: 0, scale: 0.5 }}
          animate={{ x: 0, opacity: 1, scale: 1 }}
          transition={{ duration: 1.0 }}
          className=" flex"
        >
          <Link href="#contact">
            <div className="flex hover:cursor-pointer hover:opacity-70">
              <p>Contact</p>
              <MailOutlineIcon className="ml-1" />
            </div>
          </Link>
        </motion.div>
      </div>
    </header>
  );
};

export default Header;
