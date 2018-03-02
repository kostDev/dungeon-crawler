let collisionCheck = function(ch) {
    let state = false;
    switch(ch) {
        case "w":
        case "f":
            break;
        case "g":
            state = true;
            break;
    } 
    return state;
}