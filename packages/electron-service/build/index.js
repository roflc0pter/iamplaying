"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var electron_1 = require("electron");
function createWindow() {
    var win = new electron_1.BrowserWindow({
        webPreferences: {
            nodeIntegration: true,
        },
        width: 500,
        height: 500,
    });
    win.loadURL("http://localhost:3000/");
}
electron_1.app.whenReady().then(createWindow);
