const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
require("./app/routes/paciente.routes")(app);

var corsOptions = {
  origin: "http://localhost:8081"
};
app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

const db = require("./app/models");
db.sequelize.sync({ force: true }).then(() => {
  console.log("Drop and re-sync db.");
});

app.get("/", (req, res) => {
  res.json({ message: "Aplicação Desafio Front" });
});



const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Rodando na porta ${PORT}.`);
});