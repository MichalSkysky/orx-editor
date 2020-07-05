import React from "react";

const buttonStyle = {
  border: 0,
  background: "#000",
  color: "#fff",
  borderRadius: 5,
  padding: 5,
  cursor: "pointer",
};

const Button = ({ children, onClick = () => {}, ...props }) => {
  return (
    <button
      style={buttonStyle}
      onClick={(e) => e.preventDefault() || onClick()}
    >
      {children}
    </button>
  );
};

export default Button;
