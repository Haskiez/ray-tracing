//convex mirror----------------------------------------------------------
function ConvexMirror(f, x, y, a){
	this.focalLength = f;
	this.cof = 2*f; //center of curvature
	this.posx = x;
	this.posy = y;
	this.arrow = a;
	this.offset = 5;
	this.Radius = this.arrow.height*1.5;
	if (this.Radius < 30) this.Radius = 30;
	this.radius = 20;
	//this.radius = this.Radius / 2;

	this.drawMirror = function(){
		c.translate(0, this.Radius);
		c.moveTo(this.posx, this.posy);
		c.lineTo(this.posx+this.offset/2, this.posy);
		c.lineTo(this.posx+this.offset/2, this.posy-this.Radius*2);
		//c.ellipse(this.posx+this.offset, this.posy-this.Radius, this.radius, this.Radius, 0, Math.PI/2, 3*Math.PI/2, true);
		c.lineTo(this.posx, this.posy-this.Radius*2);
		c.moveTo(this.posx, this.posy);
		c.ellipse(this.posx, this.posy-this.Radius, this.radius, this.Radius, 0, Math.PI/2, 3*Math.PI/2, false);
		//c.translate(0, this.Radius*2);
		//c.ellipse(this.posx, this.posy-3*this.Radius, this.radius, this.Radius, 0*Math.PI/180, Math.PI/2, 3*Math.PI/2, true);

		c.strokeStyle = "black";
		c.fillStyle = "black";
		c.fill();
		c.stroke();
		c.restore();

	}

this.drawFocalPoint = function() {
		//draw focal point
		c.beginPath();
		c.translate(0, -this.Radius);
		c.strokeStyle = "black";
		c.strokeFill = "black";
		c.arc(this.posx+this.focalLength, this.posy, 2.5, 0, Math.PI*2);
		c.arc(this.posx+this.cof, this.posy, 2.5, 0, Math.PI*2);
		c.fill();
	}

this.drawLines = function() {
		//horizontal line reflected from focal point--------------------------------------------------------------------
		c.strokeStyle = "red";
		c.moveTo(a.posx, a.posy-a.height);
		c.setLineDash([]);
		c.lineTo(this.posx, a.posy-a.height);
		c.stroke();
		//c.setLineDash([5]); //probably don't want to do this
		c.lineTo(this.posx + this.focalLength, this.posy);
		c.stroke();
		c.setLineDash([]);
		var angle = Math.atan2((a.posy - a.height) - this.posy, this.posx - (this.posx + this.focalLength));
		var r = 1000; //doesn't matter, just  needs to go off screen
		var x = r * Math.cos(angle);
		var y = r * Math.sin(angle);
		c.beginPath();
		c.moveTo(this.posx, this.posy - a.height);
		c.translate(this.posx, this.posy-a.height);
		c.lineTo(x, y);

		c.stroke();
		c.translate(-this.posx, -(this.posy-a.height));

		//line to center and reflected across x-axis------------------------------------------------------------------------
		c.beginPath();
		var angle = Math.atan2((a.posy - a.height) - this.posy, a.posx - (this.posx));
		var r = (1/Math.cos(angle)) * (this.posx - a.posx);
		var x = r * Math.cos(angle);
		var y = r * Math.sin(angle);
		c.moveTo(a.posx, a.posy - a.height);
		c.translate(a.posx, a.posy - a.height);
		c.lineTo(x, y);
		c.translate(-a.posx, -(a.posy - a.height));

		//reflected line
		c.translate(this.posx, this.posy);
		angle = -angle;
		var r = (1/Math.cos(angle)) * (this.posx);
		var x = r * Math.cos(angle);
		var y = r * Math.sin(angle);
		c.lineTo(-x, -y);
		c.translate(-this.posx, -this.posy);

		//virtual line
		c.moveTo(this.posx, this.posy);
		c.translate(this.posx, this.posy);
		var r = 1000;
		angle = angle + Math.PI;
		var x = r * Math.cos(angle);
		var y = r * Math.sin(angle);
		c.lineTo(x, y);



		c.strokeStyle = "green";
		c.stroke();




		// //line to cof (maybe not correct)
		// c.beginPath();
    //
		// c.moveTo(a.posx, a.posy-a.height);
		// c.lineTo(this.posx+this.cof, this.posy);
		// c.strokeStyle = "green";
		// c.stroke();



}


}
