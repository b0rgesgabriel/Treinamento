const express = require("express");
const servidor = express();
const NeDB = require("nedb");
  filename: "teste.db",
  autoload: true,
});

 servidor.get("/teste",  (request, response) => {
  db.find({}).exec((erro, dados) => {
     if (erro) {
     console.error(erro);
   } else {
     response.json(dados);
   }
 });    
});

servidor.listen(4000, () => {
  console.log("o servidor já está rodando!");
});

