//concave lens----------------------------------------------------------
function ConcaveLens(f, x, y, a){
	this.focalLength = f;
	this.posx = x;
	this.posy = y;
	this.arrow = a;
	this.offset = 40;
	this.Radius = this.arrow.height*1.5;
	this.radius = 15;
	this.midpoint = this.posx + this.offset / 2;

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
		c.moveTo(this.midpoint, this.posy);
		c.arc(this.midpoint-this.focalLength, this.posy, 2.5, 0, Math.PI*2);
		c.arc(this.midpoint+this.focalLength, this.posy, 2.5, 0, Math.PI*2);
		c.fill();


	}


	this.drawLines = function() {
		c.beginPath();
		//line straight across then away from focal point--------------------------------------------
		c.strokeStyle = "red";
		c.moveTo(a.posx, a.posy-a.height);
		c.lineTo(this.midpoint, this.posy-a.height);
		c.stroke();
		c.translate(this.midpoint, this.posy-a.height);
		var angle = Math.atan2((a.posy - a.height) - this.posy, this.midpoint - (this.midpoint - this.focalLength));
		var r = 1000;
		var x = r * Math.cos(angle);
		var y = r * Math.sin(angle);
		c.lineTo(x, y);
		c.stroke();
		c.translate(-this.midpoint, -(this.posy - a.height));
		angle = angle + Math.PI;
		x = r * Math.cos(angle);
		y = r * Math.sin(angle);
		c.moveTo(this.midpoint, this.posy - a.height);
		c.translate(this.midpoint, this.posy - a.height);
		c.lineTo(x, y);
		c.translate(-this.midpoint, -(this.posy - a.height));
		c.stroke();


		//line stright through center
		c.beginPath();
		var angle = Math.atan2((a.posy - a.height) - this.posy, a.posx - (this.midpoint));
		angle = angle + Math.PI;
		var r = 10000;
		var x = r * Math.cos(angle);
		var y = r * Math.sin(angle);
		c.moveTo(a.posx, a.posy-a.height);
		c.translate(a.posx, a.posy-a.height);
		c.lineTo(x, y);
		c.strokeStyle = "green";
		c.stroke();










	}
}
