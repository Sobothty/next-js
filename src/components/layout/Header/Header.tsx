"use client";
import React from "react";
import { navbarItems } from "./menu";
import Link from "next/link";

const Header = () => {
  return (
    <div className="bg-white dark:bg-gray-800 shadow-md p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
          My Website
        </h1>
        <nav>
          <ul className="flex space-x-4">
            {navbarItems.map((item) => (
              <li key={item.id}>
                <Link
                  href={item.path}
                  className={`${
                    item.active === true ? "text-blue-950 font-bold" : ""
                  }text-gray-700 dark:text-gray-300 hover:text-blue-500`}
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="flex items-center space-x-4">
          <a
            href="/login"
            className="text-gray-700 dark:text-gray-300 hover:text-blue-500"
          >
            Login
          </a>
          <a
            href="/signup"
            className="text-gray-700 dark:text-gray-300 hover:text-blue-500"
          >
            Sign Up
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
