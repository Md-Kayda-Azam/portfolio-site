"use client";

import React from "react";
import { motion } from "framer-motion";

const RightSide = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.5 }}
      className="w-full h-full flex flex-col items-center justify-end gap-6 text-textLight"
    >
      <a href="mailto:mdkaydaazam1@gmail.com">
        <p className="text-sm rotate-90 w-72 tracking-wide text-textGreen">
          reactbd.proton.me
        </p>
      </a>
      <span className="w-[2px] h-32 bg-textDark inline-flex"></span>
    </motion.div>
  );
};

export default RightSide;
