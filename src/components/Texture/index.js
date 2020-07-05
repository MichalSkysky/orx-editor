import React, { useState } from "react";
import Container from "../Container/index.js";

const textureStyle = {
  padding: 10,
  border: "1px solid #3c3c3c",
  margin: 10,
  alignItems: "center",
  background: "#f2f2f2",
};

const Texture = ({ textures }) => (
  <Container row style={{ flexWrap: "wrap" }}>
    {textures.map((texture, i) => {
      const [height, setHeight] = useState(0);
      const [width, setWidth] = useState(0);

      const load = ({
        target: { naturalHeight: height, naturalWidth: width },
      }) => {
        setWidth(width);
        setHeight(height);
      };

      return (
        <Container key={`texture-${i}`} style={textureStyle}>
          <Container>
            {texture} ({width}x{height})
          </Container>
          <Container style={{ margin: "auto" }}>
            <img
              style={{ alignSelf: "center", maxWidth: "100%" }}
              onLoad={load}
              src={`data/texture/${texture}`}
              alt={texture}
            />
          </Container>
        </Container>
      );
    })}
  </Container>
);

export default Texture;
