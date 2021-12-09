const inputs = document.querySelectorAll(".angle-input");
const isTriangleBtn = document.querySelector("#is-triangle-btn");
const output = document.querySelector("#output");

function sum(angle1, angle2, angle3){
    return angle1 + angle2 + angle3
}
function isTriangle(){
    const sumOfAngles = sum(Number(inputs[0].value), Number(inputs[1].value), Number(inputs[2].value))
    if(sumOfAngles === 180){
        output.innerText = "Yes, the angles form a triangle";
    }
    else{
        output.innerText = "No, the angles do not form a triangle";
    }
}

isTriangleBtn.addEventListener("click", isTriangle);