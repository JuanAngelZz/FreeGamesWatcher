import { useState } from "react";

const GameDescription = ({ children }) => {
  const [open, setOpen] = useState(false);

  const className = open
    ? `text-base text-gray-300 my-8 px-10`
    : `text-base text-gray-300 my-8 px-10 max-h-60 overflow-hidden`;

  return (
    <>
      <p className={className}>
        {children}
      </p>
      <button onClick={() => setOpen(!open)}>See more</button>
    </>
  );
};

export default GameDescription;
