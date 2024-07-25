import { motion } from "framer-motion";
import React from "react";
import Card from "./Card";

function Team() {
  const cardsData = [
    {
      image:
        "https://cdn.discordapp.com/attachments/1164241456119165050/1266080814438027324/20240725_224242_0000.png?ex=66a3d924&is=66a287a4&hm=4f93f7444d5ab5623685476857fb617616df83126b7b3c08ade3158e34b2e844&",
      name: "Chirag Arora",
      info: "Some More Info",
    },
    {
      image:
        "https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-1326x1101.png",
      name: "Jane Smith",
      info: "Another Info",
    },
  ];

  return (
    <div className="w-full py-20 bg-zinc-900">
      <div className="w-full px-20 border-b-[1px] border-zinc-700 pb-20">
        <h1 className='text-7xl font-["Neue Montreal"] tracking-tight'>
          Our Team
        </h1>
      </div>
      <div className="px-20 mt-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-7xl mx-auto">
          {cardsData.map((card, index) => (
            <Card
              key={index}
              image={card.image}
              name={card.name}
              info={card.info}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Team;
