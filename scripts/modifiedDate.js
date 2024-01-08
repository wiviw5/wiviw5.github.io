let oLastModif = new Date(document.lastModified);
document.getElementById("lastModified").innerHTML = "Last Updated: " + oLastModif.toDateString() + " @ " + oLastModif.toLocaleTimeString();
