let pizzaVotes = 0;
let burgerVotes = 0;
let sushiVotes = 0;
let totalVotes = 0;

function vote(item) {
    switch (item) {
        case 'pizza':
            pizzaVotes++;
            break;
        case 'burger':
            burgerVotes++;
            break;
        case 'sushi':
            sushiVotes++;
            break;
        default:
            break;
    }
    
    totalVotes++;
    console.log(`Votes: Pizza: ${pizzaVotes}, Burger: ${burgerVotes}, Sushi: ${sushiVotes}`);

    if (totalVotes >= 8) {
        disableVotingButtons();
        determineWinners();
    } else {
        displayMessage(`You voted for ${item}! Enjoy your meal!`);
    }
}

function disableVotingButtons() {
    document.getElementById("pizzaBtn").disabled = true;
    document.getElementById("burgerBtn").disabled = true;
    document.getElementById("sushiBtn").disabled = true;
    alert("Voting is closed");
}

function determineWinners() {
    let winners = [];
    
    // Determine Pizza winner
    let pizzaWinner = (pizzaVotes > burgerVotes && pizzaVotes > sushiVotes) ? "Pizza" : "";
    if (pizzaWinner !== "") {
        winners.push(pizzaWinner);
    }
    
    // Determine Burger winner
    let burgerWinner = (burgerVotes > pizzaVotes && burgerVotes > sushiVotes) ? "Burger" : "";
    if (burgerWinner !== "") {
        winners.push(burgerWinner);
    }
    
    // Determine Sushi winner
    let sushiWinner = (sushiVotes > pizzaVotes && sushiVotes > burgerVotes) ? "Sushi" : "";
    if (sushiWinner !== "") {
        winners.push(sushiWinner);
    }

    displayMessage(`Voting Closed. Winner is: ${winners.join(", ")}`);
}

function displayMessage(message) {
    document.getElementById('displayText').textContent = message;
}
