var info = {
    "ROCK":"PAPER",
    "PAPER":"SCISSORS",
    "SCISSORS":"ROCK"
};

var score = {
    "user": 0,
    "comp": 0,
    "tie":0
}

function computerPlay() {
    values = Object.values(info);
    return values[Math.floor(Math.random() * values.length)].toUpperCase();
}

function playerPlay() {
    user = prompt("What do you choose ?");
    return user.toUpperCase();
}

function check(userval, compval) {
    if ( info[userval] === compval ) {
        score["comp"]++;
        console.log(`You lose ! ${compval} beats ${userval} `);
    }
    else if ( userval === compval ) {
        score["tie"]++;
        console.log("Tie !");
    }
    else {
        score["user"]++;
        console.log(`You win ! ${userval} beats ${compval} `);
    }
}

function game() {
    for (let i = 0; i < 5; i++) {
        userselection = playerPlay();
        computerselection = computerPlay();
        check(userselection,computerselection);
    }
    console.log(`
    User Wins ${score["user"]}
    Computer Wins ${score["comp"]}
    Tie's ${score["tie"]}`);
}

game();