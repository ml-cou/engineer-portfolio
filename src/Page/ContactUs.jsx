import React from "react";
import { AiFillClockCircle } from "react-icons/ai";
import { BiLocationPlus } from "react-icons/bi";
import { BsFillChatFill } from "react-icons/bs";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";

function ContactUs() {
  return (
    <div>
      <div className="flex flex-col bg-[url('building.jpg')] relative after:absolute after:top-0 after:w-full after:pointer-events-none after:h-full after:bg-[rgba(0,0,0,0.06)] bg-no-repeat bg-cover min-h-[650px] xl:min-h-[600px] bg-center">
        <Navbar />
        <div className="flex-grow bg-[rgba(0,0,0,0.02)]">
          <div className="max-w-2xl mt-10  mx-auto text-center relative ">
            <h1 className="font-secondary text-6xl mb-4 text-white font-bold">
              Contact Us
            </h1>
          </div>
        </div>
      </div>
      <div className="bg-[whitesmoke] p-10 py-20">
        <div className="max-w-7xl mx-auto">
          <p className="text-xs font-primary font-bold tracking-wider text-gray-700">
            CONTACT DETAILS
          </p>
          <h1 className="text-4xl font-secondary font-bold my-4">
            Company Offices
          </h1>
          <div className="mt-10 grid grid-cols-4 gap-8">
            {[0, 1, 2, 3].map((val) => (
              <div
                key={val}
                className="bg-white shadow rounded p-4 px-8 pb-8 font-primary text-sm font-medium text-gray-800"
              >
                <h3 className="border-b py-2 text-xl font-secondary font-medium mb-2 text-gray-950">
                  Office in Oslo
                </h3>
                <div className="flex gap-4 mt-4 ">
                  <span className="text-3xl">
                    <BiLocationPlus />
                  </span>
                  <p>
                    Holmila Sentar vei 33, <br /> Oslo, Norway
                  </p>
                </div>
                <div className="flex gap-4 mt-4">
                  <span className="text-3xl">
                    <BsFillChatFill />
                  </span>
                  <p>
                    +8810384932 <br />
                    test@test.com
                  </p>
                </div>
                <div className="flex gap-4 mt-4">
                  <span className="text-3xl">
                    <AiFillClockCircle />
                  </span>
                  <p>
                    Monday – Friday <br />6 am to 8 pm EST
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="py-5 pb-20 bg-[whitesmoke]">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-2xl font-secondary text-center font-medium text-gray-800 mb-4">React Out To Us</h1>
          <form className="font-primary grid max-w-[400px] mx-auto space-y-6">
            <input type="text" placeholder="Name" className="bg-transparent border-b border-gray-400 py-3 outline-none" />
            <input type="email" placeholder="Email" className="bg-transparent border-b border-gray-400 py-3 outline-none" />
            <textarea className="bg-transparent border-b border-gray-400 py-3 outline-none" cols="30" rows="4" placeholder="Message"></textarea>
            <button className="bg-gray-800 text-white py-3 font-secondary text-lg rounded-3xl my-2">Submit</button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default ContactUs;
