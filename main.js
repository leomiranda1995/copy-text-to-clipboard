import { CopyToClipBoard } from './services/copyclipboard.js';
import { inputStyled, buttonStyled } from './styles/style.js';

let input = document.querySelector("input");
inputStyled(input);

let button = document.querySelector("button");
buttonStyled(button);

button.onmouseover = () => {
  button.style.backgroundColor = '#2EE59D';
  button.style.transition = '0.5s';
  button.style.boxShadow = '0px 15px 20px rgba(46, 229, 157, 0.4)';
  button.style.transform = 'translateY(-3px)';
}

button.onmouseout = () => {
  button.style.backgroundColor = '#fffaaa';
  button.style.transition = '0.5s';
  button.style.transform = 'translateY(0px)';
  button.style.boxShadow = '0px 8px 15px rgba(0, 0, 0, 0.1)';
}

button.onclick = () => {
  CopyToClipBoard(input);
}