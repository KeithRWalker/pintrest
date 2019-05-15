import axios from 'axios';

const loadPinsForBoard = boardId => new Promise((resolve, reject) => {
  axios.get('../db/pins.json')
    .then((resp) => {
      const allPins = resp.data.pins;
      // filter pins here
      console.error('boardId inside pins data', boardId);
      const matchingPins = allPins.filter(pin => pin.boardId === boardId);
      // send/resolve pins here
      resolve(matchingPins);
    })
    .catch(err => reject(err));
});

export default { loadPinsForBoard };
