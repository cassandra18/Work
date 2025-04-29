import React from "react";
import { Link } from "react-router-dom";
import { MdMarkunreadMailbox } from "react-icons/md";
import { FaPhoneAlt, FaNewspaper, FaQuestion } from "react-icons/fa";
import { IoIosMail, IoMdClock, IoMdFootball } from "react-icons/io";
import { HiUserGroup } from "react-icons/hi2";
import {
  FaBuildingUser,
  FaSchoolFlag,
  FaRegAddressCard,
} from "react-icons/fa6";
import { MdOutlineAddReaction } from "react-icons/md";
import { GrGallery } from "react-icons/gr";

const Footer: React.FC = () => {
  return (
    <footer
      className="bg-cover bg-center relative text-white poppins-regular"
      style={{ backgroundImage: `url('/images/footer-bg.jpeg')` }}
    >
      {/* Overlay */}
      <div className="bg-green-800 absolute inset-0 opacity-50"></div>

      {/* Content */}
      <div className="flex items-start justify-center lg:justify-start gap-20 px-4 max-w-7xl mx-auto">
        <div className="hidden lg:flex justify-center items-center mb-4">
          <div className="relative">
            <img
              src="/images/school-logo.png"
              alt="Logo"
              className="lg:h-44 lg:w-44 relative"
              loading="lazy"
            />
            <h2 className="xlg:text-2xl md:text-xl poppins-bold absolute bottom-0 left-1/2 -translate-x-1/2 whitespace-nowrap text-[#9dffd3]">
              Light Junior Academy
            </h2>
          </div>
        </div>

        {/* links */}

        <div className="w-full max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 text-center relative my-6">
          {/* Contact info */}
          <div className="flex items-start flex-col ml-2 md:mx-0   text-sm md:text-base">
            <h3 className="text-[#9dffd3] font-bold text-lg mb-3 underline underline-offset-4">
              Contact Information
            </h3>
            <ul className="space-y-2">
              <li className="flex items-center hover:text-[#9dffd3]">
                {" "}
                <MdMarkunreadMailbox className="mr-3 text-xl " /> P.O BOX 12345
              </li>
              <li className="flex items-center hover:text-[#9dffd3]">
                <a href="tel:0113120575" className="flex items-center">
                  <FaPhoneAlt className="mr-3" />
                  0113120575
                </a>
              </li>
              <li className="flex items-center hover:text-[#9dffd3]">
                <a
                  href="mailto:cassandralelei013@gmail.com"
                  className="flex items-center"
                >
                  <IoIosMail className="mr-3" />
                  cassandralelei013@gmail.com
                </a>
              </li>

              <li className="flex items-start hover:text-[#9dffd3] leading-snug break-words text-left">
                <IoMdClock className="mr-3 " /> Open from Mon-Sat 8:00am -
                5:00pm
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="flex items-start flex-col ml-2 md:mx-0 text-sm md:text-base">
            <h3 className="text-[#9dffd3] font-bold text-lg mb-3 underline underline-offset-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/about/news"
                  className="flex items-center hover:text-[#9dffd3]"
                >
                  {" "}
                  <FaNewspaper className="mr-3" />
                  News
                </Link>
              </li>
              <li>
                <Link
                  to="/about/events"
                  className="flex items-center hover:text-[#9dffd3]"
                >
                  <FaNewspaper className="mr-3" />
                  Events
                </Link>
              </li>
              <li>
                <Link
                  to="/about/faq"
                  className="flex items-center hover:text-[#9dffd3]"
                >
                  <FaQuestion className="mr-3" />
                  FAQs
                </Link>
              </li>
              <li>
                <Link
                  to="/about/games"
                  className=" flex items-center hover:text-[#9dffd3]"
                >
                  <IoMdFootball className="mr-3" />
                  Games and Sports
                </Link>
              </li>
              <li>
                <Link
                  to="/about/clubs"
                  className="flex items-center hover:text-[#9dffd3]"
                >
                  <HiUserGroup className="mr-3" />
                  Clubs and Societies
                </Link>
              </li>
              <li>
                <Link
                  to="/about/facilities"
                  className="flex items-center hover:text-[#9dffd3] whitespace-nowrap"
                >
                  <FaBuildingUser className="mr-3" />
                  Facilities and Amenities
                </Link>
              </li>
            </ul>
          </div>

          {/* Information links */}
          <div className="flex items-start flex-col ml-2 md:mx-0  text-sm md:text-base">
            <h3 className="text-[#9dffd3] font-bold text-lg mb-3 underline-offset-4 underline">
              Information For :
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/admission/overview"
                  className="flex items-center hover:text-[#9dffd3]"
                >
                  {" "}
                  <MdOutlineAddReaction className="mr-3" />
                  Admission Overview
                </Link>
              </li>
              <li>
                <Link
                  to="/about/administration"
                  className="flex items-center hover:text-[#9dffd3]"
                >
                  <FaSchoolFlag className="mr-3" />
                  School Administration
                </Link>
              </li>
              <li>
                <Link
                  to="/about/profile"
                  className=" flex items-center hover:text-[#9dffd3]"
                >
                  <FaRegAddressCard className="mr-3" />
                  About Light Junior Academy
                </Link>
              </li>
              <li>
                <Link
                  to="/about/departments"
                  className="flex items-center hover:text-[#9dffd3]"
                >
                  <FaBuildingUser className="mr-3" />
                  Departments
                </Link>
              </li>
              <li>
                <Link
                  to="/gallery"
                  className="flex items-center hover:text-[#9dffd3]"
                >
                  <GrGallery className="mr-3" />
                  Gallery
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="relative flex h-10 text-[7px] md:text-sm mt-auto items-center justify-center border-t space-x-8 border-[#9dffd3] text-[#9dffd3] ">
        <Link to="/privacy-policy" className="hover:text-[#a7c3b6]">
          Privacy Policy
        </Link>
        <p className="hover:text-[#a7c3b6]  ">
          &copy; {new Date().getFullYear()} Light Junior Academy. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
