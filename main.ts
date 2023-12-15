import {app, BrowserWindow, ipcMain} from 'electron';
import path from 'path';
import menu from './src/menu';
import {reloader} from './src/helpers';

const createWindow = () => {
  const win = new BrowserWindow({
    height: 500,
    width: 800,
    webPreferences: {preload: path.join(__dirname, 'preload.js')},
  });
  ipcMain.on('image', (_, data) => {
    win.webContents.send('get-image', data);
  });
  win.loadFile('index.html');
};

app.whenReady().then(() => {
  createWindow();

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

menu();
reloader();
