import GiveAwayCard from "./GiveAwayCard";

const GiveAwayContainer = ({ games, title, icon }) => {
  return (
    <>
      <h2 className="text-3xl font-bold mb-8 flex items-center">
        {icon} {title}
      </h2>
      <section className="flex flex-wrap gap-6 mb-8">
        {games && games.map(
          ({ id, title, thumbnail, open_giveaway, worth, end_date }) => (
            <GiveAwayCard
              key={id}
              id={id}
              title={title}
              thumbnail={thumbnail}
              end_date={end_date}
              open_giveaway={open_giveaway}
              worth={worth}
            />
          )
        )}
      </section>
    </>
  );
};

export default GiveAwayContainer;
