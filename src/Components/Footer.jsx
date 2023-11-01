import React from "react";
import { AiOutlineFacebook, AiOutlineMail } from "react-icons/ai";
import { BiLocationPlus } from "react-icons/bi";
import { BsPhone } from "react-icons/bs";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="bg-[whitesmoke] py-16 border-t border-gray-400/60">
      <div className="max-w-7xl mx-auto flex justify-between">
        <div>
          <h1 className="text-3xl font-secondary font-bold">LOGO</h1>
        </div>
        <div className="space-y-2">
          <h3 className="font-secondary text-2xl font-medium mb-4">Office</h3>
          <p className="flex items-center gap-3 text-sm font-primary">
            <span>
              <BsPhone size={18} />
            </span>
            +880183787
          </p>
          <p className="flex items-center gap-3 text-sm font-primary">
            <span>
              <AiOutlineMail size={18} />
            </span>
            test@test.com
          </p>
          <p className="flex  gap-3 text-sm font-primary">
            <span>
              <BiLocationPlus size={18} />
            </span>
            2231 REDBUD DRIVE <br /> WHITESTONE, NY 11357
          </p>
        </div>
        <div className="space-y-2">
          <h3 className="font-secondary text-2xl font-medium mb-4">
            Quick Links
          </h3>
          <p className="text-sm font-primary hover:underline">
            <Link to={"/"}>Home</Link>
          </p>
          <p className="text-sm font-primary hover:underline">
            <Link to={"/about"}>About</Link>
          </p>
          <p className="text-sm font-primary hover:underline">
            <Link to={"/contact-us"}>Contact Us</Link>
          </p>
        </div>
        <div>
          <h3 className="font-secondary text-2xl font-medium mb-4">
            Social Links
          </h3>
          <div className="space-x-2 flex text-xl">
            <span className="border p-2 border-gray-500 rounded-full">
              <AiOutlineFacebook />
            </span>
            <span className="border p-2 border-gray-500 rounded-full">
              <AiOutlineFacebook />
            </span>
            <span className="border p-2 border-gray-500 rounded-full">
              <AiOutlineFacebook />
            </span>
            <span className="border p-2 border-gray-500 rounded-full">
              <AiOutlineFacebook />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
