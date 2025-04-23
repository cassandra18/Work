import React from "react";
import { Link } from "react-router-dom";
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
    const [aboutDropdownOpen, setAboutDropdownOpen] = useState(false);
    const [admissionDropdownOpen, setAdmissionDropdownOpen] = useState(false);

    const toggleMenu = () => setMenuOpen(!menuOpen);
    const toggleAboutDropdown = () => setAboutDropdownOpen(!aboutDropdownOpen);
    const toggleAdmissionDropdown = () => setAdmissionDropdownOpen(!admissionDropdownOpen)

  return (
    <div className="poppins-regular">
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

        {/*Contacts  */}
        <div>
          <ul className="flex flex-row md:flex-col justify-evenly ">
            <li className="flex items-center md:text-lg ">
              <FaPhoneAlt className="mr-2" />
              0113120575
            </li>
            <li className="flex items-center md:text-lg">
              <IoIosMail className="mr-2 text-2xl" />
              info@cbckericho.jn.ke
            </li>
          </ul>
        </div>
      </div>
      
      {/* Lower navbar */}
      <div className="border-b-6 border-b-[rgba(19,63,19,0.5)] flex items-center justify-between md:justify-evenly">
       {/* Logo */}
       <Link to='/'>
        <div className="flex items-center">
           
            <img src="/images/school-logo.png" alt='school-logo' className="w-24 md:w-28 h-auto" loading="lazy"/>
            <h1 className="text-xl md:text-2xl font-bold text-[#0C834E]">C.B.C KERICHO</h1>
        
        </div>
        </Link>
        {/* Navlinks*/}
        <nav>
            {/* Desktop menu */}
            <div className="hidden md:flex space-x-6 font-semibold text-lg">
                <NavLink to="/" className={({ isActive}) =>
                    `text-[#0C834E] hover:text-black ${isActive? "underline underline-offset-6 decoration-2 decoration-[#0C834E] text-black " : " "}`}>
                    Home
                </NavLink>


                {/* About Us with Dropdown */}
                <div className="relative"
                onMouseEnter={() => setAboutDropdownOpen(true)}
                onMouseLeave={() => setAboutDropdownOpen(false)}>
                    <button
                    onClick={toggleAboutDropdown}
                        className="text-[#0C834E] whitespace-nowrap hover:text-black focus:outline-none">
                        About Us {aboutDropdownOpen ? "▲" : "▼"}
                    </button>

                    {aboutDropdownOpen && (
                        <div className="absolute left-1/2 translate-x-[-50%] w-[600px] bg-white shadow-lg rounded-lg py-2 z-50"
                            
                        >
                          <div className="flex justify-between px-3 py-2">
                            <div>
                              <p className="text-black border-b border-[rgba(0,0,0,0.3)] mb-2">About CBC Kericho</p>
                            <NavLink to="/about/profile" className="block py-2 hover:bg-gray-100 text-[#0C834E] hover:text-black text-base poppins-regular">Our Profile</NavLink>
                            <NavLink to="/about/history" className="block  py-2 hover:bg-gray-100 text-[#0C834E] hover:text-black text-base poppins-regular">Our History</NavLink>
                            <NavLink to="/about/vision" className="block  py-2 hover:bg-gray-100 text-[#0C834E] hover:text-black text-base poppins-regular">Vision, Mission & Values</NavLink>
                            <NavLink to="/about/administration" className="block  py-2 hover:bg-gray-100 text-[#0C834E] hover:text-black text-base poppins-regular">School Administration</NavLink>
                            <NavLink to="/about/policies" className="block  py-2 hover:bg-gray-100 text-[#0C834E] hover:text-black text-base poppins-regular">School Policies</NavLink>
                            </div>

                            <div>
                            <p className="text-black border-b border-[rgba(0,0,0,0.3)] mb-2">Information Desk</p>
                            <NavLink to="/about/news" className="block  py-2 hover:bg-gray-100 text-[#0C834E] hover:text-black text-base poppins-regular">News</NavLink>
                            <NavLink to="/about/events" className="block  py-2 hover:bg-gray-100 text-[#0C834E] hover:text-black text-base poppins-regular">Events</NavLink>
                            <NavLink to="/about/games" className="block  py-2 hover:bg-gray-100 text-[#0C834E] hover:text-black text-base poppins-regular">Games and Sports</NavLink>
                            <NavLink to="/about/clubs" className="block  py-2 hover:bg-gray-100 text-[#0C834E] hover:text-black text-base poppins-regular">Clubs and Societies</NavLink>
                            <NavLink to="/about/facilities" className="block  py-2 hover:bg-gray-100 text-[#0C834E] hover:text-black text-base poppins-regular">Facilities and Amenities</NavLink>
                            
                            </div>

                            <div>
                            <p className="text-black border-b border-[rgba(0,0,0,0.3)] mb-2">More</p>
                            <NavLink to="/about/results" className="block py-2 hover:bg-gray-100 text-[#0C834E] hover:text-black text-base poppins-regular">KCPE Results</NavLink>
                            <NavLink to="/about/departments" className="block  py-2 hover:bg-gray-100 text-[#0C834E] hover:text-black text-base poppins-regular">Departments</NavLink>
                            
                            </div>
                            </div>
                            
                        </div>
                    )}
                </div>

                    {/* Desktop Admission with Dropdown */}
                    <div className="relative"
                      onMouseEnter={() => setAdmissionDropdownOpen(true)}
                      onMouseLeave={() => setAdmissionDropdownOpen(false)}>
                    <button onClick={toggleAdmissionDropdown} className="flex items-center justify-between text-[#0C834E] hover:text-black w-full">
                        Admission {admissionDropdownOpen ? "▲" : "▼"}
                    </button>

                    {admissionDropdownOpen && (
                        <div className=" absolute w-[200px] bg-white shadow-lg rounded-lg py-2 z-50 "
                            
                        >
                          <div className="flex flex-col justify-between px-2">
                            <div>
                            <NavLink to="/admission/overview" className="block py-2 px-1 hover:bg-gray-100 text-[#0C834E] hover:text-black text-base  poppins-regular">Overview</NavLink>
                            <NavLink to="/admission/criteria" className="block  py-2 px-1 hover:bg-gray-100 text-[#0C834E] hover:text-black text-base poppins-regular">Admission Criteria</NavLink>
                            <NavLink to="/admission/term-dates" className="block  py-2 hover:bg-gray-100 text-[#0C834E] hover:text-black text-base poppins-regular">Term dates & Fees</NavLink>
                            <NavLink to="/admission/apply" className="block  py-2 px-1 hover:bg-gray-100 text-[#0C834E] hover:text-black text-base poppins-regular">How To Apply</NavLink>
                            </div>
                            </div>
                        </div>
                    )}
                    </div>
                <NavLink to="/gallery" className={({ isActive}) =>
                    `text-[#0C834E] hover:text-black ${isActive? "underline underline-offset-6 decoration-2 decoration-[#0C834E] text-black " : " "}`}>
                    Gallery
                </NavLink>
                <NavLink to="/contact" className={({ isActive}) =>
                    `text-[#0C834E] whitespace-nowrap mr-1 hover:text-black ${isActive? "underline underline-offset-6 decoration-2 decoration-[#0C834E] text-black " : " "}`}>
                    Contact Us
                </NavLink>
            </div>

            {/* Mobile menu button */}
            <button onClick={ toggleMenu } className="md:hidden">
                { menuOpen ? <GrFormClose className="text-3xl font-semibold text-[#0C834E] mr-4"/> : <RiMenuFill className="text-3xl font-semibold text-[#0C834E] mr-4"/> }
            </button>
        
             {/* Mobile Menu (Slide-in Sidebar) */}
            <div className={`fixed top-0 right-0 h-full w-3/4 bg-white/30 backdrop-blur-lg shadow-lg p-6 transform ${menuOpen ? "translate-x-0" : "translate-x-full"} transition-transform duration-300 ease-in-out z-50 overflow-y-scroll`}>
                <button onClick={toggleMenu} className="absolute top-4 right-4 text-3xl text-[#0C834E]">
                <GrFormClose />
                </button>

                <nav className="flex flex-col space-y-6 mt-12 text-l font-semibold">
                <NavLink to="/" onClick={toggleMenu} className="text-[#0C834E] hover:text-black">Home</NavLink>
                    
                    {/* Mobile About Us with Dropdown */}
                    <button onClick={toggleAboutDropdown} className="flex items-center justify-between text-[#0C834E] hover:text-black w-full">
                        About Us {aboutDropdownOpen ? "▲" : "▼"}
                    </button>
                    
                    {aboutDropdownOpen && (
                        <div className="ml-4 space-y-2"
                            
                        >
                          <div className="flex flex-col justify-between">
                            <div>
                              <p className="text-black border-b border-[rgba(0,0,0,0.3)] mb-2">About CBC Kericho</p>
                            <NavLink to="/about/profile" onClick={toggleMenu} className="block py-2 hover:bg-gray-100 text-[#0C834E] hover:text-black text-sm poppins-regular">Our Profile</NavLink>
                            <NavLink to="/about/history" onClick={toggleMenu} className="block  py-2 hover:bg-gray-100 text-[#0C834E] hover:text-black text-sm poppins-regular">Our History</NavLink>
                            <NavLink to="/about/vision" onClick={toggleMenu} className="block  py-2 hover:bg-gray-100 text-[#0C834E] hover:text-black text-sm poppins-regular">Vision, Mission & Values</NavLink>
                            <NavLink to="/about/administration" onClick={toggleMenu} className="block  py-2 hover:bg-gray-100 text-[#0C834E] hover:text-black text-sm poppins-regular">School Administration</NavLink>
                            <NavLink to="/about/policies" onClick={toggleMenu} className="block  py-2 hover:bg-gray-100 text-[#0C834E] hover:text-black text-sm poppins-regular ">School Policies</NavLink>
                            </div>

                            <div>
                            <p className="text-black border-b border-[rgba(0,0,0,0.3)] mb-2">Information Desk</p>
                            <NavLink to="/about/news" onClick={toggleMenu} className="block  py-2 hover:bg-gray-100 text-[#0C834E] hover:text-black text-sm poppins-regular">News</NavLink>
                            <NavLink to="/about/events" onClick={toggleMenu} className="block  py-2 hover:bg-gray-100 text-[#0C834E] hover:text-black text-sm poppins-regular">Events</NavLink>
                            <NavLink to="/about/games" onClick={toggleMenu} className="block  py-2 hover:bg-gray-100 text-[#0C834E] hover:text-black text-sm poppins-regular">Games and Sports</NavLink>
                            <NavLink to="/about/clubs" onClick={toggleMenu} className="block  py-2 hover:bg-gray-100 text-[#0C834E] hover:text-black text-sm poppins-regular">Clubs and Societies</NavLink>
                            <NavLink to="/about/facilities" onClick={toggleMenu} className="block  py-2 hover:bg-gray-100 text-[#0C834E] hover:text-black text-sm poppins-regular">Facilities and Amenities</NavLink>
                            
                            </div>

                            <div>
                            <p className="text-black border-b border-[rgba(0,0,0,0.3)] mb-2">More</p>
                            <NavLink to="/about/results" onClick={toggleMenu} className="block py-2 hover:bg-gray-100 text-[#0C834E] hover:text-black text-sm poppins-regular">KCPE Results</NavLink>
                            <NavLink to="/about/departments" onClick={toggleMenu} className="block  py-2 hover:bg-gray-100 text-[#0C834E] hover:text-black text-sm poppins-regular">Departments</NavLink>
                            
                            </div>
                            </div>
                            
                        </div>
                    )}

                
                    {/* Mobile Admission with Dropdown */}
                    <button onClick={toggleAdmissionDropdown} className="flex items-center justify-between text-[#0C834E] hover:text-black w-full">
                        Admission {admissionDropdownOpen ? "▲" : "▼"}
                    </button>

                    {admissionDropdownOpen && (
                        <div className="ml-4 space-y-2"
                            
                        >
                          <div className="flex flex-col justify-between">
                            <div>
                            <NavLink to="/admission/overview" onClick={toggleMenu} className="block py-2 hover:bg-gray-100 text-[#0C834E] hover:text-black text-sm poppins-regular">Overview</NavLink>
                            <NavLink to="/admission/criteria" onClick={toggleMenu} className="block  py-2 hover:bg-gray-100 text-[#0C834E] hover:text-black text-sm poppins-regular">Admission Criteria</NavLink>
                            <NavLink to="/admission/term-dates" onClick={toggleMenu} className="block  py-2 hover:bg-gray-100 text-[#0C834E] hover:text-black text-sm poppins-regular">Term dates & Fees</NavLink>
                            <NavLink to="/admission/apply" onClick={toggleMenu} className="block  py-2 hover:bg-gray-100 text-[#0C834E] hover:text-black text-sm poppins-regular">How To Apply</NavLink>
                            </div>
                            </div>
                        </div>
                    )}
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
