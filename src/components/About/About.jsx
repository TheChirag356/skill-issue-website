import { ArrowUpRight } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

function About() {
  return (
    <div className="font-hack-mono w-full p-20 pt-32 rounded-tl-3xl rounded-tr-3xl text-white">
      <h1 className="text-[2.5vw] leading-[4vw] tracking-tight">
        A fearless group of cybersecurity enthusiasts diving deep into the world
        of CTFs. With razor-sharp skills and a passion for problem-solving,
        we're always on the hunt for the next challenge, ready to take on any
        digital ocean we encounter. Join us as we sink our teeth into
        vulnerabilities and emerge victorious!
      </h1>
      <div className="w-full flex gap-5 border-t-[1px] pt-10 mt-20 border-white">
        <div className="w-1/2 ">
          <h1 className="text-6xl">Our Blogs: </h1>
          <Link to="/blog">
            <button className="flex uppercase gap-10 items-center px-10 py-5 bg-zinc-900 rounded-full text-white mt-10 ">
              Read More
                <ArrowUpRight />
            </button>
          </Link>
        </div>
        <div className="w-1/2 h-[60vh] shadow-2xl bg-[#b0c859] rounded-3xl"></div>
      </div>
    </div>
  );
}

export default About;
