var canvas = document.querySelector('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext('2d');

//center line------------------------------------------------------------
c.beginPath();
c.moveTo(window.innerWidth, window.innerHeight/2);
c.lineTo(0, window.innerHeight/2);
c.stroke();


//main--------------------------------------------------------------------
var a = new Arrow(75, window.innerWidth-500, window.innerHeight/2);
c.beginPath();
a.drawArrow();

var concaveM = new ConcaveMirror(100, window.innerWidth-300, window.innerHeight/2, a);
c.beginPath();
//concaveM.drawMirror();
//concaveM.drawFocalPoint();
//concaveM.drawLines();


var convexM = new ConvexMirror(100, window.innerWidth-200, window.innerHeight/2, a);
c.beginPath();
convexM.drawMirror();
convexM.drawFocalPoint();

var concavel = new ConcaveLens(30, window.innerWidth-100, window.innerHeight/2, a);
c.beginPath();
//concavel.drawLens();
//concavel.drawFocalPoint();

var convexl = new ConvexLens(30, window.innerWidth-150, window.innerHeight/2, a);
c.beginPath();
//convexl.drawLens();
//convexl.drawFocalPoint();
