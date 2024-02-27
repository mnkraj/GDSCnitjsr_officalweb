// Navbar.js

import React, { useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import { Link as AnchorLink } from "react-router-dom";
import LOGO from "../img/GDSC Logo chapter lockup template 1.svg";

function Navbar() {
  let Links = [
    { name: "About Us", link: "about" },
    { name: "Our Team", link: "our-team" },
    { name: "Events", link: "events" },
    { name: "Socials", link: "socials" },
    { name: "Join Us", link: "join-us", url: "https://gdsc.community.dev/national-institute-of-technology-nit-jamshedpur/" },
  ];

  let [open, setOpen] = useState(false);

  const handleLinkClick = () => {
    setOpen(false);
  };

  return (
    <div className="shadow-md w-full relative top-0 left-0 z-[1000000] Navbar">
      <div className="md:flex items-center justify-between bg-white py-4 md:px-10 px-7 z-[10000]">
        <div
          className="font-bold text-2xl cursor-pointer flex items-center font-[Poppins] text-gray-800"
        >
          <img src={LOGO} className="w-[70%] sm:w-auto" alt="Logo" />
        </div>

        <div
          onClick={() => setOpen(!open)}
          className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden"
        >
          <ion-icon name={open ? "close" : "menu"}></ion-icon>
        </div>

        <ul
          className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
            open ? "top-20 " : "top-[-490px]"
          }`}
        >
          {Links.map((link) => (
            <li key={link.name} className="md:ml-8 text-xl md:my-0 my-7">
              {link.url ? (
                <AnchorLink
                  to={link.url}
                  className="text-gray-800 hover:text-gray-400 duration-500 cursor-pointer"
                >
                  {link.name}
                </AnchorLink>
              ) : (
                <ScrollLink
                  to={link.link}
                  spy={true}
                  smooth={true}
                  duration={500}
                  onClick={handleLinkClick}
                  className="text-gray-800 hover:text-gray-400 duration-500 cursor-pointer"
                >
                  {link.name}
                </ScrollLink>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
