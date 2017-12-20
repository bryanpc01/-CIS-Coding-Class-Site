// JavaScript Document
	var humanScore = 0;
	var computerScore = 0;
    var humanWin = 0;
    var computerWin = 0;
    
    // stackoverflow.com/questions/1081499/accessing-an-objects-property-from-an-event-listener-call-in-javascript
    
	var updateUI = function(idAttribute) {
		
		this.uiID = idAttribute;
		this.outPutStr   = function(infoOut) { 
            document.getElementById(this.uiID).innerHTML = infoOut.toString(); 
        };
	};
	

    var HumanObj = function(){
        this.buttonChoice = "";
    };
	
	// human choice first rock: human choice + computer choice
	/*
	var HumanFirst = [
		{ win:'paperrock', 		loss:'scissorsrock',	tie:'rockrock' },			
		{ win:'scissorspaper', 	loss:'rockpaper',		tie: 'paperpaper' },
		{ win:'rockscissors',	loss:'paperscissors', 	tie: 'scissorsscissors' }
	];
    */
	var HumanFirst = [
		{ 
		  paperrock:	'win',  
		  scissorsrock: 'loss',	
		  rockrock:		'tie' ,			
		  scissorspaper:'win', 	
		  rockpaper:    'loss',   
		  paperpaper:	'tie' ,
		  rockscissors: 'win',	
		  paperscissors:'loss', 	
		  scissorsscissors: 'tie' 
		}
	];
    
    
	//var humanScore = new updateUI("humanScore");
	//var compScore  = new updateUI("computerScore");
	//var statusOut  = new updateUI("status");
	
	//humanScore.outPutStr(5);
	//compScore.outPutStr(7);
	//statusOut.outPutStr("Computer Wins!");
    
    function begin() {
        
       humanScr = new updateUI("humanScore");
	   compScore  = new updateUI("computerScore");
       humanCounter = new updateUI("P1Win");
       computerCounter = new updateUI("BotWin");
       humanPick = new updateUI("humanPlayed"); 
       computerPick = new updateUI("computerPlayed");
	   statusOut  = new updateUI("winloss");
        
       humanPlay = new HumanObj();
        
	   document.getElementById('rock').addEventListener("click", choice, false);
	   document.getElementById('paper').addEventListener("click", choice, false);
	   document.getElementById('scissors').addEventListener("click", choice, false);
        
    }
    
    function choice(event){
		
        humanPlay.buttonChoice = event.target.innerHTML.toLowerCase();
		
		computerPlay = getComputerPlay();
		
		thePlay = humanPlay.buttonChoice + computerPlay;

        result = _.pluck(HumanFirst, thePlay);
        
		statusOut.outPutStr(updateStatus( result[0] ));
        humanScr.outPutStr(humanScore);
		compScore.outPutStr(computerScore);
        humanCounter.outPutStr(humanWin);
        computerCounter.outPutStr(computerWin);
        humanPick.outPutStr(humanPlay.buttonChoice);
		
    }//choice
	//////////////////////////////////////////////////////
	//     Update how we present status using bootstrap.//
    //////////////////////////////////////////////////////
	function updateStatus( resultArr ){
		
		switch( resultArr ){
			
			case "win":
				++humanScore;
                ++humanWin;
                computerWin = 0;
				 statusStr = "You win! :)";
			break;
			case "loss":
				++computerScore;
                humanWin = 0;
                ++computerWin;
				statusStr = "You lose. :(";
			break;
			case "tie":
				statusStr = "You tied. :|";
			break;
			default:
				statusStr = "Huh? :p"
			
		}//switch
    
        computerPick.outPutStr(computerPlay);
        
        return statusStr;
	}
	//////////////////////////////////////////////////////
	function getComputerPlay() {
	  var plays = ['rock', 'paper', 'scissors'];
	  var play = plays[Math.floor(Math.random() * plays.length)];
	  return play;
	}
	
    window.addEventListener( "load", begin, false );
    
    //http://stackoverflow.com/questions/17054371/underscore-js-where-finding-sub-objects
    //http://stackoverflow.com/questions/21631127/find-the-array-index-of-an-object-with-a-specific-key-value-in-underscore