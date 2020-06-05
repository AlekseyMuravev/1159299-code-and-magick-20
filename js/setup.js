'use strict';

var setup = document.querySelector('.setup');
setup.classList.remove('hidden');
document.querySelector('.setup-similar').classList.remove('hidden');

// массив с персонажами
var arrayPersones = function () {
  var persones = [];

  for (var i = 0; i < 4; i++) {
    persones.push(arrayPersone(i));
  }
  return persones;
};

var getRandomArbitrary = function (min, max) {
  return Math.random() * (max - min) + min;
};

var namePersone = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var surnamePersone = [' да Марья', ' Верон', ' Мирабелла', ' Вальц', ' Онопко', ' Топольницкая', ' Нионго', ' Ирвинг'];
var coatColor = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var eyesColor = ['black', 'red', 'blue', 'yellow', 'green'];

// создание одного персонажа
var arrayPersone = function () {
  var persone = {};
  persone.name = (namePersone[Math.round(getRandomArbitrary(0, namePersone.length - 1))] + surnamePersone[Math.round(getRandomArbitrary(1, surnamePersone.length - 1))]);
  persone.coatColor = coatColor[Math.round(getRandomArbitrary(0, coatColor.length - 1))];
  persone.eyesColor = eyesColor[Math.round(getRandomArbitrary(0, eyesColor.length - 1))];
  return persone;
};

// заполнение персонажей данными
var fillingPersones = function () {
  var wizardElement = similarWizardTemplate.cloneNode(true);
  wizardElement.querySelector('.setup-similar-label').textContent = arrayPersones()[i].name;
  wizardElement.querySelector('.wizard-coat').style.fill = arrayPersones()[i].coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = arrayPersones()[i].eyesColor;
  setupSimilarList.appendChild(wizardElement);
};

var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');
var setupSimilarList = document.querySelector('.setup-similar-list');

for (var i = 0; i < 4; i++) {
  fillingPersones(i);
}
