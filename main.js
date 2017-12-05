var canvas = document.querySelector('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext('2d');

//center line------------------------------------------------------------
c.beginPath();
c.moveTo(canvas.width, canvas.height / 2);
c.lineTo(0, canvas.height / 2);
c.stroke();


//main--------------------------------------------------------------------
var a = new Arrow(75, canvas.width / 2 - 350, canvas.height / 2);
c.beginPath();
a.drawArrow();

var concaveM = new ConcaveMirror(100, canvas.width / 2, canvas.height / 2, a);
c.beginPath();
concaveM.drawMirror();
concaveM.drawFocalPoint();
concaveM.drawLine1();

var convexM = new ConvexMirror(100, canvas.width / 2, canvas.height / 2, a);
c.beginPath();
// convexM.drawMirror();
// convexM.drawFocalPoint();

var concavel = new ConcaveLens(30, canvas.width / 2, canvas.height / 2, a);
c.beginPath();
//concavel.drawLens();
//concavel.drawFocalPoint();

var convexl = new ConvexLens(30, canvas.width / 2, canvas.height / 2, a);
c.beginPath();
//convexl.drawLens();
//convexl.drawFocalPoint();
