const game = ()=> {

    
    let pScore = 0;
    let cScore = 0;

    const startGame = () => {
        const playBtn = document.querySelector('.intro button');
        const introScreen = document.querySelector('.intro');
        const match = document.querySelector('.match');
    

    playBtn.addEventListener('click', () => {
        introScreen.classList.add('fadeOut');
        match.classList.add('fadeIn');
        });
    };

    //play match
    const playMatch = () => {
        const options = document.querySelectorAll('.options button');
        const playerHand = document.querySelector('.player-hand');
        const computerHand = document.querySelector('.computer-hand');
        const hands = document.querySelectorAll('.hands img');

        hands.forEach(hand => {
            hand.addEventListener('animationend', function() {
                this.style.animation = ''
            })
        })
        // computer options
        const computerOptions = ['rock', 'paper', 'scissors'];

        options.forEach(option => {
            option.addEventListener('click', function() {
                //src = https://randojs.com/
                const computerNumber = rando(0, 2);
                const computerChoice = computerOptions[computerNumber];

                setTimeout(() => {
                    //compare
                    compareHands(this.textContent, computerChoice);

                    //update images
                    playerHand.src = `./assets/${this.textContent}.png`;
                    computerHand.src = `./assets/${computerChoice}.png`;
                }, 2000)

                playerHand.style.animation = 'shakePlayer 2s ease';
                computerHand.style.animation = 'shakeComputer 2s ease';
            })
        })
    }

    const updateScore = () => {
        const playerScore = document.querySelector('.player-score p');
        const computerScore = document.querySelector('.computer-score p');
        playerScore.textContent = pScore;
        computerScore.textContent = cScore;
        setStorage()
    }

    const compareHands = (playerChoice, computerChoice) => {
        const info = {
            "paper": "rock", 
            "rock": "scissors", 
            "scissors": "paper"
        }
        const winner = document.querySelector('.winner');

        if (playerChoice === info[computerChoice]) {
            winner.textContent = `You lose!`;
            cScore++;
            updateScore()
            return;
        }
        else if (playerChoice === computerChoice) {
            winner.textContent = `It's a Tie ^_^`
            return;
        }
        else if (playerChoice in info && info[playerChoice] === computerChoice) {
            winner.textContent = `You won!`
            pScore++;
            updateScore()
            return;
        }
    }

    // set storage
    function setStorage() {
        localStorage.setItem("pScore", pScore)
        localStorage.setItem("cScore", cScore)
    }

    function addScoreStorage() {
        if (localStorage.length !== 0) {
            pScore = localStorage.getItem("pScore");
            cScore = localStorage.getItem("cScore");
            updateScore()
        }
    }
    
    document.querySelector('.resScore').addEventListener('click', () => {
        localStorage.clear();
        location.reload();
    })
    // inner fucntions calls
    addScoreStorage();
    startGame();
    playMatch();
}

game();