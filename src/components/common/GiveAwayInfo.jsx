const GiveAwayInfo = ({
  thumbnail,
  title,
  description,
  published_date,
  worth,
}) => {
  return (
    <div className="bg-gray-600 max-h-[340px] max-w-[300px] rounded outline outline-slate-700 shadow-lg shadow-slate-700">
      <img
        src={thumbnail}
        alt={`${title} thumbnail`}
        className="rounded-t-xl"
      />
      <div className="p-4 text-sm flex flex-col">
        <p className="max-h-[80px] overflow-scroll mb-2">{description}</p>
        <p>
          <span className="opacity-50 inline-block w-28 mb-1">Published Date:</span>
          {published_date}
        </p>
        <p>
          <span className="opacity-50 inline-block mr-4">Savings:</span>
          <span className="text-green-600 font-bold">{worth}</span>
        </p>
      </div>
    </div>
  );
};

export default GiveAwayInfo;
