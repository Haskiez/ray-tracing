//convex lens----------------------------------------------------------
function ConvexLens(f, x, y, a){
	this.focalLength = f;
	this.posx = x;
	this.posy = y;
	this.arrow = a;
	this.offset = 10; //"width" of lens
	this.Radius = this.arrow.height*2.5; //major radius
	this.radius = 20; //minor radius
	this.midpoint = this.posx + (this.offset/2);

	this.drawLens = function(){
		c.translate(0, this.Radius);
		c.moveTo(this.posx, this.posy);
		c.lineTo(this.posx+this.offset, this.posy); //line to the right
		c.ellipse(this.posx+this.offset, this.posy-this.Radius, this.radius, this.Radius, 0, Math.PI/2, 3*Math.PI/2, true); //right ellipse
		c.lineTo(this.posx, this.posy-this.Radius*2); //line back to the left
		c.moveTo(this.posx, this.posy); //move to bottom
		c.ellipse(this.posx, this.posy-this.Radius, this.radius, this.Radius, 0, Math.PI/2, 3*Math.PI/2, false); //left ellipse
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


		this.drawLines = function() {
		//line straight across then through focal point--------------------------
		c.beginPath();
		c.moveTo(a.posx, a.posy - a.height);
		c.lineTo(this.midpoint, this.posy - a.height);
		c.stroke();
		var angle = Math.atan2((this.posy - a.height) - this.posy, this.midpoint - (this.posx - this.focalLength));
		var r = 10000;
		var x = r * Math.cos(angle);
		var y = r * Math.sin(angle);
		c.translate(this.midpoint, this.posy - a.height);
		c.lineTo(x, -y); //negative for no reason
		c.translate(-this.midpoint, -(this.posy - a.height));
		c.strokeStyle = "red";
		c.stroke();

		//line straight through center-------------------------------------------
		c.beginPath();
		c.moveTo(a.posx, a.posy - a.height);
		var angle = Math.atan2((a.posy - a.height) - this.posy, a.posx - (this.midpoint));
		var r = 10000;
		var x = r * Math.cos(angle);
		var y = r * Math.sin(angle);
		c.translate(a.posx, a.posy - a.height);
		c.lineTo(-x, -y);
		c.translate(-a.posx, -(a.posy - a.height));
		c.strokeStyle = "green";
		c.stroke();


		//line through focal point then stright across---------------------------
		c.beginPath();
		c.moveTo(a.posx, a.posy - a.height);
		var angle = Math.atan2((a.posy - a.height) - this.posy, a.posx - (this.posx - this.focalLength));
		var r = (1/Math.cos(angle)) * (this.midpoint - a.posx);
		var x = r * Math.cos(angle);
		var y = r * Math.sin(angle);
		c.translate(a.posx, a.posy - a.height);
		c.lineTo(x, y);
		c.lineTo(canvas.width, y);
		c.translate(-a.posx, -(a.posy - a.height));

		c.strokeStyle = "blue";
		c.stroke();


	}

}
