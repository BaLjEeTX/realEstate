import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBuilding } from '@fortawesome/free-regular-svg-icons'

const Navbar = () => {
  const Links = [
    { name: 'Home', link: '#' },
    { name: 'Blog', link: '#' },
  ]

  return (
    <nav className="py-5 flex justify-between items-center text-lg">
      <div className="flex items-center text-darker font-bold text-xl">
        
        <span className="pl-2">RealTor</span>
      </div>
      <ul className="flex items-center space-x-5 text-base text-gray-400">
        {Links.map((link, index) => (
          <li key={index}>
            <a href={link.link} className="hover:text-white">{link.name}</a>
          </li>
        ))}
        <button className="bg-gray-500 text- px-4 py-2 rounded-md hover:bg-opacity-90">
          Contact Us
        </button>
      </ul>
    </nav>
  )
}

export default Navbar