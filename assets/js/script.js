// SNAKE GAME STARTS
window.onload = function () {
    "use strict";
    let left = 0;
    let right = 0;
    let top = 0;
    let bottom = 0;

    let leftPosInt, rightPosInt, topPosInt, bottomPosInt;
    // let elem = document.querySelector('.snake-game-inner');
    let leftBtn = document.querySelector('.left');
    let rightBtn = document.querySelector('.right');
    let topBtn = document.querySelector('.top');
    let bottomBtn = document.querySelector('.bottom');

    let sgInner = document.querySelector('.snake-game-inner');
    let snake = document.querySelector('.snake-game-inner .snake');
    let snakeOffsetLeft = snake.offsetLeft - 2;
    let snakeOffsetTop = snake.offsetTop - 2;

    let slideSpeed = 100;

    function leftPos() {
        snake.style.cssText = "left: " + left + "px; top: " + top + "px; transform: rotate(0deg)";
        left += 10;
    }
    function rightPos() {
        snake.style.cssText = "left: " + left + "px; top: " + top + "px; transform: rotate(180deg)";
        left -= 10;
    }
    function topPos() {
        snake.style.cssText = "top: " + top + "px; left: " + left + "px; transform-origin: center; transform: rotate(-90deg)";
        if (top !== 0) {
            top -= 10;
        }
    }
    function bottomPos() {
        snake.style.cssText = "top: " + top + "px; left: " + left + "px; transform-origin: center; transform: rotate(90deg)";
        top += 10;
    }


    leftBtn.addEventListener("click", function () {
        leftPosInt = setInterval(leftPos, slideSpeed);
        clearInterval(rightPosInt);
        clearInterval(topPosInt);
        clearInterval(bottomPosInt);
    });
    rightBtn.addEventListener("click", function () {
        rightPosInt = setInterval(rightPos, slideSpeed);
        clearInterval(leftPosInt);
        clearInterval(topPosInt);
        clearInterval(bottomPosInt);
    });
    topBtn.addEventListener("click", function () {
        topPosInt = setInterval(topPos, slideSpeed);
        clearInterval(leftPosInt);
        clearInterval(rightPosInt);
        clearInterval(bottomPosInt);
    });
    bottomBtn.addEventListener("click", function () {
        bottomPosInt = setInterval(bottomPos, slideSpeed);
        clearInterval(leftPosInt);
        clearInterval(rightPosInt);
        clearInterval(topPosInt);
    });
    
    
    
}
// SNAKE GAME FINISH