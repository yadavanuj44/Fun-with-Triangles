const sides = document.querySelectorAll(".side-input");
const hypotenuseBtn = document.querySelector("#hypotenuse-btn");
const output = document.querySelector("#output");

function calculateArea(){
    const productOfSides = Number(sides[0].value)*Number(sides[1].value);
    const result = productOfSides/2;
    output.innerText = result;
}

hypotenuseBtn.addEventListener("click", calculateArea)