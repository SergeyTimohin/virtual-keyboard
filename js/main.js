'use strict';
const body = document.querySelector('.body');

const container = document.createElement('div');
container.classList.add('container');
body.append(container);

const title = document.createElement('h1');
title.classList.add('title');
title.innerText = 'RSS Virtual Keyboard';
container.append(title);

const outputBlock = document.createElement('textarea');
outputBlock.classList.add('output-block');
container.append(outputBlock);

const keyBoard = document.createElement('div');
keyBoard.classList.add('keyboard');
container.append(keyBoard);

const infoBox = document.createElement('div');
infoBox.classList.add('info');

const infoTextfirst = document.createElement('p');
infoTextfirst.classList.add('info-text');
infoTextfirst.innerText = 'Клавиатура создана в операционной системе Windows';
const infoTextSecond = document.createElement('p');
infoTextSecond.classList.add('info-text');
infoTextSecond.innerText = 'Для переключения языка комбинация: левыe shift + alt' ;

infoBox.append(infoTextfirst);
infoBox.append(infoTextSecond);

container.append(infoBox);



const keyCode = [
  'Backquote', 'Digit1', 'Digit2', 'Digit3', 'Digit4', 'Digit5', 'Digit6', 'Digit7', 'Digit8', 'Digit9', 'Digit0', 'Minus', 'Equal', 'Backspace',
  'Tab', 'KeyQ', 'KeyW', 'KeyE', 'KeyR', 'KeyT', 'KeyY', 'KeyU', 'KeyI', 'KeyO', 'KeyP', 'BracketLeft', 'BracketRight', 'Backslash', 'Delete',  
  'CapsLock', 'KeyA', 'KeyS', 'KeyD', 'KeyF', 'KeyG', 'KeyH', 'KeyJ', 'KeyK', 'KeyL', 'Semicolon', 'Quote', 'Enter', 
  'ShiftLeft', 'Backslash', 'KeyX', 'KeyZ', 'KeyC','KeyV', 'KeyB', 'KeyN', 'KeyM', 'Comma', 'Period', 'Slash', 'ArrowUp', 'ShiftRight', 
  'ControlLeft','MetaLeft' , 'AltLeft', 'Space', 'AltRight', 'ControlRight', 'ArrowLeft', 'ArrowDown', 'ArrowRight'
];

const keysEngUpper = [
  '`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace', 
  'Tab', 'Q', 'W','E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '[', ']', '\\', 'Delete',
  'CapsLock', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ';', '\'', 'Enter',
  'Shift', '\\', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', ',', '.', '\/', 'ArrowUp', 'Shift', 
  'Control', 'Meta', 'Alt', ' ', 'Alt', 'Control', 'ArrowLeft', 'ArrowDown', 'ArrowRight'
];

const keysEngLower = [
  '`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace', 
  'Tab', 'q', 'w','e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\', 'Delete',
  'CapsLock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', '\'', 'Enter',
  'Shift', '\\', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '\/', 'ArrowUp', 'Shift', 
  'Control', 'Meta', 'Alt', ' ', 'Alt', 'Control', 'ArrowLeft', 'ArrowDown', 'ArrowRight'
];

const keysRusUpper = [
  'Ё', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace', 
  'Tab', 'Й', 'Ц', 'У', 'К', 'Е', 'Н', 'Г', 'Ш', 'Щ', 'З', 'Х', 'Ъ', '\\', 'Delete', 
  'CapsLock', 'Ф', 'Ы', 'В', 'А', 'П', 'Р', 'О', 'Л', 'Д', 'Ж', 'Э', 'Enter', 
  'Shift', '\\', 'Я', 'Ч', 'С', 'М', 'И', 'Т', 'Ь', 'Б', 'Ю', '.', 'ArrowUp', 'Shift',
  'Control', 'Meta', 'Alt', ' ', 'Alt', 'Control', 'ArrowLeft', 'ArrowDown', 'ArrowRight'
];

const keysRusLower = [
  'ё', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace', 
  'Tab', 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', '\\', 'Delete', 
  'CapsLock', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э', 'Enter', 
  'Shift', '\\', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', '.', 'ArrowUp', 'Shift',
  'Control', 'Meta', 'Alt', ' ', 'Alt', 'Control', 'ArrowLeft', 'ArrowDown', 'ArrowRight'
];

const keysRusShift = [
  'Ё', '!', '2', '№', ';', '%', ':', '?', '*', '(', ')', '_', '+', 'Backspace', 
  'Tab', 'Й', 'Ц', 'У', 'К', 'Е', 'Н', 'Г', 'Ш', 'Щ', 'З', 'Х', 'Ъ', '\/', 'Delete',
   'CapsLock', 'Ф', 'Ы', 'В', 'А', 'П', 'Р', 'О', 'Л', 'Д', 'Ж', 'Э', 'Enter', 
   'Shift', '\\', 'Я', 'Ч', 'С', 'М', 'И', 'Т', 'ь', 'б', 'ю', '.', 'ArrowUp', 'Shift', 
   'Control', 'Meta', 'Alt', ' ', 'Alt', 'Control', 'ArrowLeft', 'ArrowDown', 'ArrowRight' 
];

