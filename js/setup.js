'use strict';

var NAME_PERSONE = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var SURNAME_PERSONE = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var COAT_COLOR = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var EYES_COLOR = ['black', 'red', 'blue', 'yellow', 'green'];
var FIREBALL_COLOR = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];

var setup = document.querySelector('.setup');
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
};

for (var i = 0; i < persones.length; i++) {
  fillingPersones(persones[i]);
}

var setupClose = document.querySelector('.setup-close');
var setupOpen = document.querySelector('.setup-open');

var onPopupEscPress = function (evt) {
  if (evt.key === 'Escape') {
    evt.preventDefault();
    closePopup();
  }
};

var openPopup = function () {
  setup.classList.remove('hidden');

  document.addEventListener('keydown', onPopupEscPress);
  wizardCoatColor.addEventListener('click', function () {
    colorWizard(wizardCoatColor, inputCoat, COAT_COLOR);
  });
  wizardEyesColor.addEventListener('click', function () {
    colorWizard(wizardEyesColor, inputEyes, EYES_COLOR);
  });
  setupFireballWrap.addEventListener('click', function () {
    colorFireball(setupFireballWrap, inputFireball, FIREBALL_COLOR);
  });
};

var closePopup = function () {
  setup.classList.add('hidden');

  document.removeEventListener('keydown', onPopupEscPress);
};

setupOpen.addEventListener('click', function () {
  openPopup();
});

setupOpen.addEventListener('keydown', function (evt) {
  if (evt.key === 'Enter') {
    openPopup();
  }
});

setupClose.addEventListener('click', function () {
  closePopup();
});

setupClose.addEventListener('keydown', function (evt) {
  if (evt.key === 'Enter') {
    closePopup();
  }
});

var setupWizard = document.querySelector('.setup-wizard');
var wizardCoatColor = setupWizard.querySelector('.wizard-coat');
var inputCoat = document.querySelector('input[name=coat-color]');

var wizardEyesColor = setupWizard.querySelector('.wizard-eyes');
var inputEyes = document.querySelector('input[name=eyes-color]');

var setupFireballWrap = document.querySelector('.setup-fireball-wrap');
var inputFireball = setupFireballWrap.querySelector('input[name=fireball-color]');

// функция подбора цвета мага
var colorWizard = function (name, value, massive) {
  name.style.fill = EYES_COLOR[Math.round(getRandomArbitrary(0, COAT_COLOR.length - 1))];
  value.value = massive[Math.round(getRandomArbitrary(0, COAT_COLOR.length - 1))];
};

// функция подбора цвета файербола
var colorFireball = function (name, value, massive) {

  name.style.background = massive[Math.round(getRandomArbitrary(0, COAT_COLOR.length - 1))];
  value.value = massive[Math.round(getRandomArbitrary(0, COAT_COLOR.length - 1))];
};


