import React, { useState } from "react";

function About() {
  // State to track the rotation of the image
  const [tiltStyle, setTiltStyle] = useState({});

  // Handle mouse movement over the entire About page
  const handleMouseMove = (e) => {
    const { clientX, clientY, currentTarget } = e;
    const { width, height } = currentTarget.getBoundingClientRect();

    // Calculate the mouse position relative to the center of the page
    const x = clientX / width - 0.5;
    const y = clientY / height - 0.5;

    // Define the tilt effect
    const rotateX = y * 30; // Adjust this value to control the tilt amount on the X-axis
    const rotateY = x * -30; // Adjust this value to control the tilt amount on the Y-axis

    // Set the style for the tilt effect
    setTiltStyle({
      transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
      transition: "transform 0.1s ease-out",
    });
  };

  // Reset tilt when the mouse leaves the About page
  const handleMouseLeave = () => {
    setTiltStyle({
      transform: "perspective(1000px) rotateX(0) rotateY(0)",
      transition: "transform 0.3s ease-out",
    });
  };

  return (
    <div
      className="w-full p-6 md:p-20 pt-32 rounded-tl-3xl rounded-tr-3xl text-white"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div className="w-full flex flex-col md:flex-row gap-6 pt-10">
        <div className="w-full md:w-1/2">
          <h1 className="text-lg md:text-[2.3vw] leading-relaxed md:leading-[4vw]">
            A competitive CTF team excelling in binary exploitation, pwning,
            forensics, reverse engineering, cryptography, and web exploitation.
            Their diverse skill set allows them to tackle challenges across
            multiple cybersecurity domains with precision and expertise.
          </h1>
        </div>
        <div className="w-full md:w-1/2 h-64 md:h-[60vh] rounded-3xl overflow-hidden flex justify-center items-center">
          <img
            src="/snoopdawg.png"
            alt="CTF team logo or image"
            className="max-w-full max-h-full object-contain"
            style={tiltStyle}
          />
        </div>
      </div>
    </div>
  );
}

export default About;
