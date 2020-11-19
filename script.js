var score, roundScore, activePlayer, dice, game;
function init() {
  score = [0, 0];
  roundScore = 0;
  activePlayer = 0;
  game = true;

  document.querySelector(".dice").style.display = "none";

  document.getElementById("score--0").textContent = "0";
  document.getElementById("score--1").textContent = "0";
  document.getElementById("current--0").textContent = "0";
  document.getElementById("current--1").textContent = "0";
  document.getElementById("name--0").textContent = "Player 1";
  document.getElementById("name--1").textContent = "Player 2";
  document.querySelector(".player--0").classList.remove("player--winner");
  document.querySelector(".player--1").classList.remove("player--winner");
  document.querySelector(".player--0").classList.remove("player--active");
  document.querySelector(".player--1").classList.remove("player--active");
  document.querySelector(".player--0").classList.add("player--active");
}

init();


document.querySelector(".btn--roll").addEventListener("click", function() {
  if (game) {

    dice = Math.floor(Math.random() * 6) + 1;

    var x = document.querySelector(".dice");
    x.style.display = "block";
    x.src = "dice-" + dice + ".png";
  

    if (dice !== 1) {
      roundScore = roundScore + dice;
      document.querySelector("#current--" + activePlayer).textContent = roundScore;
    } else {
      nextPlayer();
    }

  }
});

document.querySelector(".btn--hold").addEventListener("click", function() {
  if (game){
    score[activePlayer] = roundScore + score[activePlayer];
    document.querySelector("#score--" + activePlayer).textContent = score[activePlayer];

    if (score[activePlayer] >= 50) {
      document.querySelector("#name--" + activePlayer).textContent = "Winner!!";
      document.querySelector(".dice").style.display = "none";
      document.querySelector(".player--" + activePlayer).classList.add("player--winner");
      document.querySelector(".player--" + activePlayer).classList.remove("player--active");
      game = false;
    }
    else
      nextPlayer();

  }


});

function nextPlayer() {

  activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
  roundScore = 0;


  document.getElementById("current--0").textConetent = "0";
  document.getElementById("current--0").textConetent = "0";

  document.querySelector(".player--0").classList.toggle("player--active");
  document.querySelector(".player--1").classList.toggle("player--active");
}

document.querySelector(".btn--new").addEventListener("click", init);
