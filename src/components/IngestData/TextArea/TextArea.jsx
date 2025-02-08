import React, { useState } from "react";

const TextArea = (props) => {
  const { textarea_placeholder } = props;
  const [searchQuery, setSearchQuery] = useState("");
  const [textareaText, setTextareaText] = useState("");

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
    <div>
      <div>
        <div className="ingest-label"></div>
        <div>
          <textarea
            className="textarea_ingest_second"
            name="ingest_url"
            id="ingest_url"
            value={textareaText}
            onChange={handleChange}
            onKeyDown={handleKeyDown} // Handling key down events
            placeholder={textarea_placeholder}
          />
        </div>
      </div>
    </div>
  );
};

export default TextArea;
