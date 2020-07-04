import React from "react";

const Gap = ({ small, medium, large }) => (
  <div
    style={{
      width: large ? 40 : medium ? 20 : 10,
      height: large ? 40 : medium ? 20 : 10,
    }}
  ></div>
);

export default Gap;
