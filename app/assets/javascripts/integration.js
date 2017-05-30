
function textarea() {
  return document.getElementsByClassName('textarea_wrapper jx_ui_Widget')[0].children[0];
}

function textareaKeypressed() {
  console.log(window.event.keyCode);
}
