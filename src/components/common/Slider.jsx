import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import { useEffect, useMemo, useState } from "react";
import { getGameById } from "../../selectors/getGameById";
import { Link } from "react-router-dom";
import { BsFillCaretRightFill } from "react-icons/bs";
import { getGiveAwayById } from "../../selectors/getGiveAwayById";

const Slider = ({ id = null, screenshots = [], classChild }) => {
  const [game, setGame] = useState(null);

  useEffect(() => {
    if (id) {
      const getGame = async () => {
        const newGame = await getGameById(id);
        setGame(newGame);
      };
      getGame().catch((e) => console.error(`Error: ${e}`));
    }
  }, [id]);

  const images = useMemo(
    () =>
      game ? [{ image: game.thumbnail }, ...game.screenshots] : screenshots,
    [game, screenshots]
  );

  const { title, game_url } = game ?? {};

  return (
    <Swiper
      pagination={{
        type: "progressbar",
      }}
      navigation={true}
      modules={[Pagination, Navigation, Autoplay]}
      autoplay={{ delay: 5000 }}
      className={classChild}
    >
      {images.length > 0 ? (
        images.map(({ image }, index) => {
          if (id && index == 0) {
            return (
              <SwiperSlide key={index}>
                <img
                  src={image}
                  alt={`screenshoot ${index + 1}`}
                  className="max-h-64 w-full object-cover"
                />
                <div className="bg-gray-700 h-2/6 w-full flex items-center justify-between">
                  <Link
                    to={`/game/${id}`}
                    className="text-3xl w-96 font-bold ml-8 inline-flex hover:text-red-600 transition-all"
                  >
                    {title}
                  </Link>
                  <a
                    href={game_url}
                    target="_blank"
                    className="bg-amber-500 text-slate-800 p-4 text-xl rounded-s font-bold inline-flex hover:scale-105 hover:bg-slate-300 transition-all"
                    rel="noreferrer"
                  >
                    Play
                    <BsFillCaretRightFill className="text-slate-800 text-3xl" />
                  </a>
                </div>
              </SwiperSlide>
            );
          } else {
            return (
              <SwiperSlide key={index} className="swiper-slide-custom max-h-96">
                <img src={image} alt={`screenshoot ${index + 1}`} />
              </SwiperSlide>
            );
          }
        })
      ) : (
        <span>Cargando...</span>
      )}
    </Swiper>
  );
};

export default Slider;
