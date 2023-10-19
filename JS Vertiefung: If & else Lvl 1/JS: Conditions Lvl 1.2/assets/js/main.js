
function weather() {
    const inputNumber = Number(document.getElementById("inputNumberId").value);

    if (inputNumber <=10 && inputNumber >=8){
        document.getElementById("resultId").textContent ="Die Wetter Qualität ist: super"
    } else if (inputNumber <8 && inputNumber >=6){
        document.getElementById("resultId").textContent ="Die Wetter Qualität ist: gut"
    } else if (inputNumber <=5 && inputNumber >=2){
        document.getElementById("resultId").textContent ="Die Wetter Qualität ist: okey"
    }else if (inputNumber <=2 && inputNumber >=0){
        document.getElementById("resultId").textContent ="Die Wetter Qualität ist: schlecht"
    }
}