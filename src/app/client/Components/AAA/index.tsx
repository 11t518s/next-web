"use client";

import { useState } from "react";

const AAA = () => {
  const [isClick, setIsClick] = useState(false);
  return (
    <div>
      {isClick ? <div>click</div> : <div>non</div>}

      <button
        onClick={() => {
          setIsClick((prev) => !prev);
        }}
      >
        change click
      </button>
    </div>
  );
};

export default AAA;
