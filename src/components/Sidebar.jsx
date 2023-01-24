import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { RiCloseLine } from "react-icons/ri";
import { HiOutlineMenu } from "react-icons/hi";

import logoMusic from "../assets/logoMusic.png";
import { links } from "../assets/constants";

const NavLinks = ({ handleClick }) => (
  <div className="mt-2">
    {links.map((link) => (
      <NavLink
        key={link.name}
        onClick={() => handleClick && handleClick()}
        to={link.to}
        className="flex flex-row justify-start items-center my-8 text-sm font-medium text-gray-400 hover:text-cyan-400"
      >
        <link.icon className="w-6 h-6 mr-4" />
        {link.name}
      </NavLink>
    ))}
  </div>
);
const Sidebar = () => {
  const [isMobile, setMobile] = useState(false);

  return (
    <>
      <div className="md:flex hidden flex-col w-[240px] py-10 px-4 bg-[#191624]">
        <div className="flex items-center flex-col">
          <img
            src={logoMusic}
            alt="logo"
            className="w-full h-14 object-contain"
          />
          <p className="text-white mt-4 text-3xl font-bold">Nyanyi</p>
        </div>
        <NavLinks />
      </div>
      <div className="absolute md:hidden block top-6 right-3">
        {isMobile ? (
          <RiCloseLine
            className="w-6 h-6 text-white mr-2"
            onClick={() => setMobile(false)}
          />
        ) : (
          <HiOutlineMenu
            className="w-6 h-6 text-white mr-2"
            onClick={() => setMobile(true)}
          />
        )}
      </div>

      <div
        className={`absolute top-0 h-screen w-2/3 bg-gradient-to-tl from-white/10 to-[#483d8b] backdrop-blur-lg z-10 p-6 md:hidden smooth-transition ${
          isMobile ? "left-0" : "-left-full"
        }`}
      >
        <div className="flex items-center flex-col">
          <img
            src={logoMusic}
            alt="logo"
            className="w-full h-14 object-contain"
          />
          <p className="text-white mt-4 text-3xl font-bold">Nyanyi</p>
        </div>
        <NavLinks handleClick={() => setMobile(false)} />
      </div>
    </>
  );
};

export default Sidebar;
