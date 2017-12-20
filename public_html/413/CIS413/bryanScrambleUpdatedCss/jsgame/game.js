// JavaScript Document
var originalWord;
var scrambleWord;

var ulProgress  = document.getElementById('progress');
var ulMixup     = document.getElementById('mixUp');
var ulRemaining = document.getElementById('remaining');


var btnNewGame = document.getElementById('btnNewGame');
var btnCheck   = document.getElementById('btnCheck');
var userAnswer = document.getElementById('txtGuess');

var guess1 = document.getElementById('btnGuess1');
var guess2 = document.getElementById('btnGuess2');
var guess3 = document.getElementById('btnGuess3');
var guess4 = document.getElementById('btnGuess4');

var badgeWon  = document.getElementById('gamesWonCounter');
var badgeLost = document.getElementById('gamesLostCounter');

var reset = document.getElementById('btnReset');

var counter;
var gameOver;

var gamesWon = 0;
var gamesLost = 0;
	
function start() {
    //Get the Scrambled Word and STORE the Original
    originalWord = getWord();
	scrambleWord = scramble(originalWord);
	//console.log(originalWord + "  " + scrambleWord);  //..for debugging  
    
    //Start game 
    //Start game 
    counter = 4;
    ulMixup.innerHTML = "Unscramble: <strong>" + scrambleWord + "<strong>";
    ulRemaining.innerHTML = "Remaining Tries: <strong>" + counter + "</strong>";
    ulProgress.innerHTML = "Good Luck";
    
    btnNewGame.addEventListener("click", newGame, false);
    btnCheck.addEventListener("click", checkGuess, false);
    reset.addEventListener("click", resetScore, false);
    
    gameOver = false;
    
    badgeWon.innerHTML  = gamesWon;
    badgeLost.innerHTML = gamesLost;
    
} // start
function resetScore(){
    gamesWon = 0;
    badgeWon.innerHTML = gamesWon;
    
    gamesLost = 0;
    badgeLost.innerHTML = gamesLost;
}
function newGame(){
    start();
    
    btnCheck.disabled = false;
    
    userAnswer.value = "";
    userAnswer.placeholder = "Enter Your Guess Here";
    
    userAnswer.focus();
    
    guess1.innerHTML = "";
    guess2.innerHTML = "";
    guess3.innerHTML = "";
    guess4.innerHTML = "";
    
    gameOver = false;
    
} // newGame

function checkGuess(){
    counter--;
    
    switch( counter ){
        case 3: 
            guess1.innerHTML = "<strong>" + userAnswer.value + "</strong>";
            break;
        case 2: 
            guess2.innerHTML = "<strong>" + userAnswer.value + "</strong>";
            break;
        case 1: 
            guess3.innerHTML = "<strong>" + userAnswer.value + "</strong>";
            break;
        case 0: 
            guess4.innerHTML = "<strong>" + userAnswer.value + "</strong>";
            break;
        
    }
    if ( originalWord == userAnswer.value) {
        btnCheck.disabled = true;
        ulRemaining.innerHTML = "Great!";
        ulProgress.innerHTML = "You Win, the word was: " + originalWord; 
        gamesWon++;
        badgeWon.innerHTML = gamesWon;
        gameOver = true;
    }
    else{
        if ( counter == 0 ){
            btnCheck.disabled = true;
            ulRemaining.innerHTML = "You are out of tries";
            ulProgress.innerHTML = "You lost, the word was: " + originalWord;
            gamesLost++;
            badgeLost.innerHTML = gamesLost;
            gameOver = true;
    
        } else{
            ulRemaining.innerHTML = "Remaining Tries: <strong>" + counter + "</strong>";
            ulProgress.innerHTML = "Keep Trying!";
        }
    }

    userAnswer.value = "";
    userAnswer.placeholder = "Enter Another Guess";
}
function scramble(word){
			//console.log(word);
			var arr = word.split(""); //..creates an array of letters from word
			//console.log(arr);
			var backWord = "";
			while(arr.length) {
				var n = Math.floor(Math.random() * arr.length);
				backWord += arr[n];
				arr.splice(n, 1);
			} // while
			return backWord;
	} // scramble
		
	function getWord(){	
			return four_array[getRandom(0, four_array.length-1)];		//..grab a word from the array
	} // getWord
	
		//..function to generate a random integer between minimum and maximum, inclusively
	function getRandom(minimum, maximum) {
			return Math.floor(Math.random()*(maximum-minimum+1)+minimum);
	} // getRandom

function enterPressed(e){
    if (e.which == "13"){
        
        e.preventDefault();
        
        if (gameOver == false){
            checkGuess();
        }else {
            userAnswer.value = "";
            userAnswer.placeholder = "Press Alt+Enter for New Game";
        }
    }
}

function ctrlEnter(event){
    
    if (  event.altKey && (event.which == "13") ) {
        
        newGame();
    }
}

window.addEventListener( "load", start, false );
window.addEventListener("keypress", enterPressed, false);
window.addEventListener("keydown", ctrlEnter, false);
