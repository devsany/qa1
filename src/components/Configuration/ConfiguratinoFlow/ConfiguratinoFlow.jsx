import React, { useEffect, useRef, useState } from "react";
import "../config.css";
import Wrapper from "../Wrapper";

const ConfiguratinoFlow = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [isHovered, setIsHovered] = useState(false); // Track hover state
  const [toggleBox1, setToggleBox1] = useState(true);
  const dropdownRef = useRef(null);

  const options = ["Custom", "BYOD"]; // Options to display in the dropdown

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Filter options based on search query
  const filteredOptions = options?.filter((option) =>
    option.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Handle selecting an option
  const handleSelectOption = (option) => {
    setSearchQuery(option);
    setIsOpen(false); // Close dropdown after selection
  };
  const handleBoxClick = () => {
    setToggleBox1(!toggleBox1);
  };
  return (
    <div>
      <Wrapper content_header={props.header}>
        <div>
          <div className="conversation-flow">
            <div>{props?.header_flow}</div>

            {isHovered && (
              <div className="description">{props.questionIcon}</div>
            )}
            <div
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <svg
                className="w-10 h-10 text-gray-800 dark:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9.529 9.988a2.502 2.502 0 1 1 5 .191A2.441 2.441 0 0 1 12 12.582V14m-.01 3.008H12M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>
            </div>
          </div>
          <div className="dropdown-container" ref={dropdownRef}>
            {/* Input Field */}
            <div className="input-box" onClick={() => setIsOpen(!isOpen)}>
              <input
                type="text"
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
      </Wrapper>
    </div>
  );
};

export default ConfiguratinoFlow;
