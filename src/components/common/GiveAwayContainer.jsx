import GiveAwayCard from "./GiveAwayCard";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";

const GiveAwayContainer = ({ games, title, icon }) => {
  return (
    <>
      <h2 className="text-3xl font-bold mb-8 flex items-center">
        {icon} {title}
      </h2>
      <section className="mb-8">
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          navigation={games.length > 3 ? true : false}
          modules={[Pagination, Navigation]}
          className="mySwiper p-4 bg-slate-700 rounded outline outline-1 outline-red-600"
        >
          {games &&
            games.map(
              ({ id, title, thumbnail, open_giveaway, worth, end_date }) => (
                <SwiperSlide key={id}>
                  <GiveAwayCard
                    id={id}
                    title={title}
                    thumbnail={thumbnail}
                    end_date={end_date}
                    open_giveaway={open_giveaway}
                    worth={worth}
                  />
                </SwiperSlide>
              )
            )}
        </Swiper>
      </section>
    </>
  );
};

export default GiveAwayContainer;
