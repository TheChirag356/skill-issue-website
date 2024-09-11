import React from "react";
import { Mail, Twitter, Github, Linkedin } from "lucide-react";

function Footer() {
  return (
    <footer className="w-full px-4 md:pt-10 py-8 font-mono bg-[#191919] text-white">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        {/* Footer Text */}
        <div className="w-full md:w-1/2 text-center md:text-left mb-4 md:mb-0">
          <p className="text-sm opacity-80">
            © Team skill_issue 2024. All rights reserved
          </p>
        </div>

        {/* Social and External Links */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-end gap-4 flex-wrap">
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
          <a href="mailto:skillissue.ctfteam@gmail.com" aria-label="Email">
            <Mail color="#ffffff" />
          </a>
          {/* <a href="" aria-label="Twitter">
            <Twitter color="#ffffff" />
          </a> */}
          <a href="https://github.com/team-skillissue" aria-label="Github">
            <Github color="#ffffff" />
          </a>
          <a
            href="https://www.linkedin.com/company/skillissue/mycompany/"
            aria-label="LinkedIn"
          >
            <Linkedin color="#ffffff" strokeWidth={1} />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
