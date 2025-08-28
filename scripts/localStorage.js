const localStorageTest = document.getElementById('localStorageTest');
const localStoragediv = document.getElementById('localStoragediv');

const links = localStorage.getItem("links");
if (!links) {
  localStorage.setItem("links", ``);
}
localStoragediv.innerHTML = links;

function updateLocalStorage(){
  const links = localStorage.getItem("links");
  localStorage.setItem("links", `${links}<a href="${this.value}">${this.value}</a><br>`);
  localStoragediv.innerHTML = localStorage.getItem("links");
}
localStorageTest.addEventListener('change', updateLocalStorage);

const localStorageTestClear = document.getElementById('localStorageTestClear');
function clearLocalStorage(){
  localStorage.setItem("links", ``);
  localStoragediv.innerHTML = ``;
}
localStorageTestClear.addEventListener('click', clearLocalStorage);

// const localStorageTestAppend = document.getElementById('localStorageTestAppend');
// function appendLocalStorage(){
//   const links = localStorage.getItem("links");
//   localStorage.setItem("links", `${links}<a href="${this.value}">${this.value}</a><br>`);
//   localStoragediv.innerHTML = links;
// }
// localStorageTestAppend.addEventListener('click', localStorageTestAppend);
