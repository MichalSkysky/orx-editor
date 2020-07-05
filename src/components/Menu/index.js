import React from "react";
import { PAGES } from "../../constans.js";
import Title from "../Title/index.js";
import Container from "../Container/index.js";
import Link from "../Link/index.js";
import Loader from "../Loader/index.js";

const menuStyle = {
  height: 50,
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  background: "#f2f2f2",
};

const Menu = ({ project, page, setPage, toggleSettings, loading }) => {
  return (
    <Container style={menuStyle}>
      <Container
        row
        style={{ cursor: "pointer" }}
        onClick={() => setPage(PAGES.HOME)}
      >
        <img
          style={{ margin: "0 10px", maxHeight: 40, width: 77 }}
          src="https://orx-project.org/images/logo.png"
          alt="orx"
        />
        <Title large>editor</Title>
      </Container>
      {loading ? <Loader /> : <strong>{project}</strong>}
      <Container row>
        {Object.values(PAGES)
          .filter((p) => p !== PAGES.HOME)
          .map((value) => (
            <Link
              active={value === page}
              style={{ marginRight: 20, textTransform: "capitalize" }}
              key={"menu-link-" + value}
              href="#"
              onClick={() => setPage(value)}
            >
              {value}
            </Link>
          ))}
        <Container
          onClick={() => toggleSettings()}
          style={{ marginRight: 20, cursor: "pointer" }}
        >
          ☰
        </Container>
      </Container>
    </Container>
  );
};

export default Menu;
