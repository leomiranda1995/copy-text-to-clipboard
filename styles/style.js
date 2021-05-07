const inputStyled = (input) => {
  input.style.width = '30%';
  input.style.padding = '12px 20px';
  input.style.margin = '8px 0';
  input.style.display = 'inline-block';
  input.style.border = '1px solid #ccc';
  input.style.borderRadius = '4px';
  input.style.boxSizing = 'border-box';
}

const buttonStyled = (button) => {
  button.style.backgroundColor = '#fffaaa';
  button.style.color = '#fffff';
  button.style.border = 'none';
  button.style.padding = '15px 32px';
  button.style.textAlign = 'center';
  button.style.textDecoration = 'none';
  button.style.display = 'inline-block';
  button.style.fontSize = '16px';
  button.style.cursor = 'pointer';
  button.style.borderRadius = '30px';
  button.style.boxShadow = '0px 8px 15px rgba(0, 0, 0, 0.1)';
}

export { inputStyled, buttonStyled };