import React, { useState } from "react";
import Tooltip from "../Tooltip";
import "./styles.css";

const ButtonWithTooltip = ({ buttonProps }) => {
  const { tooltip, content } = buttonProps;
  const [tooltipState, setTooltipState] = useState(false);
  return (
    <button
      className="button"
      onMouseEnter={() => {
        setTooltipState(true);
      }}
      onMouseLeave={() => {
        setTooltipState(false);
      }}
      {...buttonProps}
    >
      {content}
      {tooltipState && (
        <Tooltip
          tooltip={{
            className: tooltip.className,
            text: tooltip.text
          }}
        />
      )}
    </button>
  );
};

export default ButtonWithTooltip;
