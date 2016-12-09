//   ___       __       ___      ________      _______           ___      ___ 
//  |\  \     |\  \    |\  \    |\   __  \    |\  ___ \         |\  \    /  /|
//  \ \  \    \ \  \   \ \  \   \ \  \|\  \   \ \   __/|        \ \  \  /  / /
//   \ \  \  __\ \  \   \ \  \   \ \   _  _\   \ \  \_|/__       \ \  \/  / / 
//    \ \  \|\__\_\  \   \ \  \   \ \  \\  \|   \ \  \_|\ \       \ \    / /  
//     \ \____________\   \ \__\   \ \__\\ _\    \ \_______\       \ \__/ /   
//      \|____________|    \|__|    \|__|\|__|    \|_______|        \|__|/    
//                                                                             

//object wrap for WireV
var V = {};

//----------**SETUP**----------//

//canvas ID
V.canvas = document.getElementById('userCanvas');

//determines the width of the wireV shape
V.sizeX = 85;

//determines the height of the wireV shape
V.sizeY = 100;

//number of rendered WireV objects
V.logoCount = 3;

//chance that the final WireV in the object array doesn't render after glitching (between 0 - 1, the higher, the more likely it is to render)
//might not render WireV if logoCount = 1 and renderLastChance < 1
V.renderLastChance = 0.5;

//determines whether or not wireV randomization locks into a grid
V.gridLock = true;

//determines distance between grid points if gridlocked (make gridSize = sizeX for perfectly geometric arrangements)
V.gridSize = 85;

//colors
V.colorR = 0;
V.colorG = 0;
V.colorB = 0;

//----------**ANIMATION**----------//

//determines how radically wireV glitches
V.glitchyness = 60;

//determines how radically glitched the final wireV will be once it stops glitching (must be at least (gridSize / 2 + 1) if wireV is to change after glitching)
V.finalGlitchyness = 50;

//determines amount of time that it takes wireV to stop glitching in millis (the duration of the glitch, essentially)
V.glitchTime = 400;

//determines amount of time spent not glitching in millis (calculated from the point where wireV begins glitching)
V.downTime = 7000;

//determines how often wireV blinks when not glitching (between 0 - 1, the higher, the more blinky)
V.blinkyness = 0.02;

//----------**NO TOUCHY**----------//

//set up canvas context
V.ctx = V.canvas.getContext('2d');

//will hold WireV objects
V.logos = new Array(V.logoCount);

//determines whether or not to render the last WireV in the array (starts as true to ensure initial visibility)
V.renderLast = true;

//determines whether or not WireV is glitching (starts as false so as to give user a view of the base shape)
V.isGlitching = false;