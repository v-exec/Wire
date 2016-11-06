//random float generator
function getRandomFloat(min, max) {
	return Math.random() * (max - min) + min;
}

//used to generate random numbers for wireV coordinate randomization
function getRandomDisplacement(min, max) {
	var temp = Math.random() * (max - min) + min;
	
	//round to gridSize
	if (gridLock) return Math.round(temp / gridSize) * gridSize;
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

	//sets lines to base shape
	this.setWire = function() {
		this.dotTopMiddleX = this.X;
		this.dotTopMiddleY = this.Y - this.sizeY / 2;

		this.dotTopLeftX = this.X - this.sizeX;
		this.dotTopLeftY = this.Y - this.sizeY;

		this.dotTopRightX = this.X + this.sizeX;
		this.dotTopRightY = this.Y - this.sizeY;

		this.dotBottomMiddleX = this.X;
		this.dotBottomMiddleY = this.Y + this.sizeY;
	}

	//draws shape
	this.drawWire = function() {
		ctx.beginPath();
		ctx.moveTo(this.dotTopLeftX, this.dotTopLeftY);
		ctx.lineTo(this.dotTopMiddleX, this.dotTopMiddleY);
		ctx.lineTo(this.dotTopRightX, this.dotTopRightY);
		ctx.lineTo(this.dotBottomMiddleX, this.dotBottomMiddleY);
		ctx.lineTo(this.dotTopLeftX, this.dotTopLeftY);

		ctx.lineWidth = 2;
		ctx.strokeStyle = "rgba(255, 255, 255, 1)";
		ctx.stroke();
	}

	//randomizes shape points drastically
	this.glitchWire = function() {
		this.dotTopMiddleX += getRandomDisplacement(-this.glitchAmount, this.glitchAmount);
		this.dotTopMiddleY += getRandomDisplacement(-this.glitchAmount, this.glitchAmount);

		this.dotTopLeftX += getRandomDisplacement(-this.glitchAmount, this.glitchAmount);
		this.dotTopLeftY += getRandomDisplacement(-this.glitchAmount, this.glitchAmount);

		this.dotTopRightX += getRandomDisplacement(-this.glitchAmount, this.glitchAmount);
		this.dotTopRightY += getRandomDisplacement(-this.glitchAmount, this.glitchAmount);

		this.dotBottomMiddleX += getRandomDisplacement(-this.glitchAmount, this.glitchAmount);
		this.dotBottomMiddleY += getRandomDisplacement(-this.glitchAmount, this.glitchAmount);
	}

	//randomizes shape points more subtly
	this.stableGlitchWire = function() {
		this.dotTopMiddleX += getRandomDisplacement(-this.stableGlitchAmount, this.stableGlitchAmount);
		this.dotTopMiddleY += getRandomDisplacement(-this.stableGlitchAmount, this.stableGlitchAmount);

		this.dotTopLeftX += getRandomDisplacement(-this.stableGlitchAmount, this.stableGlitchAmount);
		this.dotTopLeftY += getRandomDisplacement(-this.stableGlitchAmount, this.stableGlitchAmount);

		this.dotTopRightX += getRandomDisplacement(-this.stableGlitchAmount, this.stableGlitchAmount);
		this.dotTopRightY += getRandomDisplacement(-this.stableGlitchAmount, this.stableGlitchAmount);

		this.dotBottomMiddleX += getRandomDisplacement(-this.stableGlitchAmount, this.stableGlitchAmount);
		this.dotBottomMiddleY += getRandomDisplacement(-this.stableGlitchAmount, this.stableGlitchAmount);
	}
}