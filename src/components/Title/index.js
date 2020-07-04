import React from "react";

const Title = ({ small, medium, large, children, style }) => {
  const Tag = small ? "h3" : medium ? "h2" : large ? "h1" : "b";

  return <Tag style={{ margin: 0, padding: 0, ...style }}>{children}</Tag>;
};

export default Title;
