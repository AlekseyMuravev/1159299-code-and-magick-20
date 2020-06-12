'use strict';

var NAME_PERSONE = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var SURNAME_PERSONE = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var COAT_COLOR = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var EYES_COLOR = ['black', 'red', 'blue', 'yellow', 'green'];

var setup = document.querySelector('.setup');
setup.classList.remove('hidden');
document.querySelector('.setup-similar').classList.remove('hidden');

var persones = [];

// массив всех персонажамей
var createPersones = function () {
  for (var i = 0; i < 4; i++) {
    persones.push(createPersone());
  }
};

// получаем случайное число
var getRandomArbitrary = function (min, max) {
  return Math.random() * (max - min) + min;
};

// создание одного персонажа
var createPersone = function () {
  var persone = {};
  persone.name = (NAME_PERSONE[Math.round(getRandomArbitrary(0, NAME_PERSONE.length - 1))] + ' ' + SURNAME_PERSONE[Math.round(getRandomArbitrary(0, SURNAME_PERSONE.length - 1))]);
  persone.coatColor = COAT_COLOR[Math.round(getRandomArbitrary(0, COAT_COLOR.length - 1))];
  persone.eyesColor = EYES_COLOR[Math.round(getRandomArbitrary(0, EYES_COLOR.length - 1))];
  return persone;
};

createPersones();

var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');
var setupSimilarList = document.querySelector('.setup-similar-list');

// заполнение персонажей данными
var fillingPersones = function (wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);
  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;
  setupSimilarList.appendChild(wizardElement);
  console.log(setupSimilarList)
};

for (var i = 0; i < persones.length; i++) {
  fillingPersones(persones[i]);
}