const keysEngShift = [
  '~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', 'Backspace', 
  'Tab', 'Q', 'W','E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '{', '}', '\|', 'Delete',
  'CapsLock', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ':', '\"', 'Enter',
  'Shift', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', '<', '>', '?', 'ArrowUp', 'Shift', 
  'Control', 'Meta', 'Alt', ' ', 'Alt','Control', 'ArrowLeft', 'ArrowDown', 'ArrowRight'
];

const lang  = ['eng', 'rus'];

let currentLang = lang[0];

let createKey = function(code, value) {
  let keyBox = document.createElement('div');
  keyBox.classList.add('key-box');
  let key = document.createElement('div');
  key.classList.add('key');
  key.setAttribute('data-key-code',`${code}`);  
  key.innerText = `${value}`; 

  if (key.dataset.keyCode == 'Delete') {
    key.innerText = 'DEL';
  }
  if (key.dataset.keyCode == 'Delete') {
    key.innerText = 'DEL';
  }
  if (key.dataset.keyCode == 'ControlLeft' || key.dataset.keyCode == 'ControlRight' ) {
    key.innerText = 'Ctrl';
  }
  if (key.dataset.keyCode == 'MetaLeft') {
    key.innerText = 'Win';
  }
  if (key.dataset.keyCode == 'ArrowUp') {    
    key.innerHTML = '<i class="fa fa-caret-up" aria-hidden="true"></i>';
  }
  if (key.dataset.keyCode == 'ArrowLeft') {    
    key.innerHTML = '<i class="fa fa-caret-up fa-rotate-270" aria-hidden="true"></i>';
  }
  if (key.dataset.keyCode == 'ArrowDown') {    
    key.innerHTML = '<i class="fa fa-caret-up fa-rotate-180" aria-hidden="true"></i>';
  }
  if (key.dataset.keyCode == 'ArrowRight') {    
    key.innerHTML = '<i class="fa fa-caret-up fa-rotate-90" aria-hidden="true"></i>';
  }
  keyBox.append(key);
  keyBoard.append(keyBox);
};


for(let i = 0; i < keyCode.length; i++) {
    if (currentLang == 'eng') {
    createKey(keyCode[i], keysEngLower[i]);
  }else{
    createKey(keyCode[i], keysRusLower[i]);
  }  
}

let buttons = document.querySelectorAll('.key');

buttons.forEach(element => {
  if(element.dataset.keyCode == 'Backspace') {
    element.classList.add('back-space');
  }
  if(element.dataset.keyCode == 'Tab') {
    element.classList.add('tab');
  }
  if(element.dataset.keyCode == 'Tab') {
    element.classList.add('tab');
  }
  if(element.dataset.keyCode == 'ShiftLeft') {
    element.classList.add('shift');
    element.classList.add('shift_left');
  }
  if(element.dataset.keyCode == 'ShiftRight') {
    element.classList.add('shift');
    element.classList.add('shift_right');
  }
  if(element.dataset.keyCode == 'ControlLeft') {
    element.classList.add('control');
    element.classList.add('control_left');
  }
  if(element.dataset.keyCode == 'ControlRight') {
    element.classList.add('control');
    element.classList.add('control_right');
  }
  if(element.dataset.keyCode == 'AltLeft') {
    element.classList.add('alt');
    element.classList.add('alt_left');
  }
  if(element.dataset.keyCode == 'AltRight') {
    element.classList.add('alt');
    element.classList.add('alt_right');
  }
  if(element.dataset.keyCode == 'CapsLock') {
    element.classList.add('caps');
  }
  if(element.dataset.keyCode == 'Enter') {
    element.classList.add('enter');
  } 
  if(element.dataset.keyCode == 'Space') {
    element.classList.add('space-button');    
  }
});

let outputText = '';
document.addEventListener('keydown', (e) => {
  e.preventDefault();  
  let keycode = e.code;  
  outputText += e.key;
  document.querySelector('.output-block').innerText = outputText;  
  document.querySelector(`[data-key-code="${keycode}"]`).classList.add('key_active');
});

document.addEventListener('keyup', (e) => {
  e.preventDefault();
  let keycode = e.code;
  document.querySelector(`[data-key-code="${keycode}"]`).classList.remove('key_active');
});

document.addEventListener('mousedown', (e) => {
  e.preventDefault();  
  let keycode = e.target.dataset.keyCode;  
  outputText += e.target.innerText;
  document.querySelector('.output-block').innerText = outputText; 
  document.querySelector(`[data-key-code="${keycode}"]`).classList.add('key_active');
});

document.addEventListener('mouseup', (e) => {
  e.preventDefault();
  let keycode = e.target.dataset.keyCode;
  document.querySelector(`[data-key-code="${keycode}"]`).classList.remove('key_active');
});