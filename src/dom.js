import {acceptInput} from './index'

const domContent = () => {
  const boardSection = document.getElementById('display-board-section')
  let buttonsArr = [{value: 1, id: 1}, {value: 2, id: 2}, {value: 3, id: 3}, {value: 4, id: 4},
     {value: 5, id: 5}, {value: 6, id: 6}, {value: 7, id: 7}, {value: 8, id: 8}, {value: 9, id: 9}]

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

export default domContent
