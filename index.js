const player1 = document.getElementById('name--0');
const player2 = document.getElementById('name--1');

const score1Player = document.getElementById('score--0');
const score2Player = document.getElementById('score--1');

const current1Score = document.getElementById('current--0');
const current2Score = document.getElementById('current--1');

const player1El = document.querySelector('.player--0');
const player2El = document.querySelector('.player--1');

const newGameBtn = document.querySelector('.btn--new');
const rollDice = document.querySelector('.btn--roll');
const holdBtn = document.querySelector('.btn--hold');

const currentLabel = document.querySelector('.current-label');
const diceImage = document.querySelector('.dice');

//Declering global variables
let scores, current1Score, activePlayer, playingGame;

//Starting point
const initialization = function () {
  score1Player.textContent = 0;
  score2Player.textContent = 0;

  scores = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  playingGame = true;

  current1Score.textContent = 0;
  current2Score.textContent = 0;
  diceImage.classList.add('hidden');

  player1El.classList.remove('player--winner');
  player2El.classList.remove('player--winner');

  player1El.classList.add('player--active');
  player2El.classList.remove('player--active');
};
initialization();

//switch to next player
const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  currentScore = 0;
  player1El.classList.toggle('player--active');
  player2El.classList.toggle('player--active');
};

//Rolling dice function
rollDice.addEventListener('click', () => {
  if (playingGame) {
    //1. Generating a random dice roll
    const diceNumber = Math.trunc(Math.random() * 6 + 1);
    console.log(diceNumber);

    //2. Display dice
    diceImage.classList.remove('hidden');

    diceImage.src = `dice-${diceNumber}.png`;

    //3. Check for rolled 1: if true
    if (diceNumber !== 1) {
      //Add dice to current score
      currentScore += diceNumber;
      document.getElementById(
        `current--${activePlayer}`
      ).textContent = currentScore;
    } else {
      //switch to next player
      switchPlayer();
    }
  }
});
//Hold function
holdBtn.addEventListener('click', function () {
  if (playingGame) {
    //Adding current score to active player's score
    scores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];

    //Checking if player's score is >= 50
    if (scores[activePlayer] >= 20) {
      //Finish the game
      diceImage.classList.add('hidden');
      playingGame = false;
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
    } else {
      //Switch to next player
      switchPlayer();
    }
  }
});
newGameBtn.addEventListener('click', function () {
  initialization();
});
