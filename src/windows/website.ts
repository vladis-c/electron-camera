import {BrowserWindow} from 'electron';

const websiteWindow = () => {
  const win = new BrowserWindow({
    width: 1400,
    height: 900,
    show: false,
  });
  win.loadURL('https://taiste.com');
  win.once('ready-to-show', () => win.show());
};

export default websiteWindow;
