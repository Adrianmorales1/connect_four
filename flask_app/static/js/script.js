

function highlight(element) {
    element.style.backgroundColor = "rgb(160, 160, 160)";
}

function unhighlight(element) {
    element.style.backgroundColor = "rgb(126,126,126)";
}

function highlightR(element) {
    element.style.backgroundColor = "rgb(90, 90, 90)";
}

function unhighlightR(element) {
    element.style.backgroundColor = "rgb(55,55,55)";
}

function confirmForfiet(player) {
    document.getElementById("forfiet").style.display = "block";
}

function closeForfiet() {
    document.getElementById("forfiet").style.display = "none";
}