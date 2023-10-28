import GiveAwayCard from "./GiveAwayCard";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";

const GiveAwayContainer = ({ games, title, icon, ChildrenComponent, right }) => {

  const classProp = right ? "text-3xl font-bold mb-8 flex items-center justify-end mr-5" : "text-3xl font-bold mb-8 flex items-center ml-5"

  return (
    <>
      <h2 className={classProp}>
        {icon} {title}
      </h2>
      <section className="mb-8">
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          navigation={games.length > 3 ? true : false}
          modules={[Pagination, Navigation]}
          className="mySwiper p-4 bg-slate-800 rounded outline outline-1 outline-gray-600"
        >
          {games &&
            games.map((game) => (
              <SwiperSlide key={game.id}>
                <ChildrenComponent {...game} />
              </SwiperSlide>
            ))}
        </Swiper>
      </section>
    </>
  );
};

export default GiveAwayContainer;
