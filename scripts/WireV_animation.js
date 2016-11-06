//animation setup, assign WireV objects, set their initial position, and call draw function to start animation loop
function setup() {

	for (var i = 0; i < V.logos.length; i++) {
		V.logos[i] = new WireV(V.canvas.width/2, V.canvas.height/2, V.sizeX, V.sizeY, V.glitchyness, V.finalGlitchyness);
		V.logos[i].setWire();
	}

	window.requestAnimationFrame(draw);
}

//animation loop
function draw() {

	//clear canvas for next frame
	V.ctx.clearRect(0, 0, V.canvas.width, V.canvas.height);

	//if glitching, reset shape, glitch it, and draw it
	//rest it once more for a more stable glitching (in case glitching is about to end and we want the final WireV to be a bit more tamed)
	//randomly decide if third WireV will be visible
	if (V.isGlitching) {
		for (var i = 0; i < V.logos.length; i++) {
			V.logos[i].setWire();
			V.logos[i].glitchWire();
			V.logos[i].drawWire();
		}

		for (var i = 0; i < V.logos.length; i++) {
			V.logos[i].setWire();
			V.logos[i].stableGlitchWire();
		}

		if (getRandomFloat(0, 1) <= V.renderLastChance) V.renderThird = true;
		else V.renderLast = false;

		//stop glitching after 400 millis
		setTimeout(function() {
			V.isGlitching = false;
		}, V.glitchTime);

		//if not glitching, then render WireVs according to blinkyness
	} else {

		//render all WireVs except for last one
		for (var i = 0; i < V.logos.length - 1; i++) {
			if (getRandomFloat(0, 1) > V.blinkyness) V.logos[i].drawWire();
		}

		//if renderLast ended up being true, then draw last WireV
		if (V.renderLast && getRandomFloat(0, 1) > V.blinkyness) V.logos[V.logoCount-1].drawWire();
	}

	//loop animation
	window.requestAnimationFrame(draw);
}

//triggers WireV glitches
setInterval(function() {
	V.isGlitching = true
}, V.downTime);

//on page load, call setup to start animation
window.addEventListener("DOMContentLoaded", function () {
	setup();
});
