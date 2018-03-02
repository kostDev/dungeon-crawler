const Levels =
{
    "level1": {

        "gMap": [
            ['w','o','w','w','w','w','w','w','w','w','w','w','w','w','w','w','w','w','w','w','w','w','w','w','w','w','w','w','w','w'],
            ['w','g','w','w','f','w','g','w','w','w','w','g','g','f','g','w','w','w','w','w','c','g','w','g','g','w','w','c','w','w'],
            ['w','g','w','g','g','w','g','g','g','g','g','g','w','w','g','w','w','g','g','w','w','g','g','g','g','w','g','g','g','w'],
            ['w','g','w','w','g','g','g','w','g','w','w','g','w','w','g','g','g','g','g','w','w','w','w','g','g','w','g','w','g','w'],
            ['w','g','g','g','g','w','w','w','g','w','g','g','w','w','g','w','w','g','g','f','g','g','w','w','g','w','w','w','g','w'],
            ['w','w','w','g','w','w','g','g','g','w','g','w','w','w','g','w','w','w','w','w','w','c','w','w','g','g','w','c','g','w'],
            ['w','g','w','g','w','g','g','w','w','w','g','g','w','w','g','g','g','w','w','w','w','w','w','w','w','g','w','w','g','w'],
            ['w','g','g','g','w','g','w','f','f','g','g','g','f','w','g','w','g','g','g','w','w','g','g','w','w','g','w','g','g','w'],
            ['w','g','w','w','w','g','w','c','w','w','w','w','w','w','g','w','w','w','g','w','w','w','g','g','w','g','g','g','w','w'],
            ['w','g','g','g','w','g','w','w','w','g','g','g','w','w','g','w','w','w','g','f','g','w','g','g','g','g','w','g','w','w'],
            ['w','w','w','g','w','g','g','w','w','g','w','g','w','w','g','w','g','g','g','w','g','w','g','w','w','f','w','g','g','w'],
            ['w','w','g','g','w','w','g','g','w','g','g','g','w','w','g','w','g','w','w','w','g','g','g','w','w','g','w','w','g','w'],
            ['w','g','g','g','w','w','g','w','w','w','g','w','g','g','g','w','g','g','w','w','g','w','w','w','g','g','w','w','g','w'],
            ['w','c','w','g','w','f','g','g','w','w','g','g','g','w','w','w','w','g','c','w','w','w','w','c','g','g','w','w','g','w'],
            ['w','w','w','w','w','w','w','w','w','w','w','w','w','w','w','w','w','w','w','w','w','w','w','w','w','w','w','w','i','w']
        ],
        "shadowMap" : [

        ]
    }
};

// let createBasicTemplate = function(lvlNumber) {
// 	let basicMap = [];
// 	let template = [];

// 	for(let y = 0; y < MAX_BlocksY; y++){
// 		basicMap.push([]);
// 		// -------------------------------------------------
// 		if(y >=  1 || y+1 != MAX_BlocksY) template.push([]);
// 		// -------------------------------------------------
// 		for(let x = 0; x < MAX_BlocksX; x++){
// 			basicMap[y].push(checkPosition(y,x));
// 			if(checkPosition(y,x) == 'g' && x > 0 && x < MAX_BlocksX) template[y].push('g');
// 		}
// 	}
// 	Levels['level' + lvlNumber].gMap = basicMap;
// 	return template;
// }

// let checkPosition = function(y,x) {
// 	// --- Create walls
//     if(y == 0 || y+1 == MAX_BlocksY) return 'w';
//     if(y > 0 && y+1 != MAX_BlocksY && x == 0 || x+1 == MAX_BlocksX) return 'w';
// 	// -----------------
// 	return 'g';
// }

// console.log(createBasicTemplate(1));