const videoSiteField = document.getElementById('videoSiteField');
const audioSiteField = document.getElementById('audioSiteField');
const imageSiteField = document.getElementById('imageSiteField');
const linkSiteField = document.getElementById('linkSiteField');
const outputArea = document.getElementById('outputArea');


// Listener for input
function updateVideo(){
    outputArea.innerHTML = `<video src="${this.value}" preload="auto" controls></video>`;
}
videoSiteField.addEventListener('change', updateVideo);
// Listener for input End 
// Listener for input
function updateAudio(){
    outputArea.innerHTML = `<audio src="${this.value}" preload="auto" controls></audio>`;
}
audioSiteField.addEventListener('change', updateAudio);
// Listener for input End
// Listener for input
function updateImage(){
    outputArea.innerHTML = `<img src=${this.value}>`;
}
imageSiteField.addEventListener('change', updateImage);
// Listener for input End console.log(``);
// Listener for input
function updateLink(){
    outputArea.innerHTML = `<a href="${this.value}">Link</a>`;
}
linkSiteField.addEventListener('change', updateLink);
// Listener for input End
// Register Dynamic Buttons
function addButtonListeners() {

    document.querySelectorAll('.clearButton').forEach((button) => {
        button.addEventListener('click', () => {
            var field = document.getElementById(button.dataset.buttonid);
            field.value =  "";
        })
    });

}
// Register Dynamic Buttons End
addButtonListeners();