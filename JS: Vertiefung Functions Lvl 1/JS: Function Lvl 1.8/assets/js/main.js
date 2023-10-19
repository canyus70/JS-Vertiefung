
function calcAge(yearBorn){
    const currentYear = new Date().getFullYear();
    const age = currentYear -yearBorn
    return age
}
console.log(calcAge(1987));

function calcAgeDiff(age1,age2){
    const alterDiff = Math.abs(age1 - age2);
    return alterDiff
}

console.log(calcAgeDiff(36,20));