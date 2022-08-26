

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

function confirmForfiet(playerId, playerName) {
    document.getElementById("forfiet").style.display = "block";
    var newh1 = document.createElement("h1");
    newh1.innerHTML = playerName + ", are you sure you would like to forfiet?";
    var forfietDiv = document.getElementById("forfiet");
    forfietDiv.insertBefore(newh1, forfietDiv.children[0]);
    //username of player.. are you sure you would like to foriet?
    //change the form action to make the playerid that clicked forfiet lose
    //   "/lose/" + playerid; 
}

function closeForfiet() {
    document.getElementById("forfiet").style.display = "none";
    forfietDiv = document.getElementById("forfiet");
    newh1 = forfietDiv.children[0];
    newh1.remove();
}