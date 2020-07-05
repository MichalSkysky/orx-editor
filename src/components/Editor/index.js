import React, { useState, useEffect } from "react";
import Menu from "../Menu/index.js";
import Home from "../Home/index.js";
import Config from "../Config/index.js";
import Texture from "../Texture/index.js";
import Sound from "../Sound/index.js";
import Container from "../Container/index.js";
import Settings from "../Settings/index.js";
import { PAGES } from "../../constans.js";
import { fetchJson, useStorage } from "../../utils/index.js";

const Pages = {
  [PAGES.HOME]: Home,
  [PAGES.CONFIG]: Config,
  [PAGES.TEXTURE]: Texture,
  [PAGES.SOUND]: Sound,
};

const Editor = () => {
  const [boot, setBoot] = useState(false);
  const [page, setPage] = useStorage("editor.page", PAGES.HOME);
  const [configs, setConfigs] = useState([]);
  const [textures, setTextures] = useState([]);
  const [sounds, setSounds] = useState([]);
  const [project, setProject] = useState("");
  const [settingsVisible, showSettings] = useState(false);
  const [loading, setLoading] = useState(false);
  const toggleSettings = () => showSettings(!settingsVisible);

  useEffect(() => {
    if (!Object.values(PAGES).includes(page)) {
      setPage(PAGES.HOME);
    }

    setLoading(true);
    Promise.all([
      fetchJson("src"),
      fetchJson("data/config"),
      fetchJson("data/texture"),
      fetchJson("data/sound"),
    ]).then(([[project], configs, textures, sounds]) => {
      setProject(project.split(".").shift());
      setConfigs(configs);
      setTextures(textures);
      setSounds(sounds);
      setLoading(false);
      setBoot(true);
    });
  }, []);

  const Component = Pages[page];

  return !boot ? null : (
    <Container>
      {settingsVisible && <Settings {...{ toggleSettings }} />}
      <Menu {...{ project, page, loading, setPage, toggleSettings }} />
      {Component && (
        <Component {...{ project, page, configs, textures, sounds }} />
      )}
    </Container>
  );
};

export default Editor;
