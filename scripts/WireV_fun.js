//random float generator
function getRandomFloat(min, max) {
	return Math.random() * (max - min) + min;
}

//used to generate random numbers for wireV coordinate randomization
function getRandomDisplacement(min, max) {
	var temp = Math.random() * (max - min) + min;
	
	//round to gridSize
	if (V.gridLock) return Math.round(temp / V.gridSize) * V.gridSize;
	else return temp;
}

//wireV object
function WireV(newX, newY, newSizeX, newSizeY, newGlitchAmount, newStableGlitchAmount) {

	this.X = newX;
	this.Y = newY;
	this.sizeX = newSizeX;
	this.sizeY = newSizeY;

	this.glitchAmount = newGlitchAmount;
	this.stableGlitchAmount = newStableGlitchAmount;

	//number of points in drawn shape
	this.shapePoints = 4;
	//array size * 2 for holding both X and Y values of shape coordinates
	this.coords = new Array(this.shapePoints * 2);

	//sets lines to base shape
	this.setWire = function() {
		//top left coordinate
		this.coords[0] = this.X - this.sizeX;
		this.coords[1] = this.Y - this.sizeY;

		//top middle coordinate
		this.coords[2] = this.X;
		this.coords[3] = this.Y - this.sizeY / 2;

		//top right coordinate
		this.coords[4] = this.X + this.sizeX;
		this.coords[5] = this.Y - this.sizeY;

		//bottom middle coordinate
		this.coords[6] = this.X;
		this.coords[7] = this.Y + this.sizeY;
	}

	//draws shape
	this.drawWire = function() {
		V.ctx.beginPath();

		V.ctx.lineCap = 'round';
		V.ctx.lineJoin = 'round';
		V.ctx.lineWidth = 2;
		V.ctx.strokeStyle = "rgba(255, 255, 255, 1)";

		V.ctx.moveTo(this.coords[0], this.coords[1]);
		V.ctx.lineTo(this.coords[2], this.coords[3]);
		V.ctx.lineTo(this.coords[4], this.coords[5]);
		V.ctx.lineTo(this.coords[6], this.coords[7]);
		V.ctx.lineTo(this.coords[0], this.coords[1]);

		V.ctx.closePath();
		V.ctx.stroke();
	}

	//randomizes shape points drastically
	this.glitchWire = function() {
		for (var i = 0; i < this.coords.length; i++) {
			this.coords[i] += getRandomDisplacement(-this.glitchAmount, this.glitchAmount);
		}
	}

	//randomizes shape points more subtly
	this.stableGlitchWire = function() {
		for (var i = 0; i < this.coords.length; i++) {
			this.coords[i] += getRandomDisplacement(-this.stableGlitchAmount, this.stableGlitchAmount);
		}
	}
}