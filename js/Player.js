let Player = {
    posX : 1,
    posY : 1,
    simbol : 'h'
}

let DrawPlayer = function(ctx) {
    ctx.drawImage(
        Tiles.get(Player.simbol), 
        Player.posX * BLOCK32, Player.posY * BLOCK32, 
        BLOCK32, BLOCK32
    );
}

let playerMove = function(e) {
    switch(e.key){
		case "d":
			if(collisionCheck(Levels["level1"].gMap[Player.posY][Player.posX+1])){
                Player.posX += 1;
                //console.log(Player.posX);
			}
			break;
		case "a":
			if(collisionCheck(Levels["level1"].gMap[Player.posY][Player.posX-1])){
                Player.posX -= 1;
                //console.log(Player.posX);
			}
			break;
		case "w":
			if(collisionCheck(Levels["level1"].gMap[Player.posY-1][Player.posX])){
                Player.posY -= 1;
                //console.log(Player.posY);
			}
			break;
		case "s":
			if(collisionCheck(Levels["level1"].gMap[Player.posY+1][Player.posX])){
                Player.posY += 1;
                //console.log(Player.posY);
			}
			break;
	}
}

window.addEventListener("keyup", playerMove);