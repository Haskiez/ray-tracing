//concave lens----------------------------------------------------------
function ConcaveLens(f, x, y, a){
	this.focalLength = f;
	this.posx = x;
	this.posy = y;
	this.arrow = a;
	this.offset = 40;
	this.Radius = this.arrow.height*1.5;
	this.radius = 15;

	this.drawLens = function(){
		c.translate(0, this.Radius);
		c.moveTo(this.posx, this.posy);
		c.lineTo(this.posx+this.offset, this.posy); //line to the right
		c.ellipse(this.posx+this.offset, this.posy-this.Radius, this.radius, this.Radius, 0, Math.PI/2, 3*Math.PI/2, false); //right ellipse
		c.lineTo(this.posx, this.posy-this.Radius*2); //top line to the left
		c.moveTo(this.posx, this.posy); //move back to origin
		c.ellipse(this.posx, this.posy-this.Radius, this.radius, this.Radius, 0, Math.PI/2, 3*Math.PI/2, true);//left ellipse
		c.strokeStyle = "black";
		c.stroke();
		c.restore();
	}

	this.drawFocalPoint = function() {
		//draw focal point
		c.beginPath();
		c.translate(0, -this.Radius);
		c.strokeStyle = "black";
		c.strokeFill = "black";
		c.moveTo(this.posx, this.posy);
		c.arc(this.posx-this.focalLength, this.posy, 2.5, 0, Math.PI*2);
		c.arc(this.posx+this.focalLength+this.offset, this.posy, 2.5, 0, Math.PI*2);
		c.fill();


	}
}
