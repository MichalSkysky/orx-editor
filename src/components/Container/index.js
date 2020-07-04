import React from "react";

const containerStyle = (center, row) => ({
  display: "flex",
  flexDirection: row ? "row" : "column",
  boxSizing: "border-box",
  margin: 0,
  padding: 0,
  textAlign: center ? "center" : "",
});

const Container = ({ children, style, row, center, ...props }) => (
  <div {...props} style={{ ...containerStyle(center, row), ...style }}>
    {children}
  </div>
);

export default Container;
