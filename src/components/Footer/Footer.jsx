import React from "react";
import { Mail, Twitter, Github, Linkedin } from "lucide-react";

function Footer() {
  return (
    <footer className="w-full px-4 md:px-20 py-8 font-mono bg-[#2a323f] text-white">
      <div className="container mx-auto flex flex-wrap justify-between items-center">
        <div className="w-full md:w-1/2 text-center md:text-left mb-4 md:mb-0">
          <p className="text-sm opacity-80">
            © Team skill_issue 2024. All rights reserved
          </p>
        </div>
        <div className="w-full md:w-1/2 flex justify-center md:justify-end gap-3">
          <a
            href="https://ctftime.org/team/271383"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="CTFTime Profile"
          >
            <img
              src="/ctftime.svg"
              alt="CTFTime Profile"
              width={90}
              height={45}
              className="cursor-pointer shadow-lg"
            />
          </a>
          <a href="">
            <Mail color="#ffffff" />
          </a>
          <a href="">
            <Twitter color="#ffffff" />
          </a>
          <a href="https://github.com/team-skillissue">
            <Github color="#ffffff" />
          </a>
          <a href="">
            <Linkedin color="#ffffff" strokeWidth={1} />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
