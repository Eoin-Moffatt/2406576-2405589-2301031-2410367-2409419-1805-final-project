# 2406576-2405589-2301031-2410367-2409419-1805-final-project

MA1805 Escape Project

BY (the lads)
MEMBERS: Finley Morris, Matt McConachie, Eoin Moffatt, Isabelle Griffiths, Silvia d'Alessandro

OVERVIEW OF GAME
(What is your game about? What are its key mechanics? What are its main narrative
ideas and themes?)
- Files used in INDEX: sketch.js, player.js, endscreen.js, tilemap.js, tilerRules.js.
- some of people code is in the "unused code" file. 
- The player character wakes up in a field with no recollection of how they got there. Their natural instinct is to escape. Move around the area, picking up key items that will allow you to avoid obstacles and escape. 
- Graphics inspired by classic Zelda and Crosscode 
- approximately - 537 code lines (not counting unused code e.g failed.js)
- will leave the the tilemaps that we didnt end up coding on in the project for the sake of the project timeline. 

MECHANICS: 
- player movement (using WASD)
- a single moving platform 
- inventory system (graphics inspired by classic resident evil games)
- key item pick up system 
- End screen 

WHAT WE WOULD HAVE DONE GIVEN MORE TIME AND RESOURCES:
Given more time we would have included things such as more tilemaps, a death sequence and enemeies that oppose the character as well as more item pickups, and more complex puzzles.
Given more time we would have developed our original idea which was to move objects to solve puzzles, such as pushing a bomb into a boulder to blow it up. 

INDIVIDUAL CONTRIBUTIONS
(Each group member should write a short section outlining what they contributed
and their process. What did you do? Why did you do what you did?)
- We have decided to provide an update log. All group members update this section when they make a change, noting when and what the change was.  

Finley's updates;
- 28/2 ; created files for each tilemap and the player and reorganised code where necessary. Integrated player controller and tilemap; functional. This is the foundation for the project and should leave ideas for how to proceed. Using assets from class as placeholder to check code works. 
- 11/3 ; tried to figure out separating the grass tilemap into tilemapGrass. Started having various "undefined" errors, had to Ctrl z all code to fix it. Set up bools to detect which tilemap the player is in, default grassField true. 
- 14/3 11:30; Did some experimentation with arrays and tilemaps (created test arrays in sketch) to figure out possible methods to load several tilemaps. It did not work. If we are to use separate tilemaps, we will need a more complicated method. Was hoping to make it so upon hitting the tilemap transfer trigger, the tileRules[] and graphicMap[] get overwritten by the maps stored in the other tilemap files. A simple arrayX == arrayZ does not work; it either wont work or will need a loop that goes through every tile and converts them one by one. We can do it that way, or make things much simpler by working with one massive tilemap that includes all of our areas. 
12:00; added tutorial text in the top left that disappears after 10 seconds. We need to move the player's starting position.
16:00; Extended tilemap to be 20x20 instead of 10x10. We will use one huge tilemap. 
17:30; Extended graphicmap to be 20x20 and fully textured our different areas; the top let is the starting field, the top right is the inside of the shed and the bottom half is the lava area, with a gap ready for the floating platform. Reactivated Debug mode to help with coding item pickups and assigning tileRules. Separated tileRules from the tileMap file so that Ivi can fill tileRules as I do the graphics. 
18:00; Addded white lines around the shed to make it visually distinct. Add lines around the rest too? Some kind of screen border?
- 15/3 14:30; Integrating endscreen code. Set up a boolean as false and used an If statement to detect when it is true and trigger the endscreen, however the endscreen is always triggered. 
14:45; The booleans were malfunctioning because my If was under the condition "gameEnd = true" when the correct syntax is to simply enclose the bool in brackets; (gameEnd). (!gameEnd) would mean it is false.
15:00; Adapted the player.js checkTargetTile function to now acknowledge tileRules 0s as free movement, 2s as requiring the key and 3s as requiring the ladder. 
15:10; Adapted checkTargetTile and tileRules to recognise the bottom right flower patch as rule 4, which activates the endscreen upon walking on it. All that is needed to finish the project is the floating platform and a way to actually pick up the items. 
15:15; Adapted checkTargetTile and tileRules to recognise the most top left accesible tile as rule 5, which picks up the key upon walking on it. Did the same for a shed tile to pick up the ladder. All that is needed to finish the project is the floating platform and placing the item assets.
15:30; The key and ladder sprites now appear in their correct loactions and disappear when picked up. Should I make an inventory graphic?
15:45; EMERGENCY; Upon adding a 7th tileRule the player movement got completely borked for no apparent reason. Had to backtrack all the code to eventually get it fixed. Will retry but be careful. 
16:00; redid that code and its now stable. No clue why that happened. 
16:30; added an inventory system on the right of the screen that displays item sprites once they have been picked up.
16:30 onwards; supervising Matt and Eoin making the floating platform. 
- 18/3 13:00 ; Made the floating plfatorm 50% bigger. Fixed the bug causing the platform to display on top of the player rather than beneath them. Fixed the bug that made the player be trapped inside the lava tiles if they did not move all the way over the gap in the allotted time - did this by making it so that when the player goes to move across the gap, they move across the entire gap in one input and the platform then disappears and no longer permits movement. This also forces the player to move to the flower tiles that will end the game.  


