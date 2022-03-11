const fs = require("fs");

function loadData(url) {
  //2 Cargamos los datos
  let data = fs.readFileSync(url, "utf8");
  //3 Convertimos los datos a un objeto
  let json = JSON.parse(data);
  //4 Devolvemos el objeto
  return json;
}

module.exports = loadData;
