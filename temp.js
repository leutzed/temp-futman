/*
fazer um código de 45 rounds
pegar uma probabilidade de 3/50
*/

const gremio = 80;
const inter = 10;
const round = 50;
const proba = (3/round);


let goltime1 = (gremio * proba / 100);
let goltime2 = (inter * proba / 100);

console.log(goltime1, goltime2);

function randomNumber(min, max) { 
    let xips = Math.round(Math.random() * (max - min) + min)
    console.log("Xips", xips)
    return xips;
} 

function fib3(timeA, timeB) {
    if(randomNumber(1, 3) == 1) {
        return timeA;
    }
    return timeB;
}

function fib5(timeA, timeB) {
    const atumalaca = randomNumber(1, 4);
    if(atumalaca == 1 || atumalaca == 2) {
        return timeA;
    }
    return timeB;
}

function gols () {
    let numeroRand = Math.floor(Math.random() * (7));
    console.log(numeroRand)
    return numeroRand;
}

function minutesGols () {
    let golsTotal = gols();
    let golsMarcados = [];
    for (let index = 0; index < golsTotal; index++) {
        golsMarcados.push(Math.floor(Math.random() * (50)));
    }
    console.log("Gols marcados", golsMarcados)
    return golsMarcados;
}

function playGame (timeA, timeB) {
    console.log(timeA, timeB)
    let prob = goltime1 - goltime2;

    let golA = 0, golB = 0;
    let golsMinutos = minutesGols();
    let result;
    
    for (let index = 0; index <= 50; index++) {
        golsMinutos.forEach((golDoMinuto) => {
            // console.log("Gol do minuto: ", golDoMinuto)
            if (golDoMinuto == index) {
                console.log("cheguei")
                if (prob < 3) {
                    result = fib3(timeA, timeB);
                        if (result == timeA) {
                            golA++;
                        } else {
                            golB++;
                        }
                } else if (prob < 5) {
                    result = fib5(timeA, timeB);
                    if (result == timeA) {
                        golA++;
                    } else {
                        golB++;
                    }
                }
                console.log(result)
            }
        });
    }
    console.log("Time a: ", golA, " Time B: ", golB)
}

playGame(gremio, inter);
