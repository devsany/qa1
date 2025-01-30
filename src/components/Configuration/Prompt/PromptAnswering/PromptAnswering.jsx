import React, { useRef, useState } from "react";

const PromptAnswering = (props) => {
  const [isHovered, setIsHovered] = useState(false);
  const dropdownRef = useRef(null);
  return (
    <div>
      <div className="conversation-flow-answer-main">
        {isHovered && (
          <>
            <div className="answer_description">
              {props.prompt_questionAnswer}
              <br />
              {props.prompt_questionAnswerCode}
              <br />
              <br />
              {props.prompt_questionAnswerCode2}
            </div>
          </>
        )}

        <div>{props.prompt_answer}</div>

        <div>
          {" "}
          <div className="" ref={dropdownRef}>
            {/* Information Field */}
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
        </div>
      </div>
      <textarea className="textarea" value={props.value} />
    </div>
  );
};

export default PromptAnswering;
