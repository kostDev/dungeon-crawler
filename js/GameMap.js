const MapWidth = canvas.width = 960;
const MapHeight = canvas.height = 480;
// -----------------------------------
const BLOCK32 = 32;
const MAX_BlocksY = MapHeight / BLOCK32; // 32 - block size
const MAX_BlocksX = MapWidth / BLOCK32;


let ClearScreen = function(ctx) {
    ctx.clearRect(0, 0, MapWidth, MapHeight);
}

let DrawMap = function(ctx) {
    let posX = 0, posY = 0;
	for(let y = 0; y < MAX_BlocksY; y++){
		posX = 0;
		for(let x = 0; x < MAX_BlocksX; x++){
            let imgName = Levels[Player.level].gMap[y][x];
            ctx.drawImage(Tiles.get(imgName), posX, posY, BLOCK32,BLOCK32);
            // ctx.fillStyle= 'rgb(' + Math.floor(235-4.5*x) + ',' +
            //     Math.floor(225-15.5*y) + ',11)';
            // ctx.fillRect(posX,posY,BLOCK32,BLOCK32);
			posX +=32;
		}
		posY += 32;
	}
}

// background for canvas
let drawPatternForMap = function(ctx) {
    ctx.fillStyle = ctx.createPattern(Tiles.get("g"), "repeat");
    ctx.fillRect(0, 0, canvas.width, canvas.height);
}
