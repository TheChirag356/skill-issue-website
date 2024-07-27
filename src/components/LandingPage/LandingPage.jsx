import { motion } from "framer-motion";
import React from "react";
import { FaArrowUpLong } from "react-icons/fa6";

function LandingPage() {
  const [countryRank, setCountryRank] = React.useState(null);
  const [globalRank, setGlobalRank] = React.useState(null);
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    const fetchData = async () => {
      const url = "https://ctftime.org/api/v1/teams/271383/";
      try {
        const response = await fetch(url, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            
          },
        });
        if (!response.ok) {
          throw new Error(`Response status: ${response.status}`);
        }

        const data = await response.json();
        setCountryRank(data["rating"]["2024"]["country_place"]);
        setGlobalRank(data["rating"]["2024"]["rating_place"]);
      } catch (error) {
        console.error(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [setCountryRank, setGlobalRank, setIsLoading]);

  return (
    <div data-scroll data-scroll-speed="-.3" className="w-full h-screen bg-stone-300 dark:bg-zinc-900 pt-1">
      <div className="textstructure mt-40 px-20">
        {["We Are", "An Upcoming", "CTF Team"].map((item, index) => {
          return (
            <div className="masker">
              <div className="w-fit flex overflow-hidden">
                {index === 1 && (
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "9vw" }}
                    transition={{ ease: [0.76, 0, 0.24, 1], duration: 1, delay: 1 }}
                    className="mr-[1vw] rounded-md w-[8vw] h-[5.2vw] relative top-[1vw] bg-green-500"
                  ></motion.div>
                )}
                <h1 className="flex items-center uppercase text-[6vw] h-full leading-[6.5vw] font-['Test Founders Grotesk X-Condensed'] font-bold">
                  {item}
                </h1>
              </div>
            </div>
          );
        })}
      </div>
      <div className="border-t-[1px] border-stone-800 dark:border-zinc-800 mt-24 flex justify-between items-center py-5 px-20">
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          <>
            {[`Country Rank: ${countryRank}`, `Global Rank: ${globalRank}`].map(
              (item, index) => (
                <p
                  key={index}
                  className="text-md font-light tracking-tight leading-none"
                >
                  {item}
                </p>
              )
            )}
          </>
        )}
        {/* {[`Country Rank: ${countryRank}`, `Global Rank: ${globalRank}`].map((item, index) => (
          <p className="text-md font-light tracking-tight leading-none">
            {item}
          </p>
        ))} */}
        <div className="ctftime flex items-center gap-3">
          <div className="px-5 py-2 border-[1px] dark:border-zinc-400 rounded-full font-light text-md uppercase">
            On CTFTime
          </div>
          <div className="w-10 h-10 flex items-center justify-center border-[1px] dark:border-zinc-400 rounded-full">
            <span className="rotate-[45deg]">
              <FaArrowUpLong />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
