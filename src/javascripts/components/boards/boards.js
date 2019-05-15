import boardData from '../../helpers/data/boardsData';

import util from '../../helpers/util';

import pins from '../pins/pins';

let boardAr = [];

const seePinDiv = (e) => {
  const boardId = e.target.closest('.card').id;
  console.error('you clicked the button', boardId);
  document.getElementById('boards-page').classList.add('hide');
  document.getElementById('pins-page').classList.remove('hide');
  pins.initPins(boardId);
};

const bindEvents = () => {
  const allButtons = document.getElementsByClassName('see-pins');
  for (let i = 0; i < allButtons.length; i += 1) {
    allButtons[i].addEventListener('click', seePinDiv);
  }
};

const boardBuild = (ar) => {
  let boardSt = '';
  ar.forEach((board) => {
    boardSt += `<div class="col-3" id="${board.id}">`;
    boardSt += `<div class="card board-card" id="${board.id}">`;
    boardSt += `<h4>${board.name}</h4>`;
    boardSt += '<button class="btn btn-danger see-pins">Pins</button>';
    boardSt += '</div>';
    boardSt += '</div>';
  });
  util.printToDom('user-boards', boardSt);
  bindEvents();
};

const initBoards = () => {
  boardData.loadBoards()
    .then((resp) => {
      const boardDataAr = resp.data.boards;
      boardAr = boardDataAr;
      boardBuild(boardAr);
    })
    .catch(err => console.error('error from loadBoards', err));
};

export default { initBoards };
