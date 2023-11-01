import React from "react";
import { BsBuilding } from "react-icons/bs";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import ReviewSlider from "../Components/ReviewSlider";
import Slider from "../Components/Slider";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <div className="flex flex-col bg-[url('building.jpg')] relative after:absolute after:top-0 after:w-full after:pointer-events-none after:h-full after:bg-[rgba(0,0,0,0.06)] bg-no-repeat bg-cover min-h-[650px] xl:min-h-[750px] bg-center">
        <Navbar />
        <div className="flex-grow bg-[rgba(0,0,0,0.02)]">
          <div className="max-w-2xl mt-10  mx-auto text-center relative ">
            <h1 className="font-secondary text-5xl mb-4 text-white font-bold">
              Lorem ipsum dolor sit amet.
            </h1>
            <p className="font-primary text-black/90 font-light tracking-wide">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
              impedit eaque velit est nemo sapiente provident, ipsam quibusdam
              reiciendis iste! Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Ducimus, nisi.
            </p>
          </div>
        </div>
      </div>
      <div className="bg-[whitesmoke] p-10 py-20">
        <div className="max-w-7xl mx-auto flex items-center my-10 gap-10">
          <div className="grid grid-cols-2 gap-8 basis-[52%]">
            {[0, 1, 2, 3].map((val) => (
              <div
                key={val}
                className="text-center space-y-2 shadow-2xl p-4 py-8 bg-white group hover:bg-blue-400 rounded transition-colors shadow-blue-400/50"
              >
                <BsBuilding className="mx-auto text-4xl text-blue-500 group-hover:text-[whitesmoke]" />
                <h2 className="text-2xl font-secondary font-medium group-hover:text-[whitesmoke]">
                  Lorem ipsum
                </h2>
                <p className="font-primary text-sm text-gray-600 group-hover:text-gray-50">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Pariatur deserunt inventore amet culpa natus nihil.
                </p>
              </div>
            ))}
          </div>
          <div className="basis-[48%]">
            <span className="font-primary font-bold text-sm text-gray-700">
              WHAT WE OFFER
            </span>
            <h1 className="my-6 font-secondary font-bold text-4xl">
              Lorem ipsum dolor sit amet consectetur.
            </h1>
            <p className="text-gray-700 font-primary">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Repudiandae voluptatum voluptatibus labore, sequi provident magni,
              eaque soluta nihil veritatis accusantium perspiciatis temporibus
              corrupti expedita reprehenderit! Lorem, ipsum dolor sit amet
              consectetur adipisicing elit. Veritatis, repellendus.
            </p>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto my-20 flex items-center gap-20">
        <div className="basis-[48%]">
          <h2 className="text-4xl mb-4 font-secondary font-semibold">
            Company Profile
          </h2>
          <p className="text-gray-700 font-primary tracking-wide">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
            alias aperiam quia consequatur velit rerum deleniti laboriosam non
            accusantium ad voluptatibus soluta numquam, perspiciatis neque
            perferendis fuga distinctio, nostrum ipsa error illum. Tempora omnis
            laboriosam quisquam quos maiores repellat nulla!
          </p>
          <button className="mt-10 border p-3 px-5 rounded-xl border-blue-400 font-primary font-medium hover:bg-blue-400 hover:text-white">
            <Link to={'/about'}>Learn More</Link>
          </button>
        </div>
        <div className="basis-[52%]">
          <img
            src="building1.jpg"
            alt=""
            className="min-h-[600px] rounded object-cover object-center"
          />
        </div>
      </div>
      <div className="mt-20 py-10 pb-20 bg-gray-900 ">
        <h1 className="max-w-7xl mx-auto font-secondary text-4xl font-semibold mb-8 text-white">
          Works Showcase
        </h1>
        <Slider />
      </div>
      <div className="bg-[whitesmoke] py-16">
        <div className="max-w-7xl mx-auto grid grid-cols-4 gap-4">
          <div className="col-span-2 pr-3 pb-3 flex flex-col justify-center">
            <h3 className="text-4xl font-secondary font-semibold mb-3">
              Featured Services
            </h3>
            <p className="font-primary text-sm text-gray-800 tracking-wide">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus
              sed architecto molestiae dolor, ducimus exercitationem tempora,
              quibusdam eum placeat nihil velit labore numquam laborum fugiat
              nulla quidem dolores dolorum maiores!
            </p>
          </div>
          {[0, 1, 2, 3, 4, 5].map((val) => (
            <div
              key={val}
              className=" space-y-2 shadow p-4 min-h-[250px] flex flex-col justify-end border-2 hover:border-blue-400 group hover:bg-blue-400 rounded transition-colors "
            >
              <BsBuilding className=" text-5xl mb-4 text-blue-500 group-hover:text-[whitesmoke]" />
              <h2 className="text-xl font-secondary font-medium group-hover:text-[whitesmoke]">
                Lorem ipsum
              </h2>
              <p className="font-primary text-xs text-gray-700 group-hover:text-[whitesmoke]">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui,
                vitae.
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="bg-gray-900 py-20">
        <div className="grid grid-cols-5 items-center ml-auto gap-8">
          <div className="col-span-2 max-w-md ml-auto">
            <h3 className="text-gray-200 mb-4 font-primary font-bold text-sm">
              WHAT PEOPLE SAY
            </h3>
            <h1 className="text-white mb-4 text-4xl font-secondary font-semibold">
              {"Client's"} Talk
            </h1>
            <p className="text-gray-300 font-primary text-sm tracking-wide">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
              fugit adipisci, accusantium, dicta soluta odio eius vero quisquam
              animi maiores deleniti ab reprehenderit possimus? Nisi impedit
              voluptate eius non quas.
            </p>
          </div>
          <div className="col-span-3">
            <ReviewSlider />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Home;
