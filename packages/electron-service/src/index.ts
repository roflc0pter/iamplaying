import { BrowserWindow, app } from "electron";
import { snapshot } from "process-list";

function createWindow() {
  const win = new BrowserWindow({
    webPreferences: {
      nodeIntegration: true,
    },
    width: 500,
    height: 500,
  });

  win.loadURL("http://localhost:3000/");
}



app.whenReady().then(createWindow);
