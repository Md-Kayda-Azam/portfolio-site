"use client";
import React from "react";
import { motion } from "framer-motion";
import { TbBrandGithub } from "react-icons/tb";
import {
  SlSocialYoutube,
  SlSocialLinkedin,
  SlSocialFacebook,
  SlSocialInstagram,
} from "react-icons/sl";

const LeftSide = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.5 }}
      className="w-full h-full flex flex-col items-center justify-end gap-4 text-textLight"
    >
      <div className="flex flex-col gap-4">
        <a href="https://github.com/Md-Kayda-Azam" target="_blank">
          <span className="w-10 h-10 text-2xl bg-hoverColor rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:translate-y-2 transition-all duration-300">
            <TbBrandGithub />
          </span>
        </a>
        <a href="https://github.com/Md-Kayda-Azam" target="_blank">
          <span className="w-10 h-10 text-2xl bg-hoverColor rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:translate-y-2 transition-all duration-300">
            <SlSocialLinkedin />
          </span>
        </a>
        <a href="https://github.com/Md-Kayda-Azam" target="_blank">
          <span className="w-10 h-10 text-2xl bg-hoverColor rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:translate-y-2 transition-all duration-300">
            <SlSocialYoutube />
          </span>
        </a>
        <a href="https://github.com/Md-Kayda-Azam" target="_blank">
          <span className="w-10 h-10 text-2xl bg-hoverColor rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:translate-y-2 transition-all duration-300">
            <SlSocialInstagram />
          </span>
        </a>
        <a href="https://github.com/Md-Kayda-Azam" target="_blank">
          <span className="w-10 h-10 text-2xl bg-hoverColor rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:translate-y-2 transition-all duration-300">
            <SlSocialFacebook />
          </span>
        </a>
      </div>
      <div className="w-[2px] h-32 bg-textDark"></div>
    </motion.div>
  );
};

export default LeftSide;
