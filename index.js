import "core-js/stable";
import "regenerator-runtime/runtime";
import React from "react";
import { render } from "react-dom";
import Editor from "./src/components/Editor/index";

render(<Editor />, document.getElementById("root"));
