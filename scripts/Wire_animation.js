//animation setup, assign Wire objects, set their initial position, and call draw function to start animation loop
function setup() {

	for (var i = 0; i < V.logos.length; i++) {
		V.logos[i] = new Wire(V.canvas.width/2, V.canvas.height/2, V.sizeX, V.sizeY, V.glitchyness, V.finalGlitchyness);
		V.logos[i].setWire();
	}

	window.requestAnimationFrame(draw);
}

//animation loop
function draw() {

	//clear canvas for next frame
	V.ctx.clearRect(0, 0, V.canvas.width, V.canvas.height);

	//glitch
	if (V.isGlitching) {
		//reset shape, glitch it, and draw it
		for (var i = 0; i < V.logos.length; i++) {
			V.logos[i].setWire();
			V.logos[i].glitchWire();
			V.logos[i].drawWire();
		}

		//reset it once more for a more stable glitching (in case glitching is about to end and we want the final Wire to be a bit more tamed)
		for (var i = 0; i < V.logos.length; i++) {
			V.logos[i].setWire();
			V.logos[i].stableGlitchWire();
		}

		//randomly decide if third Wire will be visible
		if (getRandomFloat(0, 1) <= V.renderLastChance) V.renderLast = true;
		else V.renderLast = false;

		//stop glitching after 400 millis
		setTimeout(function() {
			V.isGlitching = false;
		}, V.glitchTime);

		//else, render Wires with blinkyness
	} else {
		//render all Wires except for last one
		for (var i = 0; i < V.logos.length - 1; i++) {
			if (getRandomFloat(0, 1) > V.blinkyness) V.logos[i].drawWire();
			
		}
		//if renderLast ended up being true, then draw last Wire
		if (V.renderLast && getRandomFloat(0, 1) > V.blinkyness) V.logos[V.logoCount-1].drawWire();
	}
	
	//loop animation
	window.requestAnimationFrame(draw);
}

//triggers Wire glitches
setInterval(function() {
	V.isGlitching = true
}, V.downTime);

//on page load, call setup to start animation
window.addEventListener("DOMContentLoaded", function () {
	setup();
});