import boardData from '../../helpers/data/boardsData';

import util from '../../helpers/util';

let boardAr = [];

const boardBuild = (ar) => {
  let boardSt = '';
  ar.forEach((board) => {
    boardSt += '<div class="col-3">';
    boardSt += `<div class="card board-card" id="${board.id}">`;
    boardSt += `<h4>${board.name}</h4>`;
    boardSt += '</div>';
    boardSt += '</div>';
  });
  util.printToDom('user-boards', boardSt);
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
