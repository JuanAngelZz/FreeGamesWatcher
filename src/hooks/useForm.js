import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const useForm = (initialState = {}) => {
  const [values, setValues] = useState(initialState);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;

    setValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, tags, sort } = values;

    navigate(`?name=${name}&tags=${tags.join(".")}&sort=${sort}`);
  };

  const handleAddTags = (e) => {
    const { tags } = values;
    const { value } = e.target;

    if (!tags.find((tag) => tag == value)) {
      setValues((prevValues) => ({
        ...prevValues,
        tags: [...prevValues.tags, value],
      }));
    }
  };

  const handleCloseTags = (tag) => {
    const { tags } = values;
    const updatedTags = tags.filter((t) => t !== tag);

    setValues((prevValues) => ({
      ...prevValues,
      tags: updatedTags,
    }));
  };

  return {
    values,
    handleChange,
    handleSubmit,
    handleAddTags,
    handleCloseTags,
  };
};

