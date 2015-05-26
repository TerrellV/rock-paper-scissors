//to account for two scenarios or if ____ is this and ____ is that we use a nested if statement

var userChoice = prompt("Do you choose rock, paper or scissors?");

var computerChoice = Math.random();
if (computerChoice <0.34) {computerChoice = "rock";}
else if(computerChoice <=0.67) {computerChoice = "paper";}
else{computerChoice = "scissors";}


var compare = function(choice1, choice2){

    if (choice1 === choice2) {return "The result is a tie";}
   
    if (choice1 === "rock"){if (choice2 === "scissors"){return "rock wins";}
    else {return "paper wins";}}
    
    if (choice1 === "paper"){if (choice2 === "rock"){return "paper wins";}
    else {return "scissors wins";}}
    
    if (choice1 === "scissors"){if (choice2 === "paper"){return "scissors wins";}
    else {return "rock wins";}}
    };


compare(userChoice, computerChoice);

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