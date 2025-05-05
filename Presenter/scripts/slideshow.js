let html = document;

let frame = html.getElementById("presentationFrame");
let counter = html.getElementById("slideCounter");
let folder = window.location.hash.substring(1);
let slideIdx = 1;
let slideIdxString = "1";
let notesUrl = "notes.html#" + folder;
let notesWindowName = "Notes";

function notes() {
    window.open(notesUrl,notesWindowName,'height=500,width=700');
}

console.log("You are presenting: " + folder);

function load() {
    slideIdxString = slideIdx.toString(); 
    counter.innerHTML = slideIdxString;
    console.log("You are on slide:" + slideIdxString);
    frame.src = "presentations/" + folder + "/" + slideIdxString + ".html"; 
}

function next() {
    slideIdx = slideIdx + 1; 
    load();
}

function prev() {
    slideIdx = slideIdx - 1; 
    load();}


function full() {
    if (!document.fullscreenElement &&
        !document.mozFullScreenElement &&
        !document.webkitFullscreenElement &&
        !document.msFullscreenElement) {
        if (document.documentElement.requestFullscreen) {
            document.documentElement.requestFullscreen();
        } else if (document.documentElement.mozRequestFullScreen) {
            document.documentElement.mozRequestFullScreen();
        } else if (document.documentElement.webkitRequestFullscreen) {
            document.documentElement.webkitRequestFullscreen();
        } else if (document.documentElement.msRequestFullscreen) {
            document.documentElement.msRequestFullscreen();
        }
    } else {
        if (document.exitFullscreen) {
            document.exitFullscreen();
        } else if (document.mozCancelFullScreen) {
            document.mozCancelFullScreen();
        } else if (document.webkitExitFullscreen) {
            document.webkitExitFullscreen();
        } else if (document.msExitFullscreen) {
            document.msExitFullscreen();
        }
    }
}

load();

document.addEventListener("keydown", event => {
    if (event.isComposing || event.keyCode !== 37) {
      return;
    }
    prev();
  }
);

document.addEventListener("keydown", event => {
    if (event.isComposing || event.keyCode !== 39) {
      return;
    }
    next();
  }
);