import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillTelephoneFill } from "react-icons/bs";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="flex items-center p-5 px-8 font-secondary text-white">
      <div>
        <h1>LOGO</h1>
      </div>
      <div className="flex items-center ml-16 flex-grow">
        <div className="space-x-4 font-medium">
          <button className="hover:underline">
            <Link to={"/"}>HOME</Link>
          </button>
          <button className="hover:underline">
            <Link to={'/about'}>ABOUT</Link>
          </button>
          <button className="hover:underline">
            <Link to={'/contact-us'}>CONTACT US</Link>
          </button>
        </div>
        <div className="flex items-center ml-auto space-x-6 tracking-wider">
          <div className="flex items-center">
            <span className="border-2 p-2 rounded-full mr-2 text-lg">
              <BsFillTelephoneFill />
            </span>
            <span className="font-medium">018143588</span>
          </div>
          <div className="flex items-center">
            <span className="border-2 p-2 rounded-full mr-2 text-lg">
              <AiOutlineMail />
            </span>
            <span className="font-medium">test@test.com</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
