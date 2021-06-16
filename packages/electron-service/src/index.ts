import { BrowserWindow, app } from "electron";
import os from "os-utils";
// import { snapshot } from "process-list";

function createWindow() {
  const win = new BrowserWindow({
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
    },
    width: 500,
    height: 500,
  });

  win.loadURL("http://localhost:3000/");

  setInterval(() => {
    os.cpuUsage((value) => {
      win.webContents.send("os-resources", {
        cpuUsage: value * 100,
        memoryUsage: os.freememPercentage() * 100,
        totalMemory: os.totalmem() / 1024,
      });
    });
  }, 1000);
}

app.whenReady().then(createWindow);
