(function() {
    var requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame ||
                                window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;
    window.requestAnimationFrame = requestAnimationFrame;
  })();

const ctx = canvas.getContext('2d');

function Update() {
    ClearScreen(ctx);
    DrawMap(ctx);
}

requestAnimationFrame(Update);