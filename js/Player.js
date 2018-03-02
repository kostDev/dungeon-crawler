const Player = {
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
    let data = null;
    switch(e.key){
        case "d":
            data = collisionCheck(Levels[Player.level].gMap[Player.posY][Player.posX+1]);
			if(data.state){
                Player.posX += 1;
                Sounds.get('m').play();
                //console.log(Player.posX);
			}
			break;
        case "a":
            data = collisionCheck(Levels[Player.level].gMap[Player.posY][Player.posX-1]);
			if(data.state){
                Player.posX -= 1;
                Sounds.get('m').play();
                //console.log(Player.posX);
			}
			break;
        case "w":
            data = collisionCheck(Levels[Player.level].gMap[Player.posY-1][Player.posX]);
			if(data.state){
                Player.posY -= 1;
                Sounds.get('m').play();
                //console.log(Player.posY);
			}
			break;
        case "s":
            data = collisionCheck(Levels[Player.level].gMap[Player.posY+1][Player.posX]);
			if(data.state){
                Player.posY += 1;
                Sounds.get('m').play();
                //console.log(Player.posY);
			}
            break;
        // -- different events
        // e - break/take/open the fake wall
        case "e":
            checkPosition(Player);
            break;
    }
    data = null;
}

window.addEventListener("keyup", playerKeys);