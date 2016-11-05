//random float generator
function getRandomFloat(min, max) {
	return Math.random() * (max - min) + min;
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
		this.dotTopMiddleX += getRandomFloat(-this.glitchAmount, this.glitchAmount);
		this.dotTopMiddleY += getRandomFloat(-this.glitchAmount, this.glitchAmount);

		this.dotTopLeftX += getRandomFloat(-this.glitchAmount, this.glitchAmount);
		this.dotTopLeftY += getRandomFloat(-this.glitchAmount, this.glitchAmount);

		this.dotTopRightX += getRandomFloat(-this.glitchAmount, this.glitchAmount);
		this.dotTopRightY += getRandomFloat(-this.glitchAmount, this.glitchAmount);

		this.dotBottomMiddleX += getRandomFloat(-this.glitchAmount, this.glitchAmount);
		this.dotBottomMiddleY += getRandomFloat(-this.glitchAmount, this.glitchAmount);
	}

	//randomizes shape points more subtly
	this.stableGlitchWire = function() {
		this.dotTopMiddleX += getRandomFloat(-this.stableGlitchAmount, this.stableGlitchAmount);
		this.dotTopMiddleY += getRandomFloat(-this.stableGlitchAmount, this.stableGlitchAmount);

		this.dotTopLeftX += getRandomFloat(-this.stableGlitchAmount, this.stableGlitchAmount);
		this.dotTopLeftY += getRandomFloat(-this.stableGlitchAmount, this.stableGlitchAmount);

		this.dotTopRightX += getRandomFloat(-this.stableGlitchAmount, this.stableGlitchAmount);
		this.dotTopRightY += getRandomFloat(-this.stableGlitchAmount, this.stableGlitchAmount);

		this.dotBottomMiddleX += getRandomFloat(-this.stableGlitchAmount, this.stableGlitchAmount);
		this.dotBottomMiddleY += getRandomFloat(-this.stableGlitchAmount, this.stableGlitchAmount);
	}
}