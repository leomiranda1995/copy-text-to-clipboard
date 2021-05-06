import { CopyToClipBoard } from './services/copyclipboard.js';
import { inputStyled, buttonStyled } from './styles/style.js';

let input = document.querySelector("input");
inputStyled(input);

let button = document.querySelector("button");
buttonStyled(button);

button.onmouseover = () => {
  button.style.backgroundColor = '#0000BB';
  button.style.transition = '0.5s';
}

button.onmouseout = () => {
  button.style.backgroundColor = '#00BFFF';
  button.style.transition = '0.5s';
}

button.onclick = () => {
  CopyToClipBoard(input);
}