import React from "react";

function About() {
  return (
    <div className="w-full p-20 pt-32 rounded-tl-3xl rounded-tr-3xl text-white">
      <div className="w-full flex flex-col md:flex-row gap-6 pt-10">
        <div className="w-1/2">
          <h1 className="text-[2.3vw] leading-[4vw]">
            A competitive CTF team excelling in binary exploitation, pwning,
            forensics, reverse engineering, cryptography, and web exploitation.
            Their diverse skill set allows them to tackle challenges across
            multiple cybersecurity domains with precision and expertise.
          </h1>
        </div>
        <div className="w-1/2 h-[60vh] rounded-3xl">
          <img src="/logo2.png" alt="" />
        </div>
      </div>
    </div>
  );
}

export default About;
