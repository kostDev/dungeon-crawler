let checkCollision = function(ch) {
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

let checkPosition = function() {
    changeBlocks('f');
    changeBlocks('c');  
}
// char - name of block
let changeBlocks = function(simbol) {
    let nextLevel = false
    checkBlocks().some(el =>{
        if(el == 'i') {
            loadNextLevel(Player);
            brk = true;
        }
        if(el == simbol) Sounds.get(simbol).play();
    });
    if(!nextLevel){
        Levels[Player.level].gMap[Player.posY][Player.posX-1] == simbol ? 
            Levels[Player.level].gMap[Player.posY][Player.posX-1] = "g" : null;
        Levels[Player.level].gMap[Player.posY][Player.posX+1] == simbol  ?
            Levels[Player.level].gMap[Player.posY][Player.posX+1] = "g" : null;
        Levels[Player.level].gMap[Player.posY-1][Player.posX] == simbol ? 
            Levels[Player.level].gMap[Player.posY-1][Player.posX] = "g" : null;
        Levels[Player.level].gMap[Player.posY+1][Player.posX]  == simbol  ?
            Levels[Player.level].gMap[Player.posY+1][Player.posX] = "g" : null;
    }
}

let checkBlocks = function() {
    return [
        Levels[Player.level].gMap[Player.posY][Player.posX-1],
        Levels[Player.level].gMap[Player.posY][Player.posX+1],
        Levels[Player.level].gMap[Player.posY-1][Player.posX],
        Levels[Player.level].gMap[Player.posY+1][Player.posX]
    ]
}