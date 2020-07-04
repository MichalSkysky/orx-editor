import React from "react";
import Title from "../Title/index.js";
import Container from "../Container/index.js";
import Gap from "../Gap/index.js";

const Home = ({ project }) => (
  <Container
    style={{ flexDirection: "column", alignItems: "center", margin: "0 10px" }}
  >
    <Gap medium />
    <Title medium>Welcome to the orxEditor</Title>
    <Gap medium />
    <Container row>
      Currently opened project:
      <Title style={{ marginLeft: 5 }}>{project || "..."}</Title>
    </Container>
    <Gap medium />
    <Container center>
      Click on the links on the top right to editor various resources of your
      project.
    </Container>
    <Gap medium />
    <Container style={{ textAlign: "center" }}>
      More information about orx here.{" "}
      <a href="https://orx-project.org">https://orx-project.org</a>
    </Container>
  </Container>
);

export default Home;
