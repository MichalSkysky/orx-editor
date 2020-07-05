import React, { useState } from "react";
import parseIni from "./parseIni.js";

const wait = (t) => new Promise((r) => setTimeout(() => r(), t));

const fetchJson = (url) => fetch(url).then((r) => r.json());

const fetchText = (url) => fetch(url).then((r) => r.text());

const getPage = (d) => window.location.href.split("#")[1] || d;

const prefix = "orx-editor.";

const fromStorage = (key, def) =>
  (localStorage.getItem(prefix + key) &&
    JSON.parse(localStorage.getItem(prefix + key))) ||
  def;

const toStorage = (key, callback) => (v) =>
  localStorage.setItem(prefix + key, JSON.stringify(v)) ||
  (callback && callback(v));

const useStorage = (key, def) =>
  useState(fromStorage(key, def)).map((v, i) => (!i ? v : toStorage(key, v)));

export {
  wait,
  fetchJson,
  getPage,
  parseIni,
  fetchText,
  fromStorage,
  toStorage,
  useStorage,
};
