import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import { Controller, FreeMode } from "swiper/modules";

function ReviewSlider() {
  return (
    <div>
      <Swiper
        slidesPerView={2}
        spaceBetween={20}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Controller]}
        className="flex"
      >
        {[0, 1, 2, 3, 4].map((val) => (
          <SwiperSlide className="rounded  group" key={val}>
            <div className="bg-[whitesmoke] rounded rounded-ee-none pb-8 pt-10 px-6 relative">
              <p className="font-primary text-gray-800">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. At enim
                odit sequi facere quasi autem sapiente minus architecto eaque,
                distinctio, cumque rerum alias, dolorem fugit inventore sit
                vitae nam ullam.
              </p>
              <div className="flex items-center gap-4 mt-6">
                <img src="building.jpg" alt="" className="w-12 h-12 rounded-full" />
                <div>
                    <h2 className="font-secondary font-semibold text-gray-900">John Doe</h2>
                    <p className="font-primary text-xs font-medium text-gray-700">Customer</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default ReviewSlider;
