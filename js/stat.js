'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var GAP = 10;
var GAP_COLUMN = 40;
var FONT_GAP = 15;
var BAR_HEIGHT = 150;
var BAR_WIDTH = 50;

var renderCloud = function (ctx, x, y, color) {
    ctx.fillStyle = color;
    ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var getMaxElement = function (arr) {
    var maxElement = arr[0];

    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > maxElement) {
            maxElement = arr[i];
        }
    }

    return maxElement;
};

window.renderStatistics = function (ctx, players, times) {
    renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.7)');
    renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');

    ctx.fillStyle = '#000';

    var maxTime = getMaxElement(times);

    ctx.fillStyle = '#000';
    ctx.font = '16px PT Mono';
    ctx.textBaseline = "hanging"
    ctx.fillText('Ура вы победили!', CLOUD_X + GAP * 2, CLOUD_Y + GAP * 2);
    ctx.fillText('Список результатов:', CLOUD_X + GAP * 2, CLOUD_Y + GAP * 4);

    for (var i = 0; i < players.length; i++) {
        if (players[i] == 'Вы') {
            ctx.fillStyle = 'rgba(255, 0, 0, 1)';
        } else {
            function getRandomInt(max) {
                return Math.floor(Math.random() * Math.floor(max));
            }
            var colorColumn = 'hsl(' + 240 + ',' + (getRandomInt(100)) + '%,' + 50 + '% )';
            ctx.fillStyle = colorColumn;
        }
        var dl = -(BAR_HEIGHT * times[i]) / maxTime;
        ctx.fillRect(CLOUD_X + GAP_COLUMN + (BAR_WIDTH + GAP_COLUMN) * i, CLOUD_Y + CLOUD_HEIGHT - GAP * 4, BAR_WIDTH, dl);
        ctx.fillStyle = '#000';
        ctx.fillText(players[i], CLOUD_X + GAP_COLUMN + (BAR_WIDTH + GAP_COLUMN) * i, CLOUD_Y + CLOUD_HEIGHT - GAP * 3);
        ctx.fillText(Math.round(times[i]), CLOUD_X + GAP_COLUMN + (BAR_WIDTH + GAP_COLUMN) * i, CLOUD_Y + CLOUD_HEIGHT - 60 + dl);
    }

};
