const inputField = document.getElementById('inputField');
const outputdiv = document.getElementById('outputdiv');

function copyDiv(){
  outputdiv.innerHTML = this.value.replaceAll("\n", "<br>");
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
