// SNAKE GAME STARTS
window.onload = function () {
    let left = 0;
    let right = 0;
    let top = 0;
    let bottom = 0;
    let leftPosInt, rightPosInt, topPosInt, bottomPosInt;
    let elem = document.querySelector('.ver-inner');
    let leftBtn = document.querySelector('.left');
    let rightBtn = document.querySelector('.right');
    let topBtn = document.querySelector('.top');
    let bottomBtn = document.querySelector('.bottom');
    let slideSpeed = 100;

    function leftPos() {
        elem.style.cssText = "left: " + left + "px; top: " + top + "px; transform: rotate(0deg)";
        left += 10;
    }
    function rightPos() {
        elem.style.cssText = "left: " + left + "px; top: " + top + "px; transform: rotate(180deg)";
        left -= 10;
    }
    function topPos() {
        elem.style.cssText = "top: " + top + "px; left: " + left + "px; transform-origin: center; transform: rotate(-90deg)";
        if (top !== 0) {
            top -= 10;
        }
    }
    function bottomPos() {
        elem.style.cssText = "top: " + top + "px; left: " + left + "px; transform-origin: center; transform: rotate(90deg)";
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