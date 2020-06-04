'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var GAP = 10;
var GAP_COLUMN = 40;
var GAP_TEXT = 30;
var BAR_HEIGHT = 150;
var BAR_WIDTH = 50;

// облако со статистикой
var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

// максимальный элемент
var getMaxElement = function (arr) {
  var maxElement = arr[0];

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }
  return maxElement;
};

// случайное число для цвета
var getRandomInt = function (max) {
  return Math.floor(Math.random() * Math.floor(max));
};

// отрисовка и расположение колонн с текстом
var renderColumn = function (ctx, i, heightColumn, players, times) {
  ctx.fillRect(CLOUD_X + GAP_COLUMN + (BAR_WIDTH + GAP_COLUMN) * i, CLOUD_Y + CLOUD_HEIGHT - GAP_COLUMN, BAR_WIDTH, heightColumn);
  ctx.fillStyle = '#000';
  ctx.fillText(players, CLOUD_X + GAP_COLUMN + (BAR_WIDTH + GAP_COLUMN) * i, CLOUD_Y + CLOUD_HEIGHT - GAP_TEXT);
  ctx.fillText(Math.round(times), CLOUD_X + GAP_COLUMN + (BAR_WIDTH + GAP_COLUMN) * i, CLOUD_Y + CLOUD_HEIGHT - 60 + heightColumn);
};

// отрисовка всей статистики
window.renderStatistics = function (ctx, players, times) {
  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');

  ctx.fillStyle = '#000';

  var maxTime = getMaxElement(times);

  ctx.fillStyle = '#000';
  ctx.font = '16px PT Mono';
  ctx.textBaseline = 'hanging';
  ctx.fillText('Ура вы победили!', CLOUD_X + GAP * 2, CLOUD_Y + GAP * 2);
  ctx.fillText('Список результатов:', CLOUD_X + GAP * 2, CLOUD_Y + GAP * 4);

  for (var i = 0; i < players.length; i++) {
    if (players[i] === 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    } else {
      ctx.fillStyle = 'hsl(' + 240 + ',' + (getRandomInt(100)) + '%,' + 50 + '% )';
    }
    var heightColumn = -(BAR_HEIGHT * times[i]) / maxTime;
    renderColumn(ctx, i, heightColumn, players[i], times[i]);
  }
};
