import React from "react";
import Card from "./Card";

function Members() {
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
      image: "https://i.imgur.com/ZL9XN0R.jpeg",
      name: "haru",
      info: "turning my skill issue into victories, one CTF at a time :3",
    },
    {
      image: "https://imgur.com/bQEYyu3",
      name: "moistshrek458",
      info: "I wonder if revolution ever touches the ruined walls of Bastille now & understand, it never returned the same.",
    },
  ];

  //   return (
  //     <div classNameName="w-full pt-36 grid grid-cols-1 divide-y">
  //       <div classNameName="w-full px-20 border-white pb-8 flex items-center justify-center ">
  //         <h1 classNameName="text-7xl font-neuemontreal tracking-tight font-semibold text-white">
  //           Our Team
  //         </h1>
  //       </div>
  //       <div classNameName="px-20 mt-10">
  //         <div classNameName="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-7xl mx-auto pt-10">
  //           {cardsData.map((card, index) => (
  //             <Card
  //               key={index}
  //               image={card.image}
  //               name={card.name}
  //               info={card.info}
  //             />
  //           ))}
  //         </div>
  //       </div>
  //     </div>
  //   );

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
                  <div className="w-full md:w-6/12 lg:w-3/12 mb-6 px-6 sm:px-6 lg:px-4">
                    <div className="flex flex-col">
                      <a href="#" className="mx-auto">
                        <img
                          className="rounded-2xl drop-shadow-md hover:drop-shadow-xl transition-all duration-200 delay-100"
                          src={card.image}
                        />
                      </a>

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
                            href="#"
                            className="flex rounded-full hover:bg-indigo-50 h-10 w-10"
                          >
                            <i className="mdi mdi-linkedin text-indigo-500 mx-auto mt-2"></i>
                          </a>

                          <a
                            href="#"
                            className="flex rounded-full hover:bg-blue-50 h-10 w-10"
                          >
                            <i className="mdi mdi-twitter text-blue-300 mx-auto mt-2"></i>
                          </a>

                          <a
                            href="#"
                            className="flex rounded-full hover:bg-orange-50 h-10 w-10"
                          >
                            <i className="mdi mdi-instagram text-orange-400 mx-auto mt-2"></i>
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
