import tinycolor from 'tinycolor2';

const CANVAS_SIZE = 666;
const SCALE_FACTOR = 0.7;

function getTime() {
    const now = new Date();
    let seconds = now.getSeconds() + now.getMilliseconds() / 1000;
    let minutes = now.getMinutes() + seconds / 60;
    let hours = now.getHours() + minutes / 60;

    return {
        hours: (hours % 12) / 12,
        minutes: (minutes % 60) / 60,
        seconds: (seconds % 60) / 60
    };
}

function getTransformation(fraction) {
    return new DOMMatrix()
        .translate(CANVAS_SIZE / 2, CANVAS_SIZE / 2)
        .scale(SCALE_FACTOR)
        .rotate(360 * fraction)
        .translate(0, -100 / SCALE_FACTOR)
        .translate(-CANVAS_SIZE / 2, -CANVAS_SIZE / 2);
}

function setLineStyle(ctx, settings, i) {
    switch (settings.dropoffMode) {
        case 'linear':
            ctx.strokeStyle = tinycolor(settings.color).setAlpha(i / settings.maxDepth).toRgbString();
        case 'constant':
            ctx.lineWidth = Math.pow(SCALE_FACTOR, i - settings.maxDepth);
            break;
    }
}

function createFractal(settings) {
    let result = new OffscreenCanvas(CANVAS_SIZE, CANVAS_SIZE);
    let temp = new OffscreenCanvas(CANVAS_SIZE, CANVAS_SIZE);
    let resultCtx = result.getContext('2d');
    let tempCtx = temp.getContext('2d');

    let transforms = [];
    let handFractions = getTime();
    for (let hand in handFractions) {
        if (settings[hand]) {
            transforms.push(getTransformation(handFractions[hand]));
        }
    }

    tempCtx.strokeStyle = settings.color;
    for (let i = 0; i < settings.maxDepth; i++) {
        tempCtx.clearRect(0, 0, CANVAS_SIZE, CANVAS_SIZE);
        for (let transform of transforms) {
            tempCtx.setTransform(transform);
            tempCtx.drawImage(result, 0, 0);
        }
        tempCtx.setTransform(new DOMMatrix());
        setLineStyle(tempCtx, settings, i);
        tempCtx.beginPath();
        for (let transform of transforms) {
            tempCtx.moveTo(CANVAS_SIZE / 2, CANVAS_SIZE / 2);
            let end = new DOMPoint(CANVAS_SIZE / 2, CANVAS_SIZE / 2).matrixTransform(transform);
            tempCtx.lineTo(end.x, end.y);
        }
        tempCtx.stroke();
        resultCtx.clearRect(0, 0, CANVAS_SIZE, CANVAS_SIZE);
        resultCtx.drawImage(temp, 0, 0);
    }

    return result.transferToImageBitmap();
}

export default function drawClockFractal(timestamp, canvas, settings) {
    const ctx = canvas.getContext('bitmaprenderer');

    ctx.transferFromImageBitmap(createFractal(settings));
};
