//Global Variables to be used in the script
        
        var randomNum1; //used to generate the a random number between 1 and 9 included
        var randomNum2; //used to generate the a random number between 1 and 9 included
        
        var right = 0; //running tally of correct answers; right resets after newQuestion has ran ten times
        var wrong = 0; //running tally of incorrect answers; wrong resets after newQuestion has ran ten times
        var questionCounter = 0; //running tally of the amount of times newQuestion runs
        var maxAnswers = 5; // number of questions needed to get correct before game ends.

        //newQuestion function should run when page loads and whenever the user answers a question correctly
        //newQuestion function should run 10 times then rest all counters; right , wrong , questionCounter
        function newQuestion() {
        
            //generate random numbers for the question.
            randomNum1 = Math.floor(Math.random() * 9) + 1; // random number between 1 and 9
            randomNum2 = Math.floor(Math.random() * 9) + 1; // random number between 1 and 9
            console.log("Random Number 1: " + randomNum1 + "\n Random Number 2: " + randomNum2 );
            
            //display question to the document
            var question = document.getElementById("question9.22");
            question.innerHTML = "How much is " + randomNum1 + " times " + randomNum2 + "?&nbsp;";
            
            //answerField should be empty and focused every new question
            document.getElementById("answerField").value="";
            document.getElementById("answerField").focus();

            //event listener for checkButton
            //if check button is pressed it runs the function checkProblem
            var button = document.getElementById("checkButton");
            button.addEventListener("click", checkProblem, false);
            
            questionCounter++; // add one to the amount of questions displayed; resets after ten questions 
            console.log("This is question number " + questionCounter );
        }
        
        //checkProblem should display a newQuestion after it finish checking the problem
        function checkProblem() {
            
            // local variables for checkProblem
			var userAnswer = document.getElementById("answerField").value; // collect value from user input
			var correctAnswer = randomNum1 * randomNum2; // calculates the correct answer  			 
            
            // check if answer was correct or incorrect 
            if ( userAnswer == correctAnswer ){
                correctAnswerMsg();
                console.log("Good Job!\n");
            }
            else {
                incorrectAnswerMsg();
                document.getElementById("answerField").value="";
                document.getElementById("answerField").focus();
                console.log("Sorry try again!\n")
            }
            
        }
        
        function countdown(){
            setTimeout("document.getElementById('countdownField').innerHTML = 3",100);
            setTimeout("document.getElementById('countdownField').innerHTML = 2",1100);
            setTimeout("document.getElementById('countdownField').innerHTML = 1",2100);
            setTimeout("document.getElementById('countdownField').innerHTML = '&nbsp;';",3000);
            setTimeout("newGame()",3100);
        }
        
        //function for correct answers
        function correctAnswerMsg( ) {
            
            //local variables for correctAnswerMsg
            var randMessage = Math.floor(Math.random() * 4) + 1; // generates random number for the message 
            var correct = document.getElementById("correct"); // so message can be displayed
            
            //display message to the user
            switch ( randMessage ){
                        case 1:{
                            correct.innerHTML = "Very Good!"; 
				            correct.style.color = 'green';
                            right++;
                            countdown();
                            //newGame(); //check and see if a new game is needed
                            break;
                        }
                        case 2:{
                            correct.innerHTML = "Excellent!"; 
				            correct.style.color = 'green';
                            right++;
                            countdown();
                            //newGame(); //check and see if a new game is needed
                            break;
                        }
                        case 3:{
                            correct.innerHTML = "Nice work!"; 
				            correct.style.color = 'green';
                            right++;
                            countdown();
                            //newGame(); //check and see if a new game is needed
                            break;
                        }
                        case 4:{
                            correct.innerHTML = "Keep up the good work!"; 
				            correct.style.color = 'green';  
                            right++;
                            countdown();
                            //newGame(); //check and see if a new game is needed
                            break;
                        }
            }
        }
        
        //function for incorrect answers
        function incorrectAnswerMsg( ) {
            
            //local variables for correctAnswerMsg
            var randMessage = Math.floor(Math.random() * 4) + 1; // generates random number for the message 
            var correct = document.getElementById("correct"); // so message can be displayed
            
            //display message to the user
            switch ( randMessage ){
                        case 1:{
                            correct.innerHTML = "No. Please try again."; 
				            correct.style.color = 'red';
                            wrong++;
                            break;
                        }
                        case 2:{
                            correct.innerHTML = "Wrong. Try once more."; 
				            correct.style.color = 'red'; 
                            wrong++;
                            break;
                        }
                        case 3:{
                            correct.innerHTML = "Don't give up!"; 
				            correct.style.color = 'red';  
                            wrong++;
                            break;
                        }
                        case 4:{
                            correct.innerHTML = "No. Keep trying."; 
				            correct.style.color = 'red';
                            wrong++;
                            break;
                        }
                }
        }
        
        // checks to see if a new game should be displayed
        //newGame function resets all game data
        function newGame() {
            
            // display newQuestion
            // check if questionCounter is over 10; if so run new game function
            if ( questionCounter < maxAnswers)
                    newQuestion();
            
            else {
                
                //display end game message
                gameEnd();
                
                //reset counters
                right = 0;
                wrong = 0; 
                questionCounter = 0;
            
                //display newQuestion
                newQuestion();
            }
        }
        
        //display a message for when the game ends
        function gameEnd() {
            
            //calculate score
            var percent = Math.round(( right * 100 ) / ( right + wrong ));
            console.log("Right answers: " + right +
                        "\n Wrong answers: " + wrong );
            console.log("Score in percent is: " + percent);
            
            //display new message for completing the game
            if (percent < 75){
                    document.getElementById("correct").style.color = "red";
                    document.getElementById("correct").innerHTML = "Game Over!<br/>You scored: " + percent + "%<br/>Please ask your instructor for extra help.<br/>New Game: Please Let The Next Team Play.";
                    console.log("Percent: " + percent);
                } else {
                    document.getElementById("correct").innerHTML = "Game Over!<br/>Great job!<br/>You scored: " + percent + "%<br/>New Game: Please Let The Next Team Play.";
                    console.log("Percent: " + percent); 
                }
        }

        //load function newQuestion when page loads
        window.addEventListener ("load" , newQuestion , false );