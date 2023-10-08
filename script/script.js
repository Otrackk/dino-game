var character = document.getElementById("character");
var block = document.getElementById("block");
var start = document.getElementById("start-button");
var startButton = document.getElementById("#start-button");
var container = document.getElementById("main-cont");
var scoreDisplay = document.getElementById("score");
var yourScore = document.getElementById("your-score");
yourScore.style.display = "none";
var score = 1;
var dead = false;



block.addEventListener("animationiteration", scoring);

function scoring() {
    scoreDisplay.innerHTML = "Score : " + score;
    score += 1;
}

function startAnimation() {
    if (dead) {
        scoreDisplay.innerHTML = "Score : 0";
    }

    start.innerHTML = "Jump!";
    block.classList.add("slide");
    dead = false;
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
            scoreDisplay.innerHTML = "Your score is : " + (score - 1);
            start.innerHTML = "You're dead :(";
            score = 1;
            dead = true;
        }

    }, 10);
}

collision();