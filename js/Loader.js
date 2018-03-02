const Tiles = new Map();
const Sounds = new Map();

let LoadFiles = function(type, Data) {
    switch(type){
        case "images":
            loadImages(Data);
            break;
        case "sounds":
            loadSounds(Data);
            break;
    }
}
//arrAddress, arrNames
let loadImages = function(Data) {
    //arr => [ address, name]
    for(let i = 0; i < Data.length; i++){
        let img = new Image();
        img.src = "images/" + Data[i][0];
        Tiles.set(Data[i][1], img);
    };
}
//arrAddress, arrNames
let loadSounds = function(Data) {
    for(let i = 0; i < Data.length; i++){
        let audio = new Audio();
        audio.src = "sounds/" + Data[i][0];
        Sounds.set(Data[i][1], audio);
    }
}

LoadFiles("images",[
    ["wall.png", 'w'],
    ["fakeWall.png", 'f'], // this wall player can break
    ["door1.png", 'i'], // door in
    ["door2.png", 'o'], // door out
    ["ground.png", 'g'],
    ["hero.png", 'h'], // player
]);

LoadFiles("sounds",[
    [""],
]);