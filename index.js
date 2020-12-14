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

rollDice.addEventListener('click', () => {
  const diceNumber = Math.trunc(Math.random() * 6 + 1);
  console.log(diceNumber);
  diceNumber.
});
