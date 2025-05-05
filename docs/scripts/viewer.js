let html = document;

let frame = html.getElementById("presentationFrame");
let folder = window.location.hash.substring(1);
let folderIndicator = html.getElementById("folder");

console.log("You are viewing: " + folder);

function load() {
    frame.src = "docs/" + folder + "/doc.html";
    folderIndicator.innerHTML = folder; 
}

load();