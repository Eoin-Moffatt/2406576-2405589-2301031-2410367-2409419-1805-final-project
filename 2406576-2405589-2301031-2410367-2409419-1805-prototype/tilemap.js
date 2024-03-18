// list of textures 
    
    
    //textures[0] = loadImage("grass.png");
    //textures[1] = loadImage("rocks.png");
    //textures[2] = loadImage("grassflowers.png");
    //textures[3] = loadImage("finaltree.png");
    //textures[4] = loadImage("shed.png");
    //textures[5] = loadImage("boulderongrass.png");
    //textures[6] = loadImage("lava.png");
    //textures[8] = loadImage("blank.png");
    //textures[9] = loadImage("planks.png");
    //textures[10] = loadImage("mountain.png");
    //textures[11] = loadImage("floatingPlatform.png"); 
    //textures[12] = loadImage("fence.png"); 


// tilerules is now in its own file
//let tileRules = [ 
    //         THIS IS OUR Y AXIS
    //   0  1  2  3  4  5  6  7  8  9  10 11 12 13 14 15 16 17 18 19 
    //    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,], // 0
    //    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,], // 1
    //    [0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,], // 2
    //    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,], // 3
    //    [0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,], // 4    THIS IS OUR X AXIS
    //    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,], // 5
    //    [0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,], // 6
    //    [0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,], // 7
    //    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,], // 8
    //    [0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,],  // 9
    //    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,], // 10
    //    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,], // 11
    //    [0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,], // 12
    //    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,], // 13
    //    [0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,], // 14    
    //    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,], // 15
    //    [0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,], // 16
    //    [0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,], // 17
    //    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,], // 18
    //    [0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,]  // 19
    //]

// separate tileRules for each tilemap?

let graphicMap = [ 
//   0  1  2  3  4  5  6  7  8  9 10 11 12 13 14 15 16 17 18 19
    [3, 1, 3, 3, 3, 3, 1, 1, 1, 3, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8,], // 0
    [3, 0, 0, 0, 0, 0, 0, 0, 0, 1, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8,], // 1
    [3, 0, 2, 0, 1, 2, 1, 0, 0, 3, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8,], // 2
    [1, 0, 0, 1, 2, 2, 2, 1, 0, 3, 8, 8, 9, 9, 9, 9, 9, 8, 8, 8,], // 3
    [3, 0, 0, 2, 2, 5, 2, 2, 0, 4, 9, 9, 9, 9, 9, 9, 9, 8, 8, 8,], // 4   
    [3, 0, 0, 1, 2, 2, 2, 1, 0, 5, 8, 8, 9, 9, 9, 9, 9, 8, 8, 8,], // 5
    [5, 0, 0, 0, 1, 2, 1, 0, 0, 5, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8,], // 6
    [3, 2, 1, 0, 0, 0, 0, 0, 0, 10, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8,], // 7
    [1, 0, 0, 0, 0, 0, 0, 0, 10, 10, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8,], // 8
    [5, 12, 12, 12, 12, 12, 5, 10, 10, 10, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8,],  // 9
    [6, 10, 10, 10, 10, 10, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6,], // 10
    [6, 6, 10, 10, 10, 10, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6,], // 11
    [6, 6, 6, 10, 10, 10, 10, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6,], // 12
    [6, 6, 6, 6, 10, 10, 10, 10, 6, 6, 10, 10, 10, 6, 6, 6, 6, 6, 6, 0,], // 13
    [6, 6, 6, 6, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 6, 6, 10, 10, 0, 2,], // 14   
    [6, 6, 6, 6, 6, 10, 10, 10, 10, 10, 10, 10, 10, 10, 6, 6, 10, 10, 0, 2,], // 15
    [6, 6, 6, 6, 6, 6, 10, 10, 10, 10, 10, 10, 10, 10, 6, 6, 10, 10, 0, 2,], // 16
    [6, 6, 6, 6, 6, 6, 6, 10, 10, 10, 6, 6, 6, 6, 6, 6, 6, 6, 10, 0,], // 17
    [6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 10,], // 18
    [6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6,]  // 19
]
// separate graphicmap for each tilemap?

class Tile {
    constructor(texture, across, down, tileSize, tileID) { // texture parameter at beginning of class
        this.texture = texture; // new key-value
        this.across = across;
        this.down = down;
        this.xPos = across*tileSize; // pixel generated from across
        this.yPos = down*tileSize;
        this.tileSize = tileSize;
        this.tileID = tileID;
    }

    display() {
        //Displays the texture of instance of tile class
        noStroke();
        image(this.texture, this.xPos, this.yPos, this.tileSize, this.tileSize)
    }

    debug() {
        //TILE
        noStroke(0);
        noFill();
        rect(this.xPos, this.yPos, this.tileSize, this.tileSize);

        //LABEL
        //noStroke();
        // comment out the 3 lines below to deactivate debug
        fill(255);
        textAlign(LEFT, TOP);
        text(this.tileID, this.xPos, this.yPos);
    } 
}