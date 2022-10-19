import React from "react";

const Icon = ({ iconProps }) => {
  const { src, alt, className } = iconProps;
  return <img src={src} alt={alt} class={className} />;
};

export default Icon;
