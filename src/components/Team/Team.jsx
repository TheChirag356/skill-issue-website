import { motion } from "framer-motion";
import React from "react";
import Card from "./Card";

function Team() {
  const cardsData = [
    {
      image: "https://i.imgur.com/rw6rlh0.jpeg",
      name: "ssdon",
      info: "The one who started it all",
    },
    {
      image:
        "https://en.gravatar.com/avatar/3079e4e66a9b33712a35e2ecf165b5ad?s=1024",
      name: "Charlie",
      info: "A weeb who loves to make and break code",
    },
    {
      image: "https://i.imgur.com/lpzd5i7.png",
      name: "Cherry",
      info: "A passionate CTF player specializing in web exploitation and penetration testing.",
    },
    {
      image: "https://i.imgur.com/cqfNszN.jpeg",
      name: "MajorSyncedBeaver",
      info: "RE,Pwning,bikes and crypto with a side of Pina Colada",
    },
    {
      image:
        "https://i.imgur.com/ZL9XN0R.jpeg",
      name: "haru",
      info: "turning my skill issue into victories, one CTF at a time :3",
    },
  ];

  return (
    <div className="w-full py-20 bg-zinc-900">
      <div className="w-full px-20 border-b-[1px] border-zinc-700 pb-20 flex items-center justify-center ">
        <h1 className='text-7xl font-["Neue Montreal"] tracking-tight font-semibold'>
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
