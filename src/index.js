export const fibonacci = function(len) {
    let start = 0;
    let nextNum = 1;
    let newNum = 0;
    let aux = [];
    for (let i = 0; i < len-2; i++) { //len-2 so it prints the correct length of numbers, the first two are outside the loop
        newNum = start + nextNum
        aux.push(newNum);
        start = nextNum;
        nextNum = newNum;
    }
    console.log(aux)
}

export const fibonacciRecursive = function(len) {
    let correctSequence = fibonacciRecursive(len-1);
    if (len === 2) {
        return [0, 1]
    }
    else if (len === 1) {
        return [0];
    }
    else {
        
        const newNum = correctSequence[correctSequence.length - 1] + correctSequence[correctSequence.length -2];
        correctSequence.push(newNum);
    }
    return correctSequence;
}