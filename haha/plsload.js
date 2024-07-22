const onxrloaded = () => {
    XR8.addCameraPipelineModules([  // Add camera pipeline modules.
      // Existing pipeline modules.
      XR8.GlTextureRenderer.pipelineModule(),       // Draws the camera feed.
      window.LandingPage.pipelineModule(),          // Detects unsupported browsers and gives hints.
      XRExtras.FullWindowCanvas.pipelineModule(),   // Modifies the canvas to fill the window.
      XRExtras.Loading.pipelineModule(),            // Manages the loading screen on startup.
      XRExtras.RuntimeError.pipelineModule(),       // Shows an error image on runtime error.
    ])
  
    XR8.run({canvas: document.getElementById('camerafeed')})   // Request permissions and run camera.
  }
  
  window.XR8 ? onxrloaded() : window.addEventListener('xrloaded', onxrloaded)