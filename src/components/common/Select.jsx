import { useState } from "react";

const Select = ({ name, handleChange, options, labelText, defaultOption }) => {
  const [selectedValue, setSelectedValue] = useState(() => {
    if (defaultOption) {
      return options.includes(defaultOption) ? defaultOption : options[0];
    } else {
      return ""
    }
  });

  return (
    <div>
      <label htmlFor={name}>{labelText}</label>
      <select
        value={selectedValue}
        name={name}
        className="ml-2 bg-gray-700 p-2 text-sm rounded focus:ring-1 focus:ring-blue-900"
        onChange={(e) => {
          handleChange(e);
          setSelectedValue(e.target.value);
        }}
      >
        {!defaultOption && (
          <option value="" disabled>
            Select...
          </option>
        )}
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option.length > 3
              ? (option.charAt(0).toUpperCase() + option.slice(1)).replace(
                  "-",
                  " "
                )
              : option.toUpperCase()}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;
