import React, { useEffect, useRef, useState } from "react";
import "../config.css";

const Orchestrator = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [isHovered, setIsHovered] = useState(false); // Track hover state
  const [toggleBox1, setToggleBox1] = useState(true);
  const dropdownRef = useRef(null);

  const options = ["openai_function", "langchain", "langchain", "prompt_flow"]; // Options to display in the dropdown

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
  const filteredOptions = options.filter((option) =>
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
      <div className="content">
        <div className="header-box" onClick={handleBoxClick}>
          <div className="header-1">Orchestrator configuration</div>
          <div>
            {toggleBox1 ? (
              <>
                <svg
                  className="w-6 h-6 text-gray-800 dark:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m5 15 7-7 7 7"
                  />
                </svg>
              </>
            ) : (
              <svg
                className="w-6 h-6 text-gray-800 dark:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m19 9-7 7-7-7"
                />
              </svg>
            )}
          </div>
        </div>
        {toggleBox1 && (
          <div>
            <div className="conversation-flow">
              <div>Orchestrator strategy</div>
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
                    {filteredOptions.map((option, index) => (
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
        )}
      </div>
    </div>
  );
};

export default Orchestrator;
