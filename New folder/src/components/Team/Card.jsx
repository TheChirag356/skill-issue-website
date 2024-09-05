import React, { useState } from "react";

function Card({ image, name, info }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="cardcontainer relative w-full h-[50vh] md:h-[75vh] bg-zinc-800"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="card relative w-full h-full rounded-xl overflow-hidden">
        <div
          className={`info z-[9] absolute left-0 right-0 w-full bg-zinc-700 p-10 flex flex-col items-center justify-center transition-all duration-300 ease-in-out ${
            isHovered
              ? "bottom-0 h-[15vh] opacity-90"
              : "bottom-[-15vh] h-0 opacity-0"
          }`}
        >
          <h1 className="text-2xl font-['Neue Montreal'] text-white">{name}</h1>
          <h3 className="text-white">{info}</h3>
        </div>
        <img className="w-full h-full object-cover hover:scale-90 transition-transform duration-150 ease-linear" src={image} alt={name} />
      </div>
    </div>
  );
}

export default Card;
