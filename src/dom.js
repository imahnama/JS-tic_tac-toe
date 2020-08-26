import {acceptInput} from './index'

const domContent = () => {

  const boardMethod = () => {
  const boardSection = document.getElementById('display-board-section')
  let buttonsArr = [{ id: 1}, { id: 2}, { id: 3}, {id: 4},
     { id: 5}, { id: 6}, { id: 7}, { id: 8}, {id: 9}]

     for (let i = 0; i < buttonsArr.length; i++) {
       const boardCellDiv = document.createElement('div')
       boardCellDiv.setAttribute('class', 'board-cell')

       const boardCellButton = document.createElement('button')
       boardCellButton.setAttribute('id', buttonsArr[i].id)

       boardSection.appendChild(boardCellDiv)
       boardCellDiv.appendChild(boardCellButton)

       boardCellButton.addEventListener('click', () => {
         acceptInput(buttonsArr[i].id)
       })

     }
  }

     const clearAlert = () => {
       const currentAlert = document.querySelector('.alert');
       if (currentAlert) {
         currentAlert.remove();
       }
     };

     const showAlert = (massage, className) => {
       clearAlert();
       const div = document.createElement('div');
       div.className = className;
       div.appendChild(document.createTextNode(massage));
       const mainSection = document.querySelector('.general-section');
       const board = document.querySelector('.display-board');
       mainSection.insertBefore(div, board);
       setTimeout(() => {
         clearAlert();
       }, 2000);
     };

     return {boardMethod, showAlert}

}

export default domContent
