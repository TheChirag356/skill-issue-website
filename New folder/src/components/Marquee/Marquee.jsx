import { motion } from "framer-motion";
import React from "react";

function Marquee() {
  return (
    <div className="w-full py-20 bg-[#004D43] overflow-hidden">
      <div className="flex whitespace-nowrap border-t-2 border-b-2 border-zinc-300">
        <motion.div
          className="flex"
          initial={{ x: "0%" }}
          animate={{ x: "-100%" }}
          transition={{ repeat: Infinity, ease: "linear", duration: 10 }}
        >
          <h1 className='text-[10vw] leading-none font-["Founders Grotesk X-Condensed"] uppercase font-bold pr-20'>
            We Are Skill_Issue
          </h1>
          <h1 className='text-[10vw] leading-none font-["Founders Grotesk X-Condensed"] uppercase font-bold pr-20'>
            We Are Skill_Issue
          </h1>
        </motion.div>
      </div>
    </div>
  );
}

export default Marquee;
