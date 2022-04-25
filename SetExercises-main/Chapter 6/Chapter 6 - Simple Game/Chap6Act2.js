var score = 0;
var time = 6000;

function moveShape(move) {
    //Randomizes location of html element
    move.style.position = 'relative';
    move.style.top = Math.floor(Math.random() * 450) + 'px';
    move.style.left = Math.floor(Math.random() * 450) + 'px';
};
var block = document.querySelector('.block');
block.addEventListener('click', function (e) {
    //Moves html element 'block' and adds a point to the score after clicking 
    moveShape(e.target);
    score++
    document.getElementById("score").innerHTML = Math.floor(score);
});
var timer = setInterval(function () {
    //Set timer for 30 seconds until the game ends
    if (time != 0) {
        time--;
        document.getElementById("timer").innerHTML = Math.floor(time / 200);
    }
    else {
        time = 0;
        alert("Game Over. Score: " + score);
    }
});


