var clicks = 0;

function loadData() {
    if (localStorage.hasOwnProperty("clicks")) {
        clicks = localStorage.getItem("clicks");
        updateClicker();
    }
}

document.addEventListener("DOMContentLoaded", function() {
    loadData();
});

function clickFuck() {
    clicks++;
    updateClicker();
    localStorage.setItem("clicks", clicks);
}

function updateClicker() {
    document.getElementById("clicker").innerHTML = clicks;
}