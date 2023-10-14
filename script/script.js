var character = document.getElementById("character");
var block = document.getElementById("block");
var start = document.getElementById("start-button");
var startButton = document.getElementById("#start-button");
var container = document.getElementById("main-cont");
var scoreDisplay = document.getElementById("score");
var yourScore = document.getElementById("your-score");
var yourRecord = document.getElementById("your-record");
var score = 1;
var dead = false;
var highScore = [0];

yourScore.style.display = "none";

block.addEventListener("animationiteration", scoring);

function scoring() {
    scoreDisplay.innerHTML = "Score : " + score;
    score += 1;
}

function startAnimation() {
    if (dead) {
        scoreDisplay.innerHTML = "Score : 0";
    }

    character.style.backgroundImage = "url(./assets/character-running.gif)";
    block.style.backgroundImage = "url(./assets/enemy-running.gif)";
    start.innerHTML = "Jump!";
    block.classList.add("slide");
    dead = false;
}

function jump() {

    if (character.classList != 'jump') {
        character.classList.add("jump");
    }

    else if (character.classList == "jump") {
        return;
    }

    setTimeout(function () {
        character.classList.remove("jump");
    }, 500)

}

function collision() {
    var a = setInterval(function () {

        var topC = parseInt(window.getComputedStyle(character, null).getPropertyValue("top"));
        var leftE = parseInt(window.getComputedStyle(block, null).getPropertyValue("left"));

        if (topC <= 320 && topC >= 300 && leftE <= 50) {

            if (character.classList == 'jump') {
                character.classList.remove("jump");
            }

            document.body.style.backgroundColor = "#8a0303";
            character.style.width = "200px";
            character.style.backgroundImage = "url(./assets/character-dies.gif)";
            block.style.backgroundImage = "url(./assets/enemy-standing.gif)";

            setTimeout(() => {
                document.body.style.backgroundColor = "#434352";
                character.style.width = "100px";
                character.style.backgroundImage = "url(./assets/character-standing.gif)";
            }, 900);

            block.classList.remove("slide");
            scoreDisplay.innerHTML = "Your score is : " + (score - 1);
            start.innerHTML = "You're dead :(";
            let newScore = score;
            highScore.push(newScore - 1);
            score = 1;
            dead = true;
            var largest = Math.max.apply(null, highScore);
            yourRecord.innerHTML = "Your Record : " + largest;

        }

    }, 10);
}

collision();