const video = document.getElementById('camera');
const captureBtn = document.getElementById('capture');
const image = document.getElementById('image');

captureBtn?.addEventListener('click', () => {
  const canvas = document.createElement('canvas');
  //@ts-ignore
  canvas.width = video.videoWidth;
  //@ts-ignore
  canvas.height = video.videoHeight;
  if (!video) {
    return;
  }
  //@ts-ignore
  canvas.getContext('2d')?.drawImage(video, 0, 0, canvas.width, canvas.height);
  const dataURL = canvas.toDataURL();
  window.electronAPI.sendImage(dataURL);
});

navigator.mediaDevices.getUserMedia({video: true}).then(stream => {
  //@ts-ignore
  video.srcObject = stream;
});
