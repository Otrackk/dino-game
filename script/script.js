var character = document.getElementById("character");
var block = document.getElementById("block");
var start = document.getElementById("start-button");
var container = document.getElementById("main-cont");
var scoreDisplay = document.getElementById("score");
var yourScore = document.getElementById("your-score");
yourScore.style.display = "none";
var score = 1;

block.addEventListener("animationiteration", scoring);

function scoring() {
    scoreDisplay.innerHTML = "Score " + score;
    score += 1;
}

function startAnimation() {
    scoreDisplay.innerHTML = "Score : 0";
    block.classList.add("slide");
}

function jump() {

    if (character.classList != 'jump') {
        character.classList.add("jump");
    }

    setTimeout(function () {
        character.classList.remove("jump");
    }, 500)

}

function collision() {
    var a = setInterval(function () {
        var topC = parseInt(window.getComputedStyle(character, null).getPropertyValue("top"));
        var leftB = parseInt(window.getComputedStyle(block, null).getPropertyValue("left"));

        if (topC <= 300 && topC >= 200 && leftB <= 100) {
            block.classList.remove("slide");
            score -= (score - 1);
            alert("Sei morto!");
        }

    }, 10);
}

collision();