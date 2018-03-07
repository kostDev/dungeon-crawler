const Player = {
    posX : 1,
    posY : 1,
    simbol : 'h',
    level: "level1",
    changePosition: function() {
        this.posX = Levels[this.level].playerPosition.x;
        this.posY = Levels[this.level].playerPosition.y;
    }
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
    switch(e.keyCode){
        // right
        case 68:
            data = checkCollision(Levels[Player.level].gMap[Player.posY][Player.posX+1]);
			if(data.state){
                Player.posX += 1;
                Sounds.get('m').play();
                //console.log(Player.posX);
			}
            break;
        // left
        case 65:
            data = checkCollision(Levels[Player.level].gMap[Player.posY][Player.posX-1]);
			if(data.state){
                Player.posX -= 1;
                Sounds.get('m').play();
                //console.log(Player.posX);
			}
            break;
        // up
        case 87:
            data = checkCollision(Levels[Player.level].gMap[Player.posY-1][Player.posX]);
			if(data.state){
                Player.posY -= 1;
                Sounds.get('m').play();
                //console.log(Player.posY);
			}
            break;
        // down
        case 83:
            data = checkCollision(Levels[Player.level].gMap[Player.posY+1][Player.posX]);
			if(data.state){
                Player.posY += 1;
                Sounds.get('m').play();
                //console.log(Player.posY);
			}
            break;
        // -- different events
        // e - break/take/open the fake wall
        case 69:
            checkPosition();
            break;
    }
    data = null;
}

window.addEventListener("keyup", playerKeys);