var ctx = canvas.getContext('2d');
var columns = [];
var chars = [];

canvas.height = window.screen.height;
canvas.width = window.screen.width;

ctx.translate(canvas.width, 0);
ctx.scale(-1, 1);

for (i = 0; i < 256; columns[i] = 1, chars[i++] = '゠'); 

ctx.shadowBlur = 3;

function step() {
    ctx.fillStyle = 'rgba(0,0,0,0.02)';
    ctx.shadowColor = '#000';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    columns.map(function (value, index) {
        
        ctx.fillStyle = ctx.shadowColor = '#000';
        ctx.fillRect(index * 10, value - 10, 10, 10);
        ctx.fillStyle = ctx.shadowColor = '#0F0';
        ctx.fillText(chars[index], index * 10, value - 10);

        columns[index] = value > 758 + Math.random() * 1e4 ? 0 : value + 10;
        chars[index] = String.fromCharCode(12448 + Math.random() * 96);
        ctx.fillStyle = ctx.shadowColor = '#AFA';
        ctx.fillText(chars[index], index * 10, value);
    });
}

setInterval(step, 40);