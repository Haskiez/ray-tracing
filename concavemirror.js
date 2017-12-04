//concave mirror----------------------------------------------------------
function ConcaveMirror(f, x, y, a){
	this.focalLength = f;
	this.posx = x;
	this.posy = y;
	this.arrow = a;
	this.offset = 40;
	this.Radius = this.arrow.height*1.5;
	this.radius = 15;

	this.drawMirror = function(){
		c.translate(0, this.Radius);
		c.moveTo(this.posx, this.posy);
		c.ellipse(this.posx, this.posy-this.Radius, this.radius, this.Radius, 0, Math.PI/2, 3*Math.PI/2, true);
		c.lineTo(this.posx+this.offset/2, this.posy-this.Radius*2);
		c.lineTo(this.posx+this.offset/2, this.posy);
		c.lineTo(this.posx, this.posy);
		//c.lineTo(this.posx+this.offset/2, this.posy);
		//c.lineTo(this.posx+this.offset/2, this.posy-this.Radius*2);
		////c.ellipse(this.posx+this.offset, this.posy-this.Radius, this.radius, this.Radius, 0, Math.PI/2, 3*Math.PI/2, false);
		//c.lineTo(this.posx, this.posy-this.Radius*2);
		//c.moveTo(this.posx, this.posy);
		//c.ellipse(this.posx, this.posy-this.Radius, this.radius, this.Radius, 0, Math.PI/2, 3*Math.PI/2, true);
		////c.translate(0, this.Radius*2);
		////c.ellipse(this.posx, this.posy-3*this.Radius, this.radius, this.Radius, 0*Math.PI/180, Math.PI/2, 3*Math.PI/2, true);

		c.strokeStyle = "black";
		c.fillStyle = "black";
		c.fill();
		c.stroke();

	}

	this.drawFocalPoint = function() {
		//draw focal point
		c.beginPath();
		c.translate(0, -this.Radius);
		c.strokeStyle = "black";
		c.strokeFill = "black";
		c.arc(this.posx-this.focalLength, this.posy, 2.5, 0, Math.PI*2);
		c.arc(this.posx+this.focalLength, this.posy, 2.5, 0, Math.PI*2);
		c.fill();


	}


	this.drawLines = function() {
		c.moveTo(a.posx, a.posy-a.height);
		c.lineTo(this.posx+this.offset/2, this.posy-a.height);
		c.lineTo(this.posx-this.focalLength, this.posy);

		c.moveTo(a.posx, a.posy-a.height);
		c.lineTo(this.posx+this.offset/2, this.posy);
		c.lineTo(0, this.posy+a.height+15);

		c.moveTo(a.posx, a.posy-a.height);
		c.lineTo(this.posx-this.focalLength, this.posy);
		c.lineTo(this.posx+10, this.posy+this.Radius-23);
		c.lineTo(0, this.posy+a.height+15);

		c.stroke();
	}
}
