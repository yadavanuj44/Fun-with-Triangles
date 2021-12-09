const sides = document.querySelectorAll(".side-input");
const hypotenuseBtn = document.querySelector("#hypotenuse-btn");
const output = document.querySelector("#output");

function calculateHypotenuse(){
    const sumOfSquares = Number(sides[0].value)*Number(sides[0].value) + Number(sides[1].value)*Number(sides[1].value);
    const result = Math.sqrt(sumOfSquares);
    output.innerText = result;
}

hypotenuseBtn.addEventListener("click", calculateHypotenuse)