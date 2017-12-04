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


	this.drawLine1 = function() {
    // line straight to mirror through focal point------------------------------------------------------------------------
    var angle = Math.atan2(((this.posy - a.height) - (this.posy)), (this.posx) - (this.posx - this.focalLength));
    var r = (1 / Math.sin(angle)) * (this.posx - this.focalLength);
    var x = r * Math.cos(angle);
    var y = r * Math.sin(angle);
		c.moveTo(a.posx, a.posy-a.height);
		c.lineTo(this.posx , this.posy - a.height);
		// c.lineTo(this.posx - this.focalLength, this.posy);
		c.translate(this.posx , this.posy - a.height);
    c.lineTo(x, y);

    // line to center of mirror and back------------------------------------------------------------------------------------

    //
		// c.moveTo(a.posx, a.posy-a.height);
		// c.lineTo(this.posx-this.focalLength, this.posy);
		// c.lineTo(this.posx+10, this.posy+this.Radius-23);
		// c.lineTo(0, this.posy+a.height+15);

		c.stroke();
	}


	this.drawLine2 = function() {
    // line to center of mirror and back------------------------------------------------------------------------------------
		c.translate(-this.posx , -(this.posy - a.height));
		c.moveTo(a.posx, a.posy - a.height);
		c.lineTo(this.posx+this.offset/2, this.posy);
		c.lineTo(0, this.posy+a.height+15);
		c.stroke();
	}
}
