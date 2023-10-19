function checkAirQuality(){
    const airQualityValue= document.getElementById("airQuality").value
    const result_1 =document.getElementById("result1");
    const result_2 =document.getElementById("result2");

    if (airQualityValue <=50){
        result_1.innerHTML = "Level of health concern: Good";
        result_2.innerHTML = "Level of health effect: Little or no risk";
        document.body.style.backgroundColor="green";
    } else if (airQualityValue <= 100){
        result_1.innerHTML = "Level of health concern: Moderate";
        result_2.innerHTML = "Level of health effect: Acceptable quality";
        document.body.style.backgroundColor="yellow";
    } else if (airQualityValue <= 150){
        result_1.innerHTML = "Level of health concern: Unhealthy for sensitive groups";
        result_2.innerHTML = "Level of health effect: Generable publics not likely affected";
        document.body.style.backgroundColor="orange";
    }; 
}