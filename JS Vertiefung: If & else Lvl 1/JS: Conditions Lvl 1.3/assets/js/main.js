

function adult(){
    const inputAge = Number(document.getElementById("input").value);
    console.log(inputAge)

    if (inputAge >= 18){
        document.getElementById("result").textContent ="Ja, du kannst Shisa rauchen"
        console.log("True")
        
    } else{
        document.getElementById("result").textContent ="Du darfst noch nicht Shisa Rauchen"
        console.log("False")
    }
}