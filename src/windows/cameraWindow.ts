import {BrowserWindow, ipcMain} from 'electron';
import path from 'path';

const cameraWindow = () => {
  const win = new BrowserWindow({
    height: 900,
    width: 900,
    show: false,
    webPreferences: {
      preload: path.join(__dirname, 'cameraPreload.js'),
    },
  });
  ipcMain.on('close-camera', () => win.close());
  win.loadFile('./src/windows/camera.html');
  win.once('ready-to-show', () => win.show());
};

export default cameraWindow;
