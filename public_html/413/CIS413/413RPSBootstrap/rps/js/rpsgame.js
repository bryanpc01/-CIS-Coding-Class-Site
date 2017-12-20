// JavaScript Document
var humanScore = 0;
var computerScore = 0;

//document.getElementById('rock').onclick = playRock;
//document.getElementById('paper').onclick = playPaper;
//document.getElementById('scissors').onclick = playScissors;

function beginrps(){
	
	var rock  = document.getElementById('rock');
	var paper = document.getElementById('paper');
	var scissors = document.getElementById('scissors');
	
	    rock.addEventListener("click", playRock, false);
	   paper.addEventListener("click", playPaper, false);
	scissors.addEventListener("click", playScissors, false);
}




function playRock() {
  play("rock");
}
function playPaper() {
  play("paper");
}
function playScissors() {
  play("scissors");
}

function play(humanPlay) {
  
  computerPlay = getComputerPlay();
  
  var thePlay = humanPlay + computerPlay;
  
  if (thePlay == 'rockrock' || thePlay == 'paperpaper' || thePlay == 'scissorsscissors') {
	 document.getElementById('status').innerHTML = "<p>You tied. :|</p>"; 
  }
  else if(thePlay == 'paperrock' || thePlay == 'scissorspaper' || thePlay == 'rockscissors') {
	  document.getElementById('status').innerHTML = "<p>You Win. :)</p>";
	  ++humanScore;
  }
  else if(thePlay == 'rockpaper' || thePlay == 'paperscissors' || thePlay == 'scissorsrock') {
	document.getElementById('status').innerHTML = "<p>You Lose. :(</p>";
	 ++computerScore;
 }
  
  document.getElementById('humanScore').innerHTML = humanScore;
  document.getElementById('computerScore').innerHTML = computerScore;
  
}

function getComputerPlay() {
  var plays = ['rock', 'paper', 'scissors'];
  var play = plays[  Math.floor(Math.random() * plays.length)   ];
  return play;
}



window.addEventListener( "load", beginrps, false );







