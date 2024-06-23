"use client";

import {
  ChevronsRight,
  Facebook,
  Instagram,
  Linkedin,
  MailOpen,
  MapPin,
  Phone,
  Twitter,
  Youtube,
} from "lucide-react";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-6 px-6   ">
      <div className="flex flex-row justify-around flex-wrap gap-5">
        <div className="mb-4 md:mb-0 max-w-60">
          <img src="/house.jpg" alt="logo" className="w-2/3 h-20" />
          <h2 className="text-2xl font-bold">Company Name</h2>
          <p className="text-sm">123 Street, City, Country</p>
          <p className="text-sm">info@example.com</p>
          <p className="text-sm">123-456-7890</p>
          <div className="flex gap-2 mt-2">
            <div className="bg-slate-600 p-2 flex  just-center items-center rounded">
              <Link href={"#"}>
                <Facebook className="text-primary-foreground" />
              </Link>
            </div>
            <div className="bg-slate-600 p-2 flex  just-center items-center rounded">
              <Link href={"#"} className="text-white ">
                <Twitter className="text-primary-foreground" />
              </Link>
            </div>
            <div className="bg-slate-600 p-2 flex  just-center items-center rounded">
              <Link href={"#"}>
                <Youtube className="text-primary-foreground" />
              </Link>
            </div>
            <div className="bg-slate-600 p-2 flex  just-center items-center rounded">
              <Link href={"#"}>
                <Linkedin className="text-primary-foreground" />
              </Link>
            </div>
            <div className="bg-slate-600 p-2 flex  just-center items-center rounded">
              <Link href={"#"}>
                <Instagram className="text-primary-foreground" />
              </Link>
            </div>
          </div>
        </div>
        <div>
          <h1>Explore</h1>
          <Link
            href={"/#"}
            className="flex items-center gap-3 mt-3 hover:text-sky-600"
          >
            <ChevronsRight />
            <p>About Us</p>
          </Link>
          <Link
            href={"/#"}
            className="flex items-center gap-3 mt-3 hover:text-sky-600"
          >
            <ChevronsRight />
            <p>Services</p>
          </Link>
          <Link
            href={"/#"}
            className="flex items-center gap-3 mt-3 hover:text-sky-600"
          >
            <ChevronsRight />
            <p>Properties</p>
          </Link>
          <Link
            href={"/#"}
            className="flex items-center gap-3 mt-3 hover:text-sky-600"
          >
            <ChevronsRight />
            <p>Contact Us</p>
          </Link>
        </div>

        <div className=" max-w-60">
          <h1 className="">Contact Info</h1>
          <div className="flex items-center gap-3 mt-3">
            <MapPin />
            <p>275 Quadra Street Victoria Road, New York</p>
          </div>
          <div className="flex items-center gap-3 mt-3">
            <Phone />
            <p>+91 11 6931 3749, +91-87-87-2171-37</p>
          </div>

          <div className="flex items-center gap-3 mt-3">
            <MailOpen />
            <p>hiiej@hotmail.com</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
