sceneEl.addEventListener("markerFound", (e) => {
    isMarkerVisible = true;
});

sceneEl.addEventListener("markerLost", (e) => {
    isMarkerVisible = false;
});

function handleRotation(event) {
    if (isMarkerVisible) {
      el.object3D.rotation.y +=
        event.detail.positionChange.x * rotationFactor;

      el.object3D.rotation.x +=
        event.detail.positionChange.y * rotationFactor;
    }
  };