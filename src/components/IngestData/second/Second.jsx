import React, { useRef, useState } from "react";
import "./second.css";

const Second = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [textareaText, setTextareaText] = useState("");

  const dropdownRef = useRef(null);

  const [options, setOptions] = useState([
    "text-embedding...",
    "Legal",
    "Common",
  ]);

  const handleSelectOption = (option) => {
    setSearchQuery(option);
    setIsOpen(false);
  };

  const filteredOptions = options?.filter((option) =>
    option.toLowerCase().includes(searchQuery.toLowerCase())
  );
  const handleChange = (e) => {
    setTextareaText(e.target.value);
  };
  const handleProcess = () => {
    console.log("Textarea", textareaText);
    console.log("searchQuery", searchQuery);
  };
  // Handle Space key to move cursor to the next line
  const handleKeyDown = (e) => {
    if (e.key === " ") {
      e.preventDefault(); // Prevent the default space behavior
      setTextareaText((prevText) => prevText + "\n"); // Add a new line instead
    }
  };
  return (
    <div className="ingest-second-main">
      {/* left div */}
      <div>
        <div className="ingest-label">
          <label htmlFor="ingest_url">
            Add URLs and then click on 'Computer Embeddings'
          </label>
        </div>
        <div>
          <textarea
            className="textarea_ingest_second"
            name="ingest_url"
            id="ingest_url"
            value={textareaText}
            onChange={handleChange}
            onKeyDown={handleKeyDown} // Handling key down events
            placeholder="PLACE YOUR URLS HERE SEPAREETED BY A NEW LINE"
          />
        </div>
      </div>

      {/* right div */}
      <div>
        <div>
          <label className="label-ingest-second">Embeddings models</label>{" "}
          {/* Input Field */}
          <div className="dropdown-container" ref={dropdownRef}>
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
        <div>
          <button
            disabled={!textareaText || !searchQuery}
            onClick={handleProcess}
            className="reprocess"
          >
            Process and ingest web pages
          </button>
        </div>
      </div>
    </div>
  );
};

export default Second;
