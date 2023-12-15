export const reloader = () => {
  try {
    require('electron-reloader')(module);
  } catch {
    console.log('reloader failed');
  }
};