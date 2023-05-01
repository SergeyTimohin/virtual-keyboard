'use strict';
const body = document.querySelector('.body');

const container = document.createElement('div');
container.classList.add('container');
body.append(container);

const outputBlock = document.createElement('textarea');
outputBlock.classList.add('output-block');
container.append(outputBlock);

const keyBoard = document.createElement('div');
keyBoard.classList.add('keyboard');
container.append(keyBoard);