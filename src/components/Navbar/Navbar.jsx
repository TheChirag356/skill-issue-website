import React from 'react'
import CircumIcon from '@klarr-agency/circum-icons-react'
import {Link, NavLink} from 'react-router-dom'

function Navbar() {
  return (
    <div className="fixed z-[999] w-full px-20 py-8 font-['Neue Montreal'] flex justify-between items-center">
        <CircumIcon name="flag_1"/>
        <div className='links flex gap-10'>
            {["About", 'Achievements', 'Blog', 'Contact'].map((item, index) => (
                <a key={index} href="#" className={`text-md capitalize font-regular ${index === 3 && "ml-32"} `}>{item}</a>
            ))}
        </div>
    </div>
  )
}

export default Navbar