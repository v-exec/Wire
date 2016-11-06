//   ___       __       ___      ________      _______           ___      ___ 
//  |\  \     |\  \    |\  \    |\   __  \    |\  ___ \         |\  \    /  /|
//  \ \  \    \ \  \   \ \  \   \ \  \|\  \   \ \   __/|        \ \  \  /  / /
//   \ \  \  __\ \  \   \ \  \   \ \   _  _\   \ \  \_|/__       \ \  \/  / / 
//    \ \  \|\__\_\  \   \ \  \   \ \  \\  \|   \ \  \_|\ \       \ \    / /  
//     \ \____________\   \ \__\   \ \__\\ _\    \ \_______\       \ \__/ /   
//      \|____________|    \|__|    \|__|\|__|    \|_______|        \|__|/    
//                                                                             

//----------**SIZE**----------//

//determines the width of the wireV shape
var sizeX = 85;

//determines the height of the wireV shape
var sizeY = 100;

//----------**NUMBER**----------//

//number of rendered WireV objects
var logoCount = 3;

//chance that the final WireV in the object array doesn't render after glitching (between 0 - 1, the higher, the more likely it is to render)
//might not render WireV if logoCount = 1 and renderLastChance < 1
var renderLastChance = 0.5;

//----------**GRID**----------//

//determines whether or not wireV randomization locks into a grid
var gridLock = true;

//determines distance between grid points if gridlocked (make same as sizeX if you wish to have perfectly geometric arrangements)
var gridSize = 85;

//----------**ANIMATION**----------//

//determines how radically wireV glitches
var glitchyness = 60;

//determines how radically glitched the final wireV will be once it stops glitching (must be at least (gridSize * 2 + 1) if wireV is to change after glitching)
var finalGlitchyness = 50;

//determines amount of time that it takes wireV to stop glitching in millis (the duration of the glitch, essentially)
var glitchTime = 400;

//determines amount of time spent not glitching in millis (calculated from the point where wireV begins glitching)
var downTime = 7000;

//determines how often wireV blinks when not glitching (between 0 - 1, the higher, the more blinky)
var blinkyness = 0.02;