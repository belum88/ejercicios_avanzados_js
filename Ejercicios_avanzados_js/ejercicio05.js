function rollDice(numeroDeCaras) {
    const resultado = Math.floor(Math.random() * numeroDeCaras) + 1;
    return resultado;
}


console.log(rollDice(6)); 
console.log(rollDice(10)); 
console.log(rollDice(20)); 2