import pinsData from '../../helpers/data/pinsData';

import util from '../../helpers/util';

const bindEvents = () => {
  document.getElementById('toBoardsBtn').addEventListener('click', () => {
    document.getElementById('pins-page').classList.add('hide');
    document.getElementById('boards-page').classList.remove('hide');
  });
};

const writePins = (ar) => {
  let pinSt = '';
  ar.forEach((pin) => {
    pinSt += `<div class="col-3" id="${pin.id}">`;
    pinSt += '<div class="card">';
    pinSt += `<h6>${pin.id}</h6>`;
    pinSt += `<img src="${pin.imageUrl}">`;
    pinSt += '</div>';
    pinSt += '</div>';
  });
  util.printToDom('pins-on-board', pinSt);
};

const initPins = (boardId) => {
  bindEvents();
  pinsData.loadPinsForBoard(boardId)
    .then((pins) => {
      // console.error('pins from', boardId, pins);
      writePins(pins);
    })
    .catch(err => console.error(err));
};

export default { initPins };
