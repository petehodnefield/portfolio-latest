import React from "react";

const Hamburger = ({ hamOpen, setHamOpen }) => {
  return (
    <div className="hamburger" onClick={() => setHamOpen(!hamOpen)}>
      <div className="ham-lines">
        <div className="ham__line"></div>
        <div className="ham__line"></div>
        <div className="ham__line"></div>
      </div>
    </div>
  );
};

export default Hamburger;
