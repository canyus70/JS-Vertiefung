function diff27(zahl){
    let differenz = zahl -27;
    if (zahl >27){
        differenz *= 2;
    }
    return differenz
}

console.log(diff27(35));
console.log(diff27(74));
console.log(diff27(123));