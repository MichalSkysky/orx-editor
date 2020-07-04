import React, { useEffect, useState } from "react";
import Container from "../Container/index.js";
import Title from "../Title/index.js";

const settingsStyle = (showing) => ({
  position: "fixed",
  transition: "right .3s",
  top: 0,
  right: showing ? 0 : -400,
  width: 400,
  height: 600,
  zIndex: 10,
  background: "white",
  borderRadius: "0 0 0 10px",
});

const bgStyle = (showing) => ({
  zIndex: 9,
  position: "fixed",
  top: 0,
  left: 0,
  transition: "opacity .3s",
  opacity: showing ? 1 : 0,
  width: "100%",
  height: "100%",
  background: "rgba(0,0,0,.5)",
});

const Settings = ({ toggleSettings }) => {
  const [showing, show] = useState(false);

  useEffect(() => {
    setTimeout(() => show(true), 16);
  }, []);

  const hide = () => {
    show(false);
    setTimeout(() => toggleSettings(), 400);
  };

  return [
    <Container style={bgStyle(showing)} />,
    <Container style={settingsStyle(showing)}>
      <Container
        row
        style={{
          height: 50,
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Title medium style={{ marginLeft: 20 }}>
          Settings
        </Title>
        <Container
          onClick={() => hide()}
          style={{ marginRight: 20, cursor: "pointer" }}
        >
          ☰
        </Container>
      </Container>
      <Container style={{ margin: 20 }}>options</Container>
    </Container>,
  ];
};

export default Settings;
