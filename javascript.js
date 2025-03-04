let count = 0;
const counterElement = document.getElementById("counter");

document.getElementById("increment").addEventListener("click", function () {
    count=count+1;
    counterElement.textContent = count;
});

document.getElementById("decrement").addEventListener("click", function () {
    if (count > 0) {
        count=count - 1;
        counterElement.textContent = count;
    }
});

document.getElementById("reset").addEventListener("click", function () {
    count = 0;
    counterElement.textContent = count;
});