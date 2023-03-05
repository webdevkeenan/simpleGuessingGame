let maximum = parseInt(prompt("Enter the maximum number!"));
while (!maximum) {
    maximum = parseInt(prompt("Enter a valid number!"));
}

const targetNum = Math.floor(Math.random() * maximum) + 1;


let guess = parseInt(prompt("Enter Your First Guess!"));
let attempts = 1;

while(parseInt (guess) !== targetNum) {
    if (guess === 'q') break;
    attempts++;
    if (guess > targetNum) {
        guess = prompt("Too High Enter Another Guess OR (Type \"q\" to end game)");
    } else {
        guess = prompt("Too Low! Enter A New Guess OR (Type \"q\" or \"quit\" to end game)");
    }
}
if (guess === 'q') {
alert('GAME OVER. REFRESH THE PAGE TO TRY AGAIN')
} else {
alert(`YOU GOT IT!!! In ${attempts} Trie(s)!! The answer was ${targetNum}
 (REFRESH THE PAGE TO TRY AGAIN)`);
}



