let collisionCheck = function(ch) {
    let obj = {
        state : false,
        simbol : ch,
    };

    switch(ch) {
        case "g":
            obj.state = true;
            break;
    }

    return obj;
}

// data -> state && simbol, p - Player object
let checkPosition = function(p) {
    changeBlocks('f');
    changeBlocks('c');
}
// char - name of block
let changeBlocks = function(simbol) {
    [
        Levels[Player.level].gMap[Player.posY][Player.posX-1],
        Levels[Player.level].gMap[Player.posY][Player.posX+1],
        Levels[Player.level].gMap[Player.posY-1][Player.posX],
        Levels[Player.level].gMap[Player.posY+1][Player.posX]
    ].some(el =>{
        if(el == simbol) Sounds.get(simbol).play();
    });

    Levels[Player.level].gMap[Player.posY][Player.posX-1] == simbol ? 
        Levels[Player.level].gMap[Player.posY][Player.posX-1] = "g" : null;
    Levels[Player.level].gMap[Player.posY][Player.posX+1] == simbol  ?
        Levels[Player.level].gMap[Player.posY][Player.posX+1] = "g" : null;
    Levels[Player.level].gMap[Player.posY-1][Player.posX] == simbol ? 
        Levels[Player.level].gMap[Player.posY-1][Player.posX] = "g" : null;
    Levels[Player.level].gMap[Player.posY+1][Player.posX]  == simbol  ?
        Levels[Player.level].gMap[Player.posY+1][Player.posX] = "g" : null;
}