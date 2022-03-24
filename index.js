// make a random event probability algorithm
function randomEvent(probability) {
    var randomNumber = Math.random();
    console.log(randomNumber);
    if (randomNumber < probability) {
        return true;
    }
    return false;
}

console.log(randomEvent(0.5));
