const CopyToClipBoard = (input) => {
  let text = input;

  text.select();
  text.setSelectionRange(0, 99999);

  document.execCommand("copy");
}

export { CopyToClipBoard };