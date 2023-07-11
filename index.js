// first generate the random number
let randomNumber = parseInt(Math.random()*100 + 1);

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');
const p = document.createElement('p');

let preGuess = []
let numGuess = 1;
let playGame = true;
if(playGame){
    submit.addEventListener('click', function(e){
        e.preventDefault();
        const guess = parseInt(userInput.value)
        validateGuess(guess)
    })
}

function validateGuess(guess){
   // check for validation
   if(isNaN(guess)){
    alert('Plese enter a valid number');
   } else if(guess < 1){
    alert('Plese enter a number more than 1');
   }else if(guess > 100){
    alert('Plese enter a number less than 100');
   }
   else{
    preGuess.push(guess)
    if(numGuess === 11){
        cleanupGuess(guess);
        displayMessage(`Game Over. Random number was ${randomNumber}`)
        endGame()
    } else{
        cleanupGuess(guess);
       checkGuess(guess) 
    }
   }
}

function checkGuess(guess){
    // in this function we check the guess is equal to random no. or not  if equal then we use displayGame function say you win 
    if(guess == randomNumber){
        displayMessage(`You guessed it right`);
        endGame();
    } else if(guess < randomNumber){
        displayMessage(`Number is TOOO low`);
    } else if(guess > randomNumber){
        displayMessage(`Number is TOOO high`);
    }
}

function cleanupGuess(guess){
    //this function is check the value is low or high to gusses and clean the value for the next input and it is update the array and remaining guesses
    userInput.value = ''
    guessSlot.innerHTML += `${guess}, `
    numGuess++;
    remaining.innerHTML = `${11 - numGuess}`
    
}

function displayMessage(message){
    // here we pass the message and print 
    lowOrHi.innerHTML = `<h2>${message}</h2>`
}

function endGame(){
    // end the game
    userInput.value = '';
    userInput.setAttribute('disabled', '');
    p.classList.add('button');
    p.innerHTML = `<h2 id="newGame">Start new Game</h2>`;
    startOver.appendChild(p);
    playGame = false;
    newGame()
}

function newGame(){
    // starting for new game
    const newGameButton = document.querySelector('#newGame');
    newGameButton.addEventListener('click', function(e){
        randomNumber = parseInt(Math.random()*100 + 1);
        preGuess = []
        numGuess = 1;
        guessSlot.innerHTML = '';
        remaining.innerHTML = `${11 - numGuess}`;
        userInput.removeAttribute('disabled');
        startOver.removeChild(p)
       
       
        playGame = true; 
        
    })
}


