import React from "react";
import { PAGES } from "../../constans.js";

const Menu = ({ page, setPage }) => {
  return (
    <div>
      orxEditor2
      {Object.values(PAGES).map((value) => (
        <a key={"menu-link-" + value} href="#" onClick={() => setPage(value)}>
          {value}
        </a>
      ))}
    </div>
  );
};

export default Menu;
