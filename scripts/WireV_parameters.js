//**SHAPE**//

//determines the width of the wireV shape
var sizeX = 85;

//determines the height of the wireV shape
var sizeY = 100;

//**GRID**//

//determines whether or not wireV randomization locks into a grid
var gridLock = true;

//determines distance between grid points if gridlocked (make same as sizeX if you wish to have perfectly geometric arrangements)
var gridSize = 85;


//**GLITCH**//

//determines how radically wireV glitches
var glitchyness = 60;

//determines how radically glitched the final wireV will be once it stops glitching (must be at least 2x + 1 gridSize if wireV is to change after glitching)
var finalGlitchyness = 50;

//determines amount of time that it takes wireV to stop glitching in millis (the duration of the glitch, basically)
var glitchTime = 400;

//determines amount of time spent not glitching in millis (calculated from the point where wireV begins glitching
var downTime = 7000;


//**BLINK**//

//determines how often wireV blinks when not glitching (between 0 and 1, the higher, the more blinky)
var blinkyness = 0.02;