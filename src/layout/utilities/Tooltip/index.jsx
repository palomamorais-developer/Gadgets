import React from "react";
import "./styles.css";

const Tooltip = ({ tooltip }) => {
  const { className, text } = tooltip;
  return <div className={`tooltip ${className}`}>{text}</div>;
};

export default Tooltip;
