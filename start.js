#!/usr/bin/env node

const opener = require("opener");
const http = require("http");
const [, , port = 5000, startpage = "index.html"] = process.argv;
const cwd = process.cwd();
const path = require("path");
const fs = require("fs");
const mime = require("mime");
const up = +new Date();

console.log(up);

console.log("port: ", port);
console.log("start page: ", startpage);
console.log("current working dir: " + cwd);

http
  .createServer((request, response) => {
    const url = request.url.slice(1) || startpage;

    if (url === "up") return setTimeout(() => response.end("" + up), 1000);

    console.log("url: " + url);

    const files = [
      path.resolve(__dirname, url),
      path.resolve(cwd, url),
      path.resolve(__dirname, url.replace(/\..*$/, "")),
      path.resolve(cwd, url.replace(/\..*$/, "")),
    ];

    let file = files.find((file) => fs.existsSync(file));

    if (!file) {
      console.log("NOT FOUND", url, files);
    } else if (fs.lstatSync(file).isDirectory()) {
      if (fs.existsSync(path.resolve(file, "index.js"))) {
        file = path.resolve(file, "index.js");
      } else {
        console.log(file, "is dir", JSON.stringify(fs.readdirSync(file)));

        response.setHeader("Content-Type", mime.getType("json"));
        return response.end(JSON.stringify(fs.readdirSync(file)));
      }
    }

    response.setHeader("Content-Type", mime.getType(file));

    response.end(file ? fs.readFileSync(file) : "");
  })
  .listen(port);

opener("http://localhost:" + port);
