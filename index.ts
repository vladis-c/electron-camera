const imageTag = document.getElementById('imageTag');

window.electronAPI.getImage((_, data) => {
  if (imageTag) {
    //@ts-ignore
    imageTag.src = data;
    window.electronAPI.closeCamera()
  }
});
