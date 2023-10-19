function sum(zahl1,zahl2){
    const summe = Number(zahl1 + zahl2)
    // console.log(summe)

    if (zahl1 === zahl2){
        return (summe * 5)
    } else {
        return summe
    }
}

console.log(sum(10,10))