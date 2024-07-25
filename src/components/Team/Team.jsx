import { motion } from "framer-motion";
import React from "react";
import Card from "./Card";

function Team() {
  const cardsData = [
    {
      image:
        "https://ctftime.org/media/cache/31/8c/318c1f972ab9a656ccb62b59b4a09165.jpg",
      name: "Charlie",
      info: "A weeb who loves to make and break code",
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
