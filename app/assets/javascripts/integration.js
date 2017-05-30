
function textarea() {
  return document.getElementsByClassName('textarea_wrapper')[0].children[0];
}

function textareaKeypressed() {
  console.log(window.event.keyCode);
}
