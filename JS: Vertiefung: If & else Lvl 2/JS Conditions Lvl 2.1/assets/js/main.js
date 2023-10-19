
// John

const johnGröße = 170;
const johnAlter = 22;

// Meike

const meikeGröße= 168;
const meikeAlter=34;


const johnPunkte = (johnAlter*5) +johnGröße
const meikePunkte = (meikeAlter*5) +meikeGröße

console.log(johnPunkte);
console.log(meikePunkte);

if (johnPunkte > meikePunkte) {
    console.log("John gewinnt mit " + johnPunkte + " Punkten")
} else if (meikePunkte>johnPunkte){
    console.log("Meike gewinnt mit " + meikePunkte + " Punkten")
} else {
    console.log("Unentschieden! Beide Spieler haben " + johnPunkte + " Punkte")
} 