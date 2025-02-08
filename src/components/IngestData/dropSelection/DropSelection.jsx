import React, { useRef, useState } from "react";

const DropSelection = (props) => {
  const { options, dropSelectionHeader } = props;
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const dropdownRef = useRef(null);
  const handleSelectOption = (option) => {
    setSearchQuery(option);
    setIsOpen(false);
  };

  const filteredOptions = options?.filter((option) =>
    option.toLowerCase().includes(searchQuery.toLowerCase())
  );
  return (
    <div>
      <div className="dropdown-container" ref={dropdownRef}>
        <div>{dropSelectionHeader}</div>
        {/* Input Field */}
        <div className="input-box" onClick={() => setIsOpen(!isOpen)}>
          <input
            type="text"
            // className="input-ingest"
            placeholder="Choose an option"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <span className="arrow">&#9662;</span>
        </div>

        {/* Dropdown Menu */}
        {isOpen && (
          <div className="dropdown-options">
            {/* Displaying filtered options using .map */}
            <div className="options-list">
              {filteredOptions &&
                filteredOptions.map((option, index) => (
                  <div
                    key={index}
                    className="option-item"
                    onClick={() => handleSelectOption(option)}
                  >
                    {option}
                  </div>
                ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default DropSelection;
