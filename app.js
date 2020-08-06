'use strict';

let active = '';

const simpleOrHex = (e) => {
  if (e.target.id === 'hex' ){
    document.querySelector('#hex').style.color = 'white';
    document.querySelector('#simple').style.color = '#242323';
    buttonEventHex();
    active = 'hex';
    handleButtonClick();
    return;
  } else if (e.target.id === 'simple'){
    active = 'simple';
    init();
    return;
  }
}

const bodySelector = document.querySelector('body');

const buttonEventHex = () => {
  document.querySelector('#button').addEventListener('click', handleButtonClick);
};

const handleButtonClick = () => {
  if (active === 'hex'){
    const randomColor = Math.floor(Math.random() * 16777215).toString(16);
    document.body.style.backgroundColor = `#${randomColor}`;
    document.querySelector('#color-name').innerHTML = `#${randomColor}`;
    document.querySelector('#logo').style.color = `#${randomColor}`;
  } else {
    const randomColor = colorArray[Math.floor(Math.random() * colorArray.length)];
    bodySelector.style.backgroundColor = randomColor;
    document.querySelector('#color-name').innerHTML = `${randomColor}`;
    document.querySelector('#logo').style.color = `${randomColor}`;
  }
};

const buttonEventSimple = () => {
  document.querySelector('#button').addEventListener('click', handleButtonClick);
  document.querySelector('#simple').style.color = 'white';
  document.querySelector('#hex').style.color = '#242323';
};

const colorArray = [
  'red',
  'blue',
  'yellow',
  'green',
  'orange',
  'purple',
  'white',
  'wheat',
  'hotpink',
  'aquamarine',
  'brown',
  'violet',
  'darkmagenta',
  'fuchsia',
];

const init = () => {
  buttonEventSimple();
  handleButtonClick();
  document.querySelector('#modes').addEventListener('click', simpleOrHex);
};

init();