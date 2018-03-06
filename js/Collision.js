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
    let nextLevel = false
    checkBlocks().some(simbol =>{
        switch (simbol) {
            case 'i':
                loadNextLevel(Player);
                Player.changePosition();
                nextLevel = true;
                break;
            case 'o':
                loadPrevLevel(Player);
                Player.changePosition();
                nextLevel = true;
                break;
            case 'f':
                distroyBlocks(simbol);
                Sounds.get(simbol).play();
                break;
            case 'c':
                distroyBlocks(simbol);
                Sounds.get(simbol).play();
                break;
        }
    });
}

let checkBlocks = function() {
    return [
        Levels[Player.level].gMap[Player.posY][Player.posX-1],
        Levels[Player.level].gMap[Player.posY][Player.posX+1],
        Levels[Player.level].gMap[Player.posY-1][Player.posX],
        Levels[Player.level].gMap[Player.posY+1][Player.posX]
    ]
}

let distroyBlocks = function(block) {
    Levels[Player.level].gMap[Player.posY][Player.posX-1] == block ? 
        Levels[Player.level].gMap[Player.posY][Player.posX-1] = "g" : null;
    Levels[Player.level].gMap[Player.posY][Player.posX+1] == block  ?
        Levels[Player.level].gMap[Player.posY][Player.posX+1] = "g" : null;
    Levels[Player.level].gMap[Player.posY-1][Player.posX] == block ? 
        Levels[Player.level].gMap[Player.posY-1][Player.posX] = "g" : null;
    Levels[Player.level].gMap[Player.posY+1][Player.posX]  == block  ?
        Levels[Player.level].gMap[Player.posY+1][Player.posX] = "g" : null;
}