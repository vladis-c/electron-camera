import {contextBridge, ipcRenderer} from 'electron';

contextBridge.exposeInMainWorld('electronAPI', {
  getImage: (
    callback: (event: Electron.IpcRendererEvent, ...args: any[]) => void,
  ) => ipcRenderer.on('get-image', callback),
  closeCamera: () => ipcRenderer.send('close-camera')
});