Matt's Updates: 
4/3/2024 
- change assets from placeholder
- recognition that the player has picked up the key
- the key needs to be able to disappear - figuring this out
- *potential* - figured out how to display and design multiple tilemaps - for demos purposes we will use use 1 tilemap
- mood board - gives a rough idea of what we are planning to do - Eoin has finished moodboard
15/3/24
- helped with creating the floating platform with eoin 
- platform should (hopefully) change direction if working correctly 
the platform should trigger the boolean 
- UPDATE: PPLATFORM ACTUALLY MOVES 
- do not a death screen or any kind of death mechanic - so the character wont dispear/get a 'game over' when you hit the lava* 

Isabelle's Updates:
05/03/2024
- I created the key asset using piskel and got inspiration from looking up sprite key assets online. 
- I then created the Tree asset.
- I then uploaded the assets onto github and transferred them onto the tile map, where Ivi and I then placed the assets, which was the grass, floweres and trees. 
- Ivi and I deactivated Debug mode to give it a clearer finish to the tilemap. 
14/03/2024
- Ivi and I figured out how to get ride of the white lines by editing the code by doing no stroke. 
- I then moved onto creating more assets which was the planks of wood and the blank asset. 
- I then coded a whole new tilemap with the wooden planks and the blank tiles. which is seen under isabelle's code.js. (Unfortunately this code will not be used due to the change of idea to make it into one tilemap instead of seperate ones.)
- I then created more assets such as the floating platform and mountain tiles.
- I then added them to github. 

Silvia's updates:
- I've been working on some of the project assets: grass, flowers, rocks, boulders, lava, ladder, character, shed and fence. To create them I've used Piskel, website to design pixel art. The inspiration comes from pixel art and retro game in general and the the aesthetic of classic Zelda.
- I've filled the load image function with the path to each asset.
- Me and Isabelle deactivated the debug function and assembled the layout for the assets. 
- I've worked on the code to create the end screen, adding custom text to match the aesthetic of the game.
- In transferring the code from my laptop to the project folder, the colour change function stopped working. 
- I've worked on the code for the tile rules and assigned the numbers for which the character can or can't walk on. 
 


Eoin's Updates;
Matt/Eoin - 5/3/2024
- Worked on the key and pick up 
- *did* put comments however not currently appearing
- however had since working on a new key code under key.js 
- commented key code is in failed.js
15/3/24
- creating the floating platform
- made so floating platform so it changes direction
- floating platform also triggers boolean
- *it's possible for the character to become stuck in the lava if moved at wrong time
