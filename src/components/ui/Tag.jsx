import { IoClose } from "react-icons/io5";

const Tag = ({ tagName, handleClose }) => {
  return (
    <span className="bg-red-600 text-sm p-2 rounded text-center flex cursor-pointer hover:opacity-90">
      {tagName}
      <IoClose
        className="text-xl relative top-[1px] hover:scale-110"
        onClick={() => handleClose(tagName)}
      />
    </span>
  );
};

export default Tag;
