import React, { useState } from "react";

const Wrapper = ({ children, content_header }, props) => {
  const [toggleBox1, setToggleBox1] = useState(true);
  const handleBoxClick = () => {
    setToggleBox1(!toggleBox1);
  };
  return (
    <div className="wrapper_header">
      <div className="header-box" onClick={handleBoxClick}>
        <div className="header-1">{content_header}</div>
        <div>
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
              d={toggleBox1 ? "m5 15 7-7 7 7" : "m19 9-7 7-7-7"}
            />
          </svg>
        </div>
      </div>
      {toggleBox1 && <>{children}</>}
    </div>
  );
};

export default Wrapper;
