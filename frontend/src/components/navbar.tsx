import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaPhoneAlt,
} from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { IoIosMail } from "react-icons/io";
import { RiMenuFill} from "react-icons/ri";
import { GrFormClose } from "react-icons/gr";
import { NavLink } from "react-router-dom";
import { useState } from "react";

const Navbar: React.FC = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <div>
      <div className="bg-[#0C834E] flex flex-col space-y-4 md:flex-row md:justify-evenly py-4 text-white">
        <div className="flex items-center justify-center text-sm md:text-xl">
          <ul className="flex flex-row space-x-4">
            <li>
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-800"
              >
                <FaFacebookF />
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-pink-800"
              >
                <FaInstagram />
              </a>
            </li>
            <li>
              <a
                href="https://twitter.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-sky-800"
              >
                <BsTwitterX />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-900"
              >
                <FaLinkedinIn />
              </a>
            </li>
          </ul>
        </div>

        <div>
          <ul className="flex flex-row md:flex-col justify-evenly ">
            <li className="flex items-center md:text-lg">
              <FaPhoneAlt className="mr-2" />
              0113120575
            </li>
            <li className="flex items-center md:text-lg">
              <IoIosMail className="mr-2" />
              info@cbckericho.jn.ke
            </li>
          </ul>
        </div>
      </div>
      
      {/* Lower navbar */}
      <div className="border-b-6 border-b-[rgba(19,63,19,0.5)] flex items-center justify-between md:justify-evenly">
       {/* Logo */}
        <div className="flex items-center">
            <img src="/images/school-logo.png" alt='school-logo' className="w-24 md:w-36 h-auto"/>
            <h1 className="text-xl md:text-2xl font-bold text-[#0C834E]">C.B.C KERICHO</h1>
        </div>

        {/* Navlinks*/}
        <nav>
            {/* Desktop menu */}
            <div className="hidden md:flex space-x-6 font-semibold text-lg">
                <NavLink to="/" className={({ isActive}) =>
                    `text-[#0C834E] hover:text-black ${isActive? "underline underline-offset-6 decoration-2 decoration-[#0C834E] text-black " : " "}`}>
                    Home
                </NavLink>
                <NavLink to="/about" className={({ isActive}) =>
                    `text-[#0C834E] hover:text-black ${isActive? "underline underline-offset-6 decoration-2 decoration-[#0C834E] text-black " : " "}`}>
                    About Us
                </NavLink>
                <NavLink to="/admission" className={({ isActive}) =>
                   `text-[#0C834E] hover:text-black ${isActive? "underline underline-offset-6 decoration-2 decoration-[#0C834E] text-black " : " "}`}>
                    Admission
                </NavLink>
                <NavLink to="/gallery" className={({ isActive}) =>
                    `text-[#0C834E] hover:text-black ${isActive? "underline underline-offset-6 decoration-2 decoration-[#0C834E] text-black " : " "}`}>
                    Gallery
                </NavLink>
                <NavLink to="/contact" className={({ isActive}) =>
                    `text-[#0C834E] hover:text-black ${isActive? "underline underline-offset-6 decoration-2 decoration-[#0C834E] text-black " : " "}`}>
                    Contact Us
                </NavLink>
            </div>

            {/* Mobile menu button */}
            <button onClick={ toggleMenu } className="md:hidden">
                { menuOpen ? <GrFormClose className="text-3xl font-semibold text-[#0C834E] mr-4"/> : <RiMenuFill className="text-3xl font-semibold text-[#0C834E] mr-4"/> }
            </button>
        
             {/* Mobile Menu (Slide-in Sidebar) */}
            <div className={`fixed top-0 right-0 h-full w-3/4 bg-white/30 backdrop-blur-lg shadow-lg p-6 transform ${menuOpen ? "translate-x-0" : "translate-x-full"} transition-transform duration-300 ease-in-out z-50`}>
                <button onClick={toggleMenu} className="absolute top-4 right-4 text-3xl text-[#0C834E]">
                <GrFormClose />
                </button>

                <nav className="flex flex-col space-y-6 mt-12 text-l font-semibold">
                <NavLink to="/" onClick={toggleMenu} className="text-[#0C834E] hover:text-black">Home</NavLink>
                <NavLink to="/about" onClick={toggleMenu} className="text-[#0C834E] hover:text-black">About Us</NavLink>
                <NavLink to="/admission" onClick={toggleMenu} className="text-[#0C834E] hover:text-black">Admission</NavLink>
                <NavLink to="/gallery" onClick={toggleMenu} className="text-[#0C834E] hover:text-black">Gallery</NavLink>
                <NavLink to="/contact" onClick={toggleMenu} className="text-[#0C834E] hover:text-black">Contact Us</NavLink>
                </nav>
            </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
