export interface IElectronAPI {
  loadPreferences: () => Promise<void>;
}

declare global {
  interface Window {
    electronAPI: IElectronAPI & {
      sendImage: (data: string) => void;
      getImage: (callback: (_: unknown, data: string) => void) => void;
      closeCamera: () => void;
    };
  }
}
