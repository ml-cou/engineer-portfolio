import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import { Controller, FreeMode } from "swiper/modules";
import { useNavigate } from "react-router-dom";

const Slider = () => {
  const navigate = useNavigate()
  return (
    <div>
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Controller]}
        className="mySwiper"
      >
        {[0, 1, 2, 3, 4].map((val) => (
          <SwiperSlide className="rounded relative group" key={val}>
            <img
              src="building1.jpg"
              className="w-full !min-h-[350px] object-cover"
              alt=""
            />
            <div className="absolute group-hover:w-full hover:cursor-pointer group-hover:h-full hidden group-hover:flex flex-col justify-end p-4 bg-[rgba(0,0,0,0.5)] top-0" onClick={() => navigate('/project')}>
              <p className="text-gray-300 font-semibold mb-1 font-primary text-sm">
                Construction, Work
              </p>
              <h1 className="text-[whitesmoke] font-secondary text-2xl font-medium">
                Interior Design
              </h1>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;
