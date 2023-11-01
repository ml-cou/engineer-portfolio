import React from "react";
import { BsShield } from "react-icons/bs";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";

function AboutUs() {
  return (
    <div>
      <div className="flex flex-col bg-[url('building.jpg')] relative after:absolute after:top-0 after:w-full after:pointer-events-none after:h-full after:bg-[rgba(0,0,0,0.06)] bg-no-repeat bg-cover min-h-[650px] xl:min-h-[600px] bg-center">
        <Navbar />
        <div className="flex-grow bg-[rgba(0,0,0,0.02)]">
          <div className="max-w-2xl mt-10  mx-auto text-center relative ">
            <h1 className="font-secondary text-6xl mb-4 text-white font-bold">
              About Us
            </h1>
          </div>
        </div>
      </div>
      <div className="bg-[whitesmoke] py-20">
        <div className="max-w-7xl mx-auto flex gap-8">
          <div className="basis-[45%] flex flex-col justify-center">
            <p className="text-xs font-primary font-bold tracking-wider text-gray-700">
              WHO WE ARE
            </p>
            <h1 className="text-5xl font-secondary font-bold my-4 leading-[60px]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </h1>
            <p className="font-primary text-sm text-gray-700 tracking-wide mt-8 leading-6">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel rem
              assumenda praesentium itaque magni impedit cupiditate architecto
              numquam cumque ipsam quis doloribus voluptates labore minus
              consequuntur commodi adipisci asperiores quae, laudantium, atque
              ex? Culpa explicabo vitae, accusamus expedita accusantium atque.
            </p>
          </div>
          <div className="basis-[55%] grid grid-cols-2 gap-8 justify-items-end">
            {[0, 1, 2].map((val) => (
              <div key={val} className={`bg-white p-8 pb-0 shadow rounded`}>
                <h3 className="font-secondary font-semibold text-xl mb-16">
                  <span className="text-5xl">150+</span> <br /> Projects
                </h3>
                <p className="border-t py-4 pb-8 text-sm font-primary text-gray-700">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Ullam error suscipit facere sed sit, dolorem necessitatibus
                  corporis quos dolore dignissimos!
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="bg-gray-900 py-20">
        <div className="max-w-7xl mx-auto">
          <p className="text-xs font-primary font-bold tracking-wider text-gray-300">
            OUR VALUES AND MISSION
          </p>
          <h1 className="font-secondary text-white text-5xl font-bold mt-4 leading-[55px]">We help you with your next <br /> project.</h1>
          <div className="grid grid-cols-2 mt-12 gap-10">
            {[0, 1, 2, 3].map((val) => (
              <div key={val} className={`${val < 2 && "border-b border-gray-700 shadow"} py-6 pt-2 flex gap-4`}>
                <span className="relative top-1 text-4xl text-blue-500">
                  <BsShield />
                </span>
                <div>
                  <h3 className="font-secondary text-white text-xl font-medium mb-4">Lorem ipsum dolor sit amet.</h3>
                  <p className="text-gray-400 font-primary">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. In
                    quas minima ex, illum aliquid officiis aspernatur atque
                    nobis soluta maiores ipsa pariatur tenetur facilis velit
                    autem qui molestias dolor similique!
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default AboutUs;
