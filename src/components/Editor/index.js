import React, { useState, useEffect } from "react";
import Menu from "../Menu/index.js";
import Home from "../Home/index.js";
import Config from "../Config/index.js";
import Texture from "../Texture/index.js";
import Sound from "../Sound/index.js";
import { PAGES } from "../../constans.js";

const Pages = {
  [PAGES.HOME]: Home,
  [PAGES.CONFIG]: Config,
  [PAGES.TEXTURE]: Texture,
  [PAGES.SOUND]: Sound,
};

const Editor = () => {
  const [page, setPage] = useState(PAGES.HOME);
  const [configs, setConfigs] = useState([]);
  const [textures, setTextures] = useState([]);
  const [sounds, setSounds] = useState([]);

  useEffect(() => {
    fetch("data/config")
      .then((d) => d.json())
      .then((d) => setConfigs(d));
    fetch("data/texture")
      .then((d) => d.json())
      .then((d) => setTextures(d));
    fetch("data/sound")
      .then((d) => d.json())
      .then((d) => setSounds(d));
  }, []);

  const Component = Pages[page];

  return (
    <div>
      <Menu {...{ page, setPage }} />
      {page}
      {<Component {...{ page, configs, textures, sounds }} />}
    </div>
  );
};

export default Editor;
