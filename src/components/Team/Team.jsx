import { motion } from "framer-motion";
import React from "react";
import Card from "./Card";

function Team() {
  const cardsData = [
    {
      image:
        "https://cdn.discordapp.com/attachments/1164514364196409377/1266097720976736407/Ai_Generated_samurai_man_n_suit_-_Copy.jpeg?ex=66a3e8e3&is=66a29763&hm=a127e7a2fd74e13d87aef777f1b4b4def341567afa5afd961ee4bef06d49dc36&",
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
