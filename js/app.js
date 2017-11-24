var canvas = document.querySelector("canvas");
var ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

ctx.strokeStyle = '#BADA55';
ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.lineWidth = 15;
ctx.globalCompositeOperation = 'hue';

var isDrawing = false;
var lastX = 0;
var lastY = 0;
var hue = 0;
var direction = true;


function draw(e) {
	if(!isDrawing) return; // detiene la funcion
	console.log(e);
	ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
	ctx.beginPath();
	// comienza desde
	ctx.moveTo(lastX, lastY);
	// va hacia
	ctx.lineTo(e.offsetX, e.offsetY);
	ctx.stroke();
	[lastX, lastY] = [e.offsetX, e.offsetY];
	hue++;
	if (hue >= 360) {
		hue = 0;
	}

	if (ctx.lineWidth >= 15 || ctx.lineWidth <= 1) {
		direction = !direction;
	}

	if (direction) {
		ctx.lineWidth++;
	} else {
		ctx.lineWidth--;
	}
}

canvas.addEventListener('mousedown', (e) => {
	isDrawing = true;
	[lastX, lastY] = [e.offsetX, e.offsetY];
});

canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mouseup', () => isDrawing = false);
canvas.addEventListener('mouseout', () => isDrawing = false);
