import React from "react";
import { useState } from "react";

const Hint = ({ message }) => {
  const [hint, setHint] = useState(false);

  const handleHintClick = () => {
    setHint(true);
  };

  return (
    <div>
      <h4
        className="hint"
        onClick={handleHintClick}
        style={{ cursor: "pointer" }}
      >
        Need a Hint? {hint && message}
      </h4>
    </div>
  );
};

export default Hint;
