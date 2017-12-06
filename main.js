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
var a = new Arrow(150, canvas.width / 2 - 300, canvas.height / 2);
c.beginPath();
a.drawArrow();
// var a2 = new Arrow(-75, canvas.width / 2 - 300, canvas.height / 2);
// a2.drawArrow();

var concaveM = new ConcaveMirror(100, canvas.width / 2, canvas.height / 2, a);
c.beginPath();
// concaveM.drawMirror();
// concaveM.drawFocalPoint();
// concaveM.drawLines();

var convexM = new ConvexMirror(200, canvas.width / 2, canvas.height / 2, a);
c.beginPath();
// convexM.drawMirror();
// convexM.drawFocalPoint();
// convexM.drawLines();

var concavel = new ConcaveLens(70, canvas.width / 2, canvas.height / 2, a);
c.beginPath();
concavel.drawLens();
concavel.drawFocalPoint();
concavel.drawLines();

var convexl = new ConvexLens(200, canvas.width / 2, canvas.height / 2, a);
c.beginPath();
// convexl.drawLens();
// convexl.drawFocalPoint();
// convexl.drawLines();
