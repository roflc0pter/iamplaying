"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var electron_1 = require("electron");
var os_utils_1 = __importDefault(require("os-utils"));
// import { snapshot } from "process-list";
function createWindow() {
    var win = new electron_1.BrowserWindow({
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false,
        },
        width: 500,
        height: 500,
    });
    win.loadURL("http://localhost:3000/");
    setInterval(function () {
        os_utils_1.default.cpuUsage(function (value) {
            win.webContents.send("os-resources", {
                cpuUsage: value * 100,
                memoryUsage: os_utils_1.default.freememPercentage() * 100,
                totalMemory: os_utils_1.default.totalmem() / 1024,
            });
        });
    }, 1000);
}
electron_1.app.whenReady().then(createWindow);
