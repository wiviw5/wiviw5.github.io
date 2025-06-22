const inputField = document.getElementById('inputField');
const outputdiv = document.getElementById('outputdiv');
const pasteCleanerButton = document.getElementById('pasteCleanerButton');

function getClipboard(){
  navigator.clipboard
    .readText()
    .then((clipText) => (inputField.value = clipText));
  copyDiv();
}
pasteCleanerButton.addEventListener('click', getClipboard);

function copyDiv(){
  outputdiv.innerHTML = inputField.value.replaceAll("\n", "<br>");
  navigator.clipboard
    .write([
      new ClipboardItem({
        "text/html": new Blob([outputdiv.innerHTML], {
          type: "text/html",
        }),
        "text/plain": new Blob([outputdiv.innerHTML], {
          type: "text/plain",
        }),
      }),
    ])
    .then(() => console.log("Copied"))
    .catch((e) => console.log(e));
}
inputField.addEventListener('change', copyDiv);
