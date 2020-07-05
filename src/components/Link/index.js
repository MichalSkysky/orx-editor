import React, { useState } from "react";

const Link = ({ active, href, onClick, style, children }) => {
  const [hover, setHover] = useState(false);

  return (
    <a
      {...{
        href,
        style: {
          color: "black",
          cursor: "pointer",
          textDecoration: hover ? "underline" : "none",
          fontWeight: active || hover ? "bold" : "normal",
          ...style,
        },
        onMouseEnter: () => setHover(true),
        onMouseLeave: () => setHover(false),
        onClick: (e) => (onClick ? e.preventDefault() || onClick() : ""),
      }}
    >
      {children}
    </a>
  );
};

export default Link;
