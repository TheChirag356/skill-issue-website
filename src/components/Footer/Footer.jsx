import React from "react";

function Footer() {
  return (
    <div className="flex gap-5 w-full h-screen bg-zinc-900 p-20 font-['Montserrat 900'] ">
      <div className="w-1/2 h-full flex flex-col justify-between">
        <div className="heading">
          <h1 className="text-[8vw] tracking-tight font-semibold uppercase leading-none -mb-5">
            Eye
          </h1>
          <h1 className="text-[8vw] tracking-tight font-semibold uppercase leading-none -mb-5">
            Opening
          </h1>
        </div>
        <h3>skill_issue</h3>
      </div>
      <div className="w-1/2">
      <h1 className="text-[5vw] tracking-tight font-semibold uppercase leading-none -mb-5">
            Presentations
            <div className="dets font-['Neue Montreal'] mt-10">
                <a className="block text-xl font-regular" href="#">Linkedin</a>
                <a className="block text-xl font-regular" href="#">Twitter</a>
                <a className="block text-xl font-regular" href="#">CTFTime</a>
            </div>
          </h1>
      </div>
    </div>
  );
}

export default Footer;
