import React, { useEffect, useRef, useState } from "react";
import "../config.css";

const Prompt = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [isHovered, setIsHovered] = useState(false); // Track hover state
  const [iseHoveredAnswering, setIsHoveredAnswering] = useState(false);
  const [isHoveredAnswering2, SetIsHoveredAnswering2] = useState(false);
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
      <div className="">
        <div className="header-box" onClick={handleBoxClick}>
          <div className="header-1">{props.header}</div>
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
            <div className="conversation-flow-main">
              <div className="conversation-flow-item">
                <div>
                  <input type="checkbox" />
                </div>
                <div className="conversation-flow-item-text">
                  Use Azur OpenAI On Your Data Prompt formate
                </div>
              </div>

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
            <div className="conversation-flow-answer-main">
              {iseHoveredAnswering && (
                <>
                  <div className="answer_description">
                    The user prompt used to answer the user's question, using
                    the sources that were retrieved from the knowledge base. If
                    using the Azure OpenAI On Your Data prompt format, it is
                    recommended to keep this simple, e.g.:
                    <br />
                    ## Retrieved Documents
                    {/* {sources} */}
                    ## User Question Use the Retrieved Documents to answer the
                    question:
                    {/* {question} */}
                  </div>
                </>
              )}

              <div>Answering user prompt</div>

              <div>
                {" "}
                <div className="" ref={dropdownRef}>
                  {/* Information Field */}
                  <div
                    onMouseEnter={() => setIsHoveredAnswering(true)}
                    onMouseLeave={() => setIsHoveredAnswering(false)}
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
              </div>
            </div>
            <textarea
              className="textarea"
              value="
                 ## Retrieved Documents
                {/* {sources} */}
                ## User Question Use the Retrieved Documents to answer the
                question:
                {/* {question} */}" // The content of the textarea is controlled by the text state
              // onChange={handleChange} // Updates the state whenever the user types
            />
            <div className="conversation-flow-answer-main">
              {isHoveredAnswering2 && (
                <>
                  <div className="answer_description">
                    The system prompt used to answer the user's question. Only
                    used if Azure OpenAI On Your Data prompt format is enabled
                  </div>
                </>
              )}

              <div>Answering user prompt</div>
              <div>
                {" "}
                <div className="" ref={dropdownRef}>
                  {/* Information Field */}
                  <div
                    onMouseEnter={() => SetIsHoveredAnswering2(true)}
                    onMouseLeave={() => SetIsHoveredAnswering2(false)}
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
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Prompt;
