//to account for two scenarios or if ____ is this and ____ is that we use a nested if statement

// var userChoice = prompt("Do you choose rock, paper or scissors?");


$(document).ready(function () {
    $("#rockIcon").hide();
    //Setting computer choicefunction
    
    var compChoice = function() {
        var computerChoice = Math.random();
        
        if (computerChoice < 0.34) {
            return "rock";
        } else if (computerChoice <= 0.67) {
            return "paper";
        } else {
            return "scissors";
        }
    };
    
    //END compChoice function
    
    //click action to set value of user and excecute code
    $("#cRock").click(function() {
        $(".choices").hide();
        var userChoice = "rock";
        var setChoice = compChoice();
        runGame(userChoice, setChoice);
        
    });
    
    $("#cPaper").click(function() {
        $(".choices").hide();
        var userChoice = "paper";
        var setChoice = compChoice();
        runGame(userChoice, setChoice);
    });
    
    $("#cScissors").click(function() {
        $(".choices").hide();
        var userChoice = "scissors";
        var setChoice = compChoice();
        runGame(userChoice, setChoice);
    });

    
    
    //reset button
    
//code to give results...
var runGame = function (choice1, choice2) { //gamefunction

    if (choice1 === choice2) {
        alert ("The result is a tie");
        // this is where I want to insert html
    };
   
    if (choice1 === "rock") {
        if (choice2 === "scissors") {
            alert("rock wins");
        } else {
            alert("paper wins");
        }
    };
    
    if (choice1 === "paper") {
        if (choice2 === "rock") {
            alert("paper wins");
        } else {
            alert("scissors wins");
        }
    };
    
    if (choice1 === "scissors") {
        if (choice2 === "paper") {
            alert("scissors wins");
        } else {
            alert("rock wins");
        }
    }
};


});




/* 
 
IN ORDER OF SECTIONS BASED ON SPACE 

0. We Define compare as our function with possibilities of (choice1,choice2)

1. this catches a tie first otherwise it runs the rest of the program
 
2. so now we know its not a tie and we have 3 options for choice 1, and 3 for choice 2. We will define all options for choice one because that is the user generated item. and in doing so we will account for all scenarios.it will make sense as you read the other comments.
    
3. The same reasoning above accounts for these as well. We start be defining if c1 is paper and then below that we do if c1 is scissors declaring scenarios for the only other two options [remember the tie has already been defined in our first section of code]

4. "same as above"

5. We call our function with the userChoice, and computerChoice. 

CONGRATS - Just practice creating the if statements and practice using the functions and then combine the 2. BAM! 
    
 */