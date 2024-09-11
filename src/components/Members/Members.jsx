import React from "react";
import { Github, Twitter, LinkedinOption, Medium } from "grommet-icons";

function Members() {
  const cardsData = [
    {
      image: "https://i.imgur.com/rw6rlh0.jpeg",
      name: "amitrochates",
      info: "The one who started it all",
      links: {},
    },
    {
      image:
        "https://en.gravatar.com/avatar/3079e4e66a9b33712a35e2ecf165b5ad?s=1024",
      name: "Charlie",
      info: "A weeb who loves to make and break code",
      links: {
        linkedin: "https://www.linkedin.com/in/chiragarora0/",
        github: "https://github.com/TheChirag356/",
        twitter: "https://x.com/chiragkun",
        medium: "https://medium.com/@charliebreakscode",
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
        medium: "",
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
        medium: "",
      },
    },
    {
      image: "https://i.imgur.com/ZL9XN0R.jpeg",
      name: "haru",
      info: "turning my skill issue into victories, one CTF at a time :3",
      links: {
        linkedin:
          "https://www.linkedin.com/in/hargun-k-269b82246?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        github: "https://github.com/hargunks",
        twitter: "",
        medium: "https://medium.com/@haru06",
      },
    },
    {
      image:
        "https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExM2poOXh4YTJ5YW5yOWZqbjFhMzlyNWNpZ2xqc212bWtuMHVtbnk1NiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/SgRVbI0eregbqF08tW/giphy.gif",
      name: "moistshrek458",
      info: "i wonder if revolution ever touches the ruined walls of bastille now and understands, it never returned the same.",
      links: {
        linkedin: "https://www.linkedin.com/in/ishwardeep-singh-405a9324a/",
        twitter: "https://x.com/Ishwardeep78937",
        medium: "https://medium.com/@ishwardeep.work",
      },
    },
    {
      image:
        "https://i.pinimg.com/originals/2e/4c/7b/2e4c7be1dc0ef9d0f578a9c27877af0a.gif",
      name: "kill_switch",
      info: "fuck it we ball :)",
      links: {
        linkedin:
          "https://www.linkedin.com/in/brahamdeep-singh-sabharwal-14a914256/",
        github: "https://github.com/Brahamdeep",
        twitter: "https://x.com/Brahamdeep_1",
        medium: "https://medium.com/@brahamdeep9",
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
                  <div
                    key={index}
                    className="w-full md:w-6/12 lg:w-3/12 mb-6 px-6 sm:px-6 lg:px-4"
                  >
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

                          {card.links.linkedin ? (
                            <a
                              href={card.links.linkedin}
                              className="flex rounded-full hover:bg-blue-50 h-10 w-10 items-center justify-center"
                            >
                              <LinkedinOption />
                            </a>
                          ) : null}

                          {card.links.github ? (
                            <a
                              href={card.links.github}
                              className="flex rounded-full hover:bg-indigo-50 h-10 w-10 justify-center items-center"
                            >
                              <Github />
                            </a>
                          ) : null}

                          {card.links.twitter ? (
                            <a
                              href={card.links.twitter}
                              className="flex rounded-full hover:bg-blue-50 h-10 w-10 items-center justify-center"
                            >
                              <Twitter />
                            </a>
                          ) : null}

                          {card.links.medium ? (
                            <a
                              href={card.links.medium}
                              className="flex rounded-full hover:bg-orange-50 h-10 w-10 items-center justify-center"
                            >
                              <Medium />
                            </a>
                          ) : null}
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
