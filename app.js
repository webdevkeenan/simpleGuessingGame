let maximum = parseInt(prompt("Enter the maximum number!"));
while (!maximum) {
    maximum = parseInt(prompt("Enter a valid number!"));
}

const targetNum = Math.floor(Math.random() * maximum) + 1;


let guess = parseInt(prompt("Enter Your First Guess!"));
let attempts = 1;

while(guess !== targetNum) {
    attempts++;
    if(guess > targetNum) {
        guess = parseInt(prompt("Too High Enter Another Guess:"));
    } else {
        guess = parseInt(prompt("Too Low! Enter A New Guess:"));
    }
}
alert(`YOU GOT IT!!! In ${attempts} Trie(s)!! The answer was ${targetNum}`);




