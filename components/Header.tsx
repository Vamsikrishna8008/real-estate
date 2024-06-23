import React, { useState } from "react";
import Link from "next/link";
import { AlignJustify, X } from "lucide-react";

const Links = [
  { name: "Home", link: "/buyer" },
  { name: "About Us", link: "/buyer/about" },
  { name: "Services", link: "/buyer/services" },
  { name: "Contact Us", link: "/buyer/contact" },
  { name: "Login", link: "/buyer/login" },
  { name: "Chat", link: "/buyer/chat" },
];

const Header = () => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="shadow-md w-full">
      <div className="md:items-center md:flex md:justify-center md:py-3 md:px-4 px-0 py-0 bg-blue-500">
        <div
          onClick={handleClick}
          className="text-3xl cursor-pointer flex justify-end md:hidden px-4 py-3"
        >
          {open ? <X /> : <AlignJustify />}
        </div>
        <ul
          className={`z-50 flex flex-col md:flex-row bg-blue-500 items-center md:pb-0 pb-12 absolute md:static  w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in  ${
            open ? "" : "top-[-380px]"
          }`}
        >
          {Links.map((link) => (
            <li
              key={link.name}
              className="md:ml-8 text-md md:my-0 my-3 relative group"
            >
              <Link
                href={link.link}
                onClick={handleClose}
                className="text-white hover:text-gray-400 duration-500"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Header;
