(function() {
    var requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame ||
                                window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;
    window.requestAnimationFrame = requestAnimationFrame;
  })();

const ctx = canvas.getContext('2d');

function Update() {
    ClearScreen(ctx);
    drawPatternForMap(ctx);
    DrawMap(ctx);
    DrawPlayer(ctx);
    requestAnimationFrame(Update);
}

requestAnimationFrame(Update);