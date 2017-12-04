//convex lens----------------------------------------------------------
function ConvexLens(f, x, y, a){
	this.focalLength = f;
	this.posx = x;
	this.posy = y;
	this.arrow = a;
	this.offset = 10; //"width" of lens
	this.Radius = this.arrow.height*1.5; //major radius
	this.radius = 20; //minor radius

	this.drawLens = function(){
		c.translate(0, this.Radius);
		c.moveTo(this.posx, this.posy);
		c.lineTo(this.posx+this.offset, this.posy); //line to the right
		c.ellipse(this.posx+this.offset, this.posy-this.Radius, this.radius, this.Radius, 0, Math.PI/2, 3*Math.PI/2, true); //right ellipse
		c.lineTo(this.posx, this.posy-this.Radius*2); //line back to the left
		c.moveTo(this.posx, this.posy); //move to bottom
		c.ellipse(this.posx, this.posy-this.Radius, this.radius, this.Radius, 0, Math.PI/2, 3*Math.PI/2, false); //left ellipse
		//c.translate(0, this.Radius*2);
		//c.ellipse(this.posx, this.posy-3*this.Radius, this.radius, this.Radius, 0*Math.PI/180, Math.PI/2, 3*Math.PI/2, true);
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
		c.arc(this.posx-this.focalLength, this.posy, 2.5, 0, Math.PI*2);
		c.arc(this.posx+this.focalLength+this.offset, this.posy, 2.5, 0, Math.PI*2);
		c.fill();


	}
}
