const express = require("express");
const cors = require("cors");
const helmet = require("helmet");

const configureRoutes = require("../config/routes");

const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json());

configureRoutes(server);

//  test
server.get("/", (req, res) => {
  res.send(`<h2> looking good!</h2>`);
});

module.exports = server;
