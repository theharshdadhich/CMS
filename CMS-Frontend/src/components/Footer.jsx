import React from "react";
import { Link } from "react-router-dom";
import { FaLocationArrow, FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  const hours = [
    {
      id: 1,
      day: "Monday",
      time: "9:00 AM - 11:00 PM",
    },
    {
      id: 2,
      day: "Tuesday",
      time: "12:00 PM - 12:00 AM",
    },
    {
      id: 3,
      day: "Wednesday",
      time: "10:00 AM - 10:00 PM",
    },
    {
      id: 4,
      day: "Thursday",
      time: "9:00 AM - 9:00 PM",
    },
    {
      id: 5,
      day: "Monday",
      time: "3:00 PM - 9:00 PM",
    },
    {
      id: 6,
      day: "Saturday",
      time: "9:00 AM - 3:00 PM",
    },
  ];

  return (
    <footer className="pb-2 bg-gray-900">
      <div className="max-w-8xl mx-auto divide-y divide-gray-200 px-4 sm:px-6 md:px-8">
        <ul className="pt-4 text-sm font-medium sm:pb-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-[1fr_1fr_2fr_1fr] gap-y-10">
          <li className="space-y-5 row-span-2">
            <img
              src="\dadhich.png"
              alt="logo"
              className="h-[300px]"
            />
          </li>
          <li className="space-y-5 row-span-1">
            <h2 className="text-xl tracking-wide text-gray-200 uppercase font-bold">
              Quick Links
            </h2>
            <ul className="space-y-4">
              <li>
                <Link
                  className="hover:text-gray-500 transition-colors duration-200 text-2xl"
                  to="/"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  className="hover:text-gray-500 transition-colors duration-200 text-2xl"
                  to="/appointment"
                >
                  Appointment
                </Link>
              </li>
              <li>
                <Link
                  className="hover:text-gray-500 transition-colors duration-200 text-2xl"
                  to="/about"
                >
                  About
                </Link>
              </li>
            </ul>
          </li>
          <li className="space-y-7 row-span-2 mr-[200px]">
            <h2 className="text-xl tracking-wide text-gray-200 text-center uppercase font-bold">
              Hours
            </h2>
            <ul className="space-y-8 ">
              {hours.map((element) => (
                <li key={element.id} className="flex justify-between">
                  <span className="overflow-hidden mr-2">{element.day}</span>
                  <span className="overflow-hidden ml-2">{element.time}</span>
                </li>
              ))}
            </ul>
          </li>
          <li className="space-y-5">
            <h2 className="text-xl tracking-wide text-gray-200 uppercase font-bold">
              Contact
            </h2>
            <ul className="space-y-4">
              <li className="flex items-center">
                <FaPhone className="mr-2" />
                <span className="overflow-hidden">+91 888-888-8888</span>
              </li>
              <li className="flex items-center">
                <MdEmail className="mr-2" />
                <span className="overflow-hidden">
                  dadhich.care.center@yahoo.com
                </span>
              </li>
              <li className="flex items-center">
                <FaLocationArrow className="mr-2" />
                <span className="overflow-hidden">Jaipur, India</span>
              </li>
            </ul>
          </li>
        </ul>
        <div className="flex flex-col-reverse justify-between border-t lg:flex-row border-gray-200">
          <ul className="flex flex-col space-y-2 lg:mb-0 sm:space-y-0 sm:space-x-5 sm:flex-row">
            <li>
              <a
                href="/"
                className="text-md text-gray-700 transition-colors duration-300 hover:text-gray-900 font-semibold"
              >
                Terms of Service
              </a>
            </li>
            <li>
              <a
                href="/"
                className="text-md text-gray-700 transition-colors duration-300 hover:text-gray-900 font-semibold"
              >
                Privacy Policy
              </a>
            </li>
            <li>
              <a
                href="/"
                className="text-md text-gray-700 transition-colors duration-300 hover:text-gray-900 font-semibold"
              >
                Disclaimer
              </a>
            </li>
          </ul>
          <ul className="flex flex-col mb-3 space-y-2 lg:mb-0 sm:space-y-0 sm:space-x-5 sm:flex-row">
            <li>
              <a
                href="/"
                className="text-md text-gray-700 transition-colors duration-300 hover:text-gray-900 font-semibold tracking-tight"
              >
                © Copyright 2024. Dadhich Hospitals Group. All Rights Reserved.
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
