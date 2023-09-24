const inputEle = document.getElementById("input");

const handleInputChangeOP = debounce(handleInputChange, 200);
inputEle.addEventListener("keyup", handleInputChangeOP);

function handleInputChange(e) {
    // apiCall();
    console.log("doing api call");
}



const buttonEle = document.getElementById("button");

const handleButtonCLickOP = throttle(handleButtonCLick, 1000);
buttonEle.addEventListener("click", handleButtonCLickOP);
// delay is 5
// 1 5
function handleButtonCLick(e) {
    // fireBullet();
    console.log("firing a bullet");
}

function throttle(func, delay) {
    let flag = true;
    return function(...args) {
        if (flag) {
            func.call(this, ...args);
            flag = false;
            setTimeout(() => {
                flag = true;
            }, delay);
        }
    }
}

function debounce(func, delay) {
    let timer;

    return function(...args) {
        clearTimeout(timer);

        timer = setTimeout(() => {
            func.call(this, ...args);
        }, delay);
    }
}

