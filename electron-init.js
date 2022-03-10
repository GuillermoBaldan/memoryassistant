"use strict";

const { app, BrowserWindow } = require("electron");

console.log(__dirname);

app.on("before-quit", () => {
  console.log("saliendo...");
});

app.on("ready", () => {
  let win = new BrowserWindow({
    width: 800,
    height: 600,
    title: "Memory Asistant",
    maximizable: true,
    center: true,
    frame: true,
    show: true,
    webPreferences: {
      nodeIntegration: true,
    },
  });

  win.once("ready-to-show", () => {
    win.show();
  });

  /*win.on('move', () => {
            const position = win.getPosition()
            console.log(`${position}`)
        })*/

  /* Intento de cerrar la ventana al pulsar una tecla
win.on('keyup', () => {
 win = null
 app.quit()
})
*/

  win.on("closed", () => {
    win = null;
    app.quit();
  });

  win.loadURL(`${__dirname}/index.html`);
});
