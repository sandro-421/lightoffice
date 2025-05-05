let html = document;

let frame = html.getElementById("notesFrame");
let folder = window.location.hash.substring(1);
let notes = "presentations/" + folder + "/notes.html";
console.log("You are presenting: " + folder);
frame.src = notes;