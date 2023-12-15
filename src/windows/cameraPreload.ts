import {contextBridge, ipcRenderer} from 'electron';

contextBridge.exposeInMainWorld('electronAPI', {
  sendImage: (data: string) => {
    new Notification('Image captured', {
      body: 'Image is successfully captured from camera window',
    });
    ipcRenderer.send('image', data);
  },
});
