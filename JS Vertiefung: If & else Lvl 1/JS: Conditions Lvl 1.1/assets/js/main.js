


function adult(){
    const inputAge = Number(document.getElementById("userAge").value);
    console.log(inputAge)

    if (inputAge >= 18){
        // document.write("Volljährig")
        // document.body.innerHTML ="Volljährig"
        document.getElementById("result").textContent ="Volljährig"
        console.log("True")
        
    } else{
        // document.write("Minderjährig")
        // document.body.innerHTML ="Minderjährig"
        document.getElementById("result").textContent ="Minderjährig"
        console.log("False")
    }
}