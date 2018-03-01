let Player = {
    posX : 1,
    posY : 1,
    simbol : 'h',
    level: "level1",
}

let DrawPlayer = function(ctx) {
    ctx.drawImage(
        Tiles.get(Player.simbol), 
        Player.posX * BLOCK32, Player.posY * BLOCK32, 
        BLOCK32, BLOCK32
    );
}

let playerKeys = function(e) {
    switch(e.key){
		case "d":
			if(collisionCheck(Levels[Player.level].gMap[Player.posY][Player.posX+1])){
                Player.posX += 1;
                //console.log(Player.posX);
			}
			break;
		case "a":
			if(collisionCheck(Levels[Player.level].gMap[Player.posY][Player.posX-1])){
                Player.posX -= 1;
                //console.log(Player.posX);
			}
			break;
		case "w":
			if(collisionCheck(Levels[Player.level].gMap[Player.posY-1][Player.posX])){
                Player.posY -= 1;
                //console.log(Player.posY);
			}
			break;
		case "s":
			if(collisionCheck(Levels[Player.level].gMap[Player.posY+1][Player.posX])){
                Player.posY += 1;
                //console.log(Player.posY);
			}
            break;
        // -- different events
        case "b":
            Levels[Player.level].gMap[Player.posY][Player.posX-1] == "f" ? 
                Levels[Player.level].gMap[Player.posY][Player.posX-1] = "g" : null;
            Levels[Player.level].gMap[Player.posY][Player.posX+1] == "f" ?
                Levels[Player.level].gMap[Player.posY][Player.posX+1] = "g" : null;
            Levels[Player.level].gMap[Player.posY-1][Player.posX] == "f" ? 
                Levels[Player.level].gMap[Player.posY-1][Player.posX] = "g" : null;
            Levels[Player.level].gMap[Player.posY+1][Player.posX]  == "f" ?
                Levels[Player.level].gMap[Player.posY+1][Player.posX] = "g" : null;
            break;
	}
}

window.addEventListener("keyup", playerKeys);