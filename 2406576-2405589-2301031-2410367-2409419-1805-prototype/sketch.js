//INITIALISE VARIABLES for tilemaps
let tilemap = []; 
// 3 dimensional tilemaps for multiple stages?
let numDown = 20;
let numAcross = 20;
let tileSize = 50;
let textures = [];

// INITIALISE PLAYER VARIABLES  
let player;
let playerSprite;
let playerSpeed = 5;
let playerSize = tileSize;

// item holding vars
let keyHeld = false;
let ladderHeld = false; 
let keySprite;  
let ladderSprite;

// tilemap bools
let grassField = true;
//let inShed = false;
//let onMountain = false;

// timer vars
let tutorial = 0;
let platformTimer = 0;

// end game vars
let gameEnd = false;
let customFont;

// floating platform valid path
let completePath = false;

// variables for floating platform
let floatingPlatformYchange = 0.83;
let Px = 712;
let Py = 750;
let Pd = 75;
let movingOn = false;
let movedOn = false;
let removeFloat = false;

// testing
//let test1 = [];
//let test2 = [];
//let keyHeld = true;
//let ladderHeld = true;
//let completePath = true;

function preload() {
    // preloads images
    // tilemap textures
    textures[0] = loadImage("grass.png");
    textures[1] = loadImage("rocks.png");
    textures[2] = loadImage("grassflowers.png");
    textures[3] = loadImage("finaltree.png");
    textures[4] = loadImage("shedongrass.png");
    textures[5] = loadImage("boulderongrass.png");
    textures[6] = loadImage("lava.png");
    textures[8] = loadImage("blank.png");
    textures[9] = loadImage("planks.png");
    textures[10] = loadImage("mountain.png");
    textures[11] = loadImage("floatingPlatform.png"); 
    textures[12] = loadImage("fence.png"); 

    // key item textures
    keySprite = loadImage("key.png");
    keySprite2 = loadImage("key.png");
    ladderSprite = loadImage("ladder.png");
    
    // for the endscreen
    customFont = loadFont('ka1.ttf');
    platformSprite = loadImage("floatingPlatform.png");

    // player sprite
    playerSprite = loadImage("character.png");
}

function setup() {
    //completePath = true;

    frameRate(60);
  //create a black background behind the assets in case an error leaves background visible
    createCanvas(1100, 1000);
    background(0,255,0);

    // reiterate all the tilemap setup for each tilemap?
    let tileID = 0; // sets tileID for the first tile 

    //Creates tiles
    // add an If and Booleans to detect which tilemap and corresponding graphicMap and rules should be used?
    for (let across = 0; across < numAcross; across++) {
        tilemap[across] = [];
        for (let down = 0; down < numDown; down++) {
            //remove this outdated code || let x = across * tileSize; // multiplies across value by tileSize to get pixel position on x axis
            // remove this outdated code || let y = down * tileSize; // multiplies down value by tileSize to get pixel position on y axis

            //Setting Texture For Tile
            let textureNum = graphicMap[down][across];

    
            tilemap[across][down] = new Tile(textures[textureNum], across, down, tileSize, tileID); // creates tile

            tileID++;
        }
    }
    //Tile creation finished

    player = new Player(playerSprite, 3, 4, tileSize, playerSpeed, tileSize, tileRules);
}

function draw() {
    movingOn = false;
    background(0);
    noStroke();

    // only runs tilemap if the player is in the starting area
    if (grassField){
        // Loops through all tiles each time draw() is called
    for (let across = 0; across < numAcross; across++) {
        for (let down = 0; down < numDown; down++) {
            tilemap[across][down].display(); 
            //tilemap[across][down].debug(); 
            // runs debug() and debug() method for each tile
        }
    }
    // Finishes looping through all tiles within each draw() loop
    }
    // Loops through all tiles each time draw() is called
    //for (let across = 0; across < numAcross; across++) {
        //for (let down = 0; down < numDown; down++) {
            //tilemap[across][down].display(); 
            //tilemap[across][down].debug(); 
            // runs debug() and debug() method for each tile
        //}
    //}
    // Finishes looping through all tiles within each draw() loop
//display key
//keyImg.display();
// placing key below player so player can go over it 
// key will disappear when player walks over it
// toggles a boolean to show you picked up the key  



        // to deduce floating platform coordinates
        //fill(255);
        //rect(700,700,100,150);
    
    // every frame, the platform is not in place
    completePath = false;
    // display platform
    if (!removeFloat){
        image(platformSprite, Px, Py, Pd, Pd);
    }
    //image(platformSprite, Px, Py, Pd, Pd);
    // if statments for direction change
    Py = Py + floatingPlatformYchange;
    // if platform hits bottom changes direction to up 
    if(Py >= 925){
    floatingPlatformYchange *= -1; 
    
    }
        
        // if platform hits middle changes direction to down
    if(Py <= 500){
        floatingPlatformYchange *= -1; 
      
    }
    // between 700 and 850 triggers boolean
    if(Py >= 700 && Py <= 850){
        completePath = true;
        // boolean allows player to move over the tiles the platform moves over
    }
    // run player methods every frame 
    player.display();
    player.move();


    // displays tutorial text for 600 frames; 10 seconds
    if (tutorial < 600){
        tutorial++;
        //noStroke();
        fill(255);
        textAlign(LEFT, TOP);
        text("WASD to move", 20, 20);
        text("Find items to escape", 20, 40);
    } 
    
    //create white lines around the shed
    stroke(255);
    strokeWeight(2);
    // x, y, x, y
    line(500,0,500,200);
    line(500,250,500,500);
    line(500,500,1000,500);
    line(999,0,999,500);
    line(500,1,1000,1);

    // display the key until it has been picked up
    if (!keyHeld){
        image(keySprite, 50, 50, 50, 50);
    }

    // display the ladder until it has been picked up
    if (!ladderHeld){
        image(ladderSprite, 750, 200, 50, 50);
    }

        // display inventory bar
        fill(0,0,255);
        rect(1000,0,100,1000)
    
        // display inventory text
        fill(255);
        text("Inventory", 1015, 20);
    
        // display key upon pickup
        if (keyHeld){
            image(keySprite2, 1000, 50, 100, 100);
    
        }
    
        // display ladder upon pickup
        if (ladderHeld){
            image(ladderSprite, 1015, 165, 70, 70);
        }
        

    // if the game is over, display the end screen
    if (gameEnd){
        // Set the custom font
        textFont(customFont); 
        // Initial color
        textColor = color(250, 217, 85); 
        background(7, 8, 7);
        // runs the function from endscreen.js
        displayEndScreen();
    }


}






 