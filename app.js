const system = require("./Functions Library/system.js");
let data = system.loadData("database/1Pedro.json");

console.log("Estos son los datos guardados");
console.log(data);
console.log("Ahora guardamos el timestand de este momento en una variable");
data = data.push({ lastMoment: new Date().getTime() });
console.log("Ahora vemos lo que tenemos guardado en la variable");
console.log(data);
console.log("Ahora guardamos los datos en el archivo");
system.saveData("database/1Pedro.json", data);
