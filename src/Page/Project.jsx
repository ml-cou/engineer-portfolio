import React from "react";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";

function Project() {
  return (
    <div>
      <div className="flex flex-col bg-[url('building.jpg')] relative after:absolute after:top-0 after:w-full after:pointer-events-none after:h-full after:bg-[rgba(0,0,0,0.06)] bg-no-repeat bg-cover min-h-[650px] xl:min-h-[600px] bg-center">
        <Navbar />
        <div className="flex-grow bg-[rgba(0,0,0,0.02)]">
          <div className="max-w-2xl mt-10  mx-auto text-center relative ">
            <h1 className="font-secondary text-6xl mb-4 text-white font-bold">
              Project Title
            </h1>
          </div>
        </div>
      </div>
      <div className="pt-10 pb-20 bg-[whitesmoke]">
        <div className="max-w-5xl mx-auto">
          <span className="font-primary text-xs font-semibold tracking-wide text-gray-700">PROJECT DETAILS</span>
          <h1 className="font-secondary text-5xl my-6 font-semibold">About the Project</h1>
          <div>
            <p className="font-primary text-gray-800 tracking-wide leading-6 text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
              aliquam minus excepturi obcaecati quaerat quia facilis velit ipsa.
              Culpa eveniet itaque veniam! Aliquid qui ab pariatur, laboriosam
              sit iure minus eum dignissimos fugit voluptas facilis ad dicta
              quisquam tenetur maxime incidunt labore maiores debitis voluptatem
              atque adipisci. Maiores accusamus expedita sapiente doloribus,
              sint fugit nobis consequatur deleniti nemo quam veniam, numquam in
              iusto reiciendis ducimus. Ducimus vitae unde repudiandae minima
              omnis sapiente est itaque mollitia necessitatibus iure ab dolorum
              veritatis saepe aperiam expedita cupiditate molestias cumque,
              ratione dolor placeat earum. Culpa explicabo sapiente consectetur
              odio possimus autem harum, quasi, fuga asperiores animi quas,
              minus eos vero ea! Repellat similique nisi rerum fugit temporibus
              sequi sunt inventore praesentium esse deserunt! Officiis optio
              numquam illo nemo illum facilis sunt eveniet eos, repellendus,
              tenetur culpa minima praesentium incidunt tempore cum enim, fuga
              amet nobis fugit. Nesciunt voluptas ratione maxime reiciendis
              sint, ipsum, nam hic id mollitia accusamus animi. Impedit, hic
              nobis ex facere vel velit. Facere illum fuga molestias
              repellendus. Obcaecati voluptate, nisi amet suscipit voluptates
              doloremque accusamus dolore eos a minima corporis. Eius nihil
              quidem iusto perspiciatis dolores odit quia laboriosam nulla sunt,
              in sed necessitatibus dicta eaque quis sequi consequuntur itaque.
            </p>
            <div className="mt-10 grid grid-cols-2 gap-8">
                {[0,1,2,3].map(val => <img key={val} src="building1.jpg" className="w-full h-full object-center" />)}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Project;
