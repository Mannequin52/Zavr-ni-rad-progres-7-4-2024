function draw(e) {
    if (!painting) return;
    var prevX = 0;
    var prevY = 0;

    ctx.lineWidth = 5;
    ctx.lineCap = "round";
    ctx.strokeStyle = "#000";

    var midX = (e.clientX + prevX) / 2;
    var midY = (e.clientY + prevY) / 2;

    ctx.quadraticCurveTo(prevX, prevY, midX, midY);
    ctx.stroke();

    prevX = e.clientX - canvas.offsetLeft;
    prevY = e.clientY - canvas.offsetTop;
}

function startPainting(e) {
    painting = true;
    draw(e);
    prevX = e.clientX - canvas.offsetLeft;
    prevY = e.clientY - canvas.offsetTop;
    }