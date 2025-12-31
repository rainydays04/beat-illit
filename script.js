// Source - https://stackoverflow.com/a
// Posted by jaredwilli, modified by community. See post 'Timeline' for change history
// Retrieved 2025-12-31, License - CC BY-SA 4.0

(function() {
  const canvas = document.getElementById('canvas');
  const context = canvas.getContext('2d');

  // resize the canvas to fill browser window dynamically
  window.addEventListener('resize', resizeCanvas, false);
        
  function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
                
    /**
     * Your drawings need to be inside this function otherwise they will be reset when 
     * you resize the browser window and the canvas goes will be cleared.
     */
    drawStuff(); 
  }
  
  resizeCanvas();
        
  function drawStuff() {
    // do your drawing stuff here
  }
})();
