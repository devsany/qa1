import React, { useState } from "react";

const FewShotExampleInbuildCard = (props) => {
  const [toggleBox1, setToggleBox1] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div>
      <div>
        <div>
          <div className="conversation-flow1">
            <div>{props.shotAnswerType}</div>
            {isHovered && (
              <div className="description">{props.questionHeader}</div>
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
          <textarea className="textarea" value={props.text} />
        </div>
      </div>
    </div>
  );
};

export default FewShotExampleInbuildCard;
