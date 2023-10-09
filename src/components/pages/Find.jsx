import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { genres } from "../../constants/genres";
import { sortOptions } from "../../constants/sortOptions";
import { useForm } from "../../hooks/useForm";
import Select from "../ui/Select";
import Tag from "../ui/Tag";
import queryString from "query-string";
import { BiSearch } from "react-icons/bi";

const Find = () => {
  const location = useLocation();
  const {
    name: searchName,
    sort: searchSort,
    tags: searchTags,
  } = queryString.parse(location.search);

  const obtainedTags = searchTags ? searchTags.split(".") : [];

  const { values, handleChange, handleSubmit, handleAddTags, handleCloseTags } =
    useForm({
      name: searchName || "",
      tags: obtainedTags,
      sort: searchSort || "relevance",
    });

  const { name, tags, sort } = values;

  useEffect(() => {}, [values]);

  return (
    <>
      <h2 className="text-3xl text-center font-bold">
        Free Games <span className="text-red-600">Forever</span>
      </h2>
      <form className="w-full px-4 my-10" onSubmit={handleSubmit}>
        <div className="relative flex max-w-[640px] mx-auto">
          <input
            type="text"
            name="name"
            className="block w-full border border-gray-600 h-12 p-4 rounded-full bg-gray-700 shadow-lg shadow-slate-950 focus:ring-1 focus:ring-blue-900 mb-4"
            placeholder="Search a game..."
            onChange={handleChange}
            value={name}
          />
          <button type="submit">
            <BiSearch className="text-slate-400 h-5 w-5 absolute right-4 top-4 fill-current" />
          </button>
        </div>
        {tags.length > 0 && (
          <div className="w-full max-w-[800px] mx-auto flex flex-wrap gap-2">
            {tags.map((tag, index) => (
              <Tag key={index} tagName={tag} handleClose={handleCloseTags} />
            ))}
          </div>
        )}
        <div className="mt-4 flex justify-around">
          <Select
            name="genre"
            labelText="Add Tag:"
            options={genres}
            handleChange={handleAddTags}
          />
          <Select
            name="sort"
            labelText="Sort By:"
            options={sortOptions}
            handleChange={handleChange}
            defaultOption={sort}
          />
        </div>
      </form>
      <hr />
    </>
  );
};

export default Find;
