const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();
//Carrega todas as rotas
const veiculos = require("./routes");
const issue2options = {
    origin: true,
    methods: ['POST', 'GET', 'HEAD', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
    credentials: true,
    maxAge: 3600,
    exposedHeaders: ['Total-Count', 'Unread-Count'],
  };
  
  app.use(cors(issue2options));
  app.options('*', cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

veiculos.routes(app);

module.exports = app;