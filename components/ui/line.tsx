import React from "react";

const Line = ({classname}:{classname: string}) => {
  return (
    <span className={classname}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="144"
        height="140"
        viewBox="0 0 144 140"
        fill="none"
      >
        <path
          d="M2 138V14C2 7.37259 7.37258 2 14 2H142"
          stroke="#5754A8"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  );
};

export default Line;
