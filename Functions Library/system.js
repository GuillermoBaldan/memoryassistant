const fs = require("fs");

function loadData(url) {
  //2 Cargamos los datos
  let data = fs.readFileSync(url, "utf8");
  //3 Convertimos los datos a un objeto
  let json = JSON.parse(data);
  //4 Devolvemos el objeto
  return json;
}

function saveData(url, data) {
  //1 Convertimos el objeto a un string
  let json = JSON.stringify(data);
  //2 Escribimos los datos en el archivo
  fs.writeFileSync(url, json);
}

module.exports = { loadData, saveData };
