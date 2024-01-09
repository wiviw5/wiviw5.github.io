const button = document.getElementById("webhookDeletionButton");
const input = document.getElementById("webhookInputBox");

input.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        event.preventDefault();
        button.click();
    }
});

button.addEventListener("click", onButtonPress);

const delay = ms => new Promise(res => setTimeout(res, ms));

function onButtonPress() {
    const webhookURL = document.getElementById("webhookInputBox").value;
    if (webhookURL === "") {
        return;
    }
    webhookDeletion(webhookURL);
}

function webhookDeletion(webhookURL) {
    const xhr = new XMLHttpRequest();

    xhr.onreadystatechange = async () => {
        var userFeedback = document.getElementById("webhookFeedBackBox")
        if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 0) {
            userFeedback.style.color = "red";
            userFeedback.innerHTML = "Error: Not a url.";
        }
        if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 204) {
            console.log(`Code 204, Successfully Deleted webhook at: ${webhookURL}`)
            userFeedback.style.color = "green";
            userFeedback.innerHTML = "Successfully deleted Webhook!";
        }
        if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 404) {
            console.log(`Code 404, Webhook not found at: ${webhookURL}`)
            userFeedback.style.color = "red";
            userFeedback.innerHTML = "Code 404, Webhook not found!";
        }
        if (xhr.readyState === XMLHttpRequest.DONE && xhr.status !== 204 && xhr.status !== 404 && xhr.status !== 0) {
            console.log(`Code ${xhr.status}, some other error for: ${webhookURL}`)
            userFeedback.style.color = "red";
            userFeedback.innerHTML = `Code ${xhr.status}, some other error!`;
        }
        // Here we wait 2.5 seconds till we remove the code.
        await delay(2500);
        userFeedback.innerHTML = "";
        document.getElementById("webhookInputBox").value = "";
    };

    xhr.open("DELETE", webhookURL, true);
    xhr.send();
}