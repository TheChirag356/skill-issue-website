import { useState } from 'react'

export default function Hero() {

    return (
        <>
            <section className="mt-24 mx-auto max-w-screen-xl pb-4 px-4 items-center lg:flex md:px-8">
                <div className="space-y-4 flex-1 sm:text-center lg:text-left">
                    <h1 className="text-gray-800 font-bold text-4xl xl:text-5xl">
                        This is
                         <span className="text-indigo-600"> Skill_Issue</span>
                    </h1>
                    <p className="text-gray-500 max-w-xl leading-relaxed sm:mx-auto lg:ml-0">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor distinctio quibusdam alias rem quos amet?
                    </p>
                </div>
                <div className="flex-1 text-center mt-4 lg:mt-0 lg:ml-3">
                    <img src="https://cdn.discordapp.com/attachments/1164514364196409377/1264239818288660530/IMG-20240129-WA0006.jpg?ex=669d2695&is=669bd515&hm=2dc6912269138df7539f8174bab4ed80845ad465bd2543c4d8abebc1fa22e3c3&" className="w-full mx-auto sm:w-10/12  lg:w-full" />
                </div>
            </section>
        </>
    )
}