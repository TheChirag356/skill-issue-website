import React from "react";
import { ArrowUpRight } from "lucide-react";
import styled from "styled-components";

function Home({ darkMode = false }) {
  const [countryRank, setCountryRank] = React.useState(null);
  const [globalRank, setGlobalRank] = React.useState(null);
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    const fetchData = async () => {
      const url = "/api/v1/teams/271383/";
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
        console.log(`Country: ${data["rating"]["2024"]["country_place"]}`);
        console.log(`Global: ${data["rating"]["2024"]["rating_place"]}`);
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
  // 42,50, 63
  const AnimatedButton = styled.div`
  
    --bg-color: ${(props) => (props.darkMode ? "white" : "#2a323f")};
    --text-color: ${(props) =>
      props.darkMode ? "rgba(0, 0, 0, 0.73)" : "rgba(255, 255, 255, 0.87)"};
    --border-color: ${(props) =>
      props.darkMode ? "rgba(0, 0, 0, 0.24)" : "rgba(255, 255, 255, 0.24)"};
    --hover-bg: ${(props) => (props.darkMode ? "#2a323f" : "white")};
    --hover-text: ${(props) => (props.darkMode ? "white" : "#2a323f")};

    padding: 10px 20px;
    border: 1px solid var(--border-color);
    border-radius: 50px;
    font-weight: 500;
    color: var(--text-color);
    background-color: var(--bg-color);
    transition: all ease 0.4s;
    position: relative;
    font-size: 18px;
    overflow: hidden;
    cursor: pointer;

    &::after {
      content: "";
      position: absolute;
      height: 100%;
      width: 100%;
      background-color: var(--hover-bg);
      left: 0;
      bottom: -100%;
      border-radius: 50%;
      transition: all ease 0.4s;
    }

    &:hover::after {
      bottom: 0;
      border-radius: 0;
    }

    a {
      color: var(--text-color);
      text-decoration: none;
      position: relative;
      z-index: 9;
    }

    &:hover a {
      color: var(--hover-text);
      font-weight: 500;
    }
  `;

  return (
    // <div data-scroll data-scroll-speed="-.3" className="w-full pt-1">
    <div className="w-full pt-1">
      <div className="textstructure mt-40 px-20 text-white font-neuemontreal">
        {["We Are", "An Upcoming", "CTF Team"].map((item, index) => {
          return (
            <div className="masker">
              <div className="w-fit flex overflow-hidden">
                {/* {index === 1 && (
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "9vw" }}
                    transition={{
                      ease: [0.76, 0, 0.24, 1],
                      duration: 1,
                      delay: 1,
                    }}
                    className="mr-[1vw] rounded-md w-[8vw] h-[5.2vw] relative top-[1vw] bg-green-500"
                  ></motion.div>
                )} */}
                <h1 className="flex items-center uppercase text-[6vw] h-full leading-[6.5vw] font-hack font-bold ">
                  {item}
                </h1>
              </div>
            </div>
          );
        })}
      </div>
      <div className="border-t-[1px] border-stone-800 dark:border-zinc-800 mt-24 flex justify-between items-center py-5 px-20 text-white">
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
        <div
          className={`ctftime flex items-center gap-3 ${
            darkMode ? "dark" : ""
          }`}
        >
          <AnimatedButton darkMode={darkMode}>
            <a href="https://ctftime.org/team/271383">On CTFTime</a>
          </AnimatedButton>
          <div className="w-10 h-10 flex items-center justify-center border-[1px] dark:border-zinc-400 rounded-full">
            <ArrowUpRight color="#ffffff" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
