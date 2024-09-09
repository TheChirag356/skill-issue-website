import React from "react";
import { Github, Twitter, LinkedinOption } from 'grommet-icons';

function Members() {
  const cardsData = [
    {
      image: "https://i.imgur.com/rw6rlh0.jpeg",
      name: "ssdon",
      info: "The one who started it all",
      links: {
        linkedin: "",
        github: "",
        twitter: "",
      },
    },
    {
      image:
        "https://en.gravatar.com/avatar/3079e4e66a9b33712a35e2ecf165b5ad?s=1024",
      name: "Charlie",
      info: "A weeb who loves to make and break code",
      links: {
        linkedin: "",
        github: "",
        twitter: "",
      },
    },
    {
      image: "https://i.imgur.com/lpzd5i7.png",
      name: "Cherry",
      info: "A passionate CTF player specializing in web exploitation and penetration testing.",
      links: {
        linkedin: "",
        github: "",
        twitter: "",
      },
    },
    {
      image: "https://i.imgur.com/cqfNszN.jpeg",
      name: "MajorSyncedBeaver",
      info: "RE,Pwning,bikes and crypto with a side of Pina Colada",
      links: {
        linkedin: "",
        github: "",
        twitter: "",
      },
    },
    {
      image: "https://i.imgur.com/ZL9XN0R.jpeg",
      name: "haru",
      info: "turning my skill issue into victories, one CTF at a time :3",
      links: {
        linkedin: "",
        github: "",
        twitter: "",
      },
    },
    {
      image: "https://i.pinimg.com/736x/69/d1/c0/69d1c07d063d76cfd802110e028ed0e1.jpg",
      name: "moistshrek458",
      info: "i wonder if revolution ever touches the ruined walls of bastille now and understands, it never returned the same.",
      links: {
        linkedin: "",
        github: "",
        twitter: "",
      },
    },
    {
      image:
        "https://i.pinimg.com/originals/2e/4c/7b/2e4c7be1dc0ef9d0f578a9c27877af0a.gif",
      name: "kill_switch",
      info: "fuck it we ball :)",
      links: {
        linkedin: "",
        github: "",
        twitter: "",
      },
    },
  ];

  return (
    <>
      <div className="flex items-center justify-center min-h-screen pt-48">
        <div className="flex flex-col">
          <div className="flex flex-col mt-8">
            <div className="container max-w-7xl px-4">
              <div className="flex flex-wrap justify-center text-center mb-24">
                <div className="w-full px-4">
                  <h1 className="text-white text-8xl font-bold mb-8">
                    Meet the Team
                  </h1>

                  <p className="text-gray-300 text-lg font-light">
                    With over 100 years of combined experience, we've got a
                    well-seasoned team at the helm.
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap">
                {cardsData.map((card, index) => (
                  <div key={index} className="w-full md:w-6/12 lg:w-3/12 mb-6 px-6 sm:px-6 lg:px-4">
                    <div className="flex flex-col">
                      <img
                        className="rounded-2xl drop-shadow-md hover:drop-shadow-xl transition-all duration-200 delay-100"
                        src={card.image}
                        alt={`${card.name}'s profile picture`}
                        loading="lazy"
                      />

                      <div className="text-center mt-6">
                        <h1 className="text-gray-50 text-xl font-bold mb-1">
                          {card.name}
                        </h1>

                        <div className="text-gray-400 font-light mb-2">
                          {card.info}
                        </div>

                        <div
                          className="flex items-center justify-center opacity-50 hover:opacity-100
                                transition-opacity duration-300"
                        >
                          <a
                            href={card.links.github}
                            className="flex rounded-full hover:bg-indigo-50 h-10 w-10 justify-center items-center"
                          >
                            <Github />
                          </a>

                          <a
                            href={card.links.twitter}
                            className="flex rounded-full hover:bg-blue-50 h-10 w-10 items-center justify-center"
                          >
                            <Twitter />
                          </a>

                          <a
                            href={card.links.linkedin}
                            className="flex rounded-full hover:bg-orange-50 h-10 w-10 items-center justify-center"
                          >
                            <LinkedinOption />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Members;
