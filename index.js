const imageSource = 'https://resources.tidal.com/images/bd4e3a38/69f6/40b4/848d/b2cfe10667a3/320x320.jpg';
// const imageSource = 'https://resources.tidal.com/images/6a96cfbc/4e36/4130/9788/294e71d37cdf/320x320.jpg';

const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const img = new Image();
img.src = imageSource;
const imgWidth = img.width;
const imgHeight = img.height;

let angle = 0;
const canvasWidth = canvas.width;
const canvasHeight = canvas.height;

const diagonalDistance = Math.sqrt(canvasWidth * canvasWidth + canvasHeight * canvasHeight);

const rectWidth = diagonalDistance;
const rectHeight = rectWidth;

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.save();
    ctx.translate(canvasWidth / 2, canvasHeight / 2);
    ctx.rotate(angle);
    // ctx.fillStyle = 'red';
    // ctx.fillRect(-rectWidth / 2, -rectHeight / 2, rectWidth, rectHeight);
    ctx.drawImage(img, 0, 0, imgWidth, imgHeight,
        -rectWidth / 2, -rectHeight / 2, rectWidth, rectHeight
    );
    ctx.restore();

    const pieceHeight = (canvasHeight / 2) - 70;

    // Rotate and draw the first image
    ctx.save();
    ctx.rotate(Math.abs(angle) + 0.1);
    ctx.drawImage(img, 0, 0, canvasWidth, pieceHeight);
    ctx.restore();

    // Rotate and draw the second image
    ctx.save();
    // ctx.translate(canvasWidth / 2, canvasHeight / 2);
    ctx.rotate((angle) + 0.1);
    ctx.drawImage(img, 0, (canvasHeight - pieceHeight), canvasWidth, pieceHeight);
    ctx.restore();

    angle += -0.005;

    requestAnimationFrame(draw);
}

img.onload = function () {
    draw();
}