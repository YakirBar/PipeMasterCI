const express = require("express");
const cors = require("cors");
const app = express();
const port = 4041;

app.use(express.json());

app.use(express.static("public"));

app.use(cors({ origin: "http://localhost:4040", credentials: true }));

app.get("*", (req, res) => res.sendFile("public/index.html"));

module.exports = { app, port };