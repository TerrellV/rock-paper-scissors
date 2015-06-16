$(document).ready(function(){
    alert("i work");
    
    var compChoice = function() {
        var computerChoice = Math.random();
        
        if (computerChoice < 0.34) {
            return "rock";
        } else if (computerChoice <= 0.67) {
            return "paper";
        } else {
            return "scissors";
        }
    }
    
    $("#cRock").click(function() {
        $(".choices").hide();
        var userChoice = "rock";
        var setChoice = compChoice();
        runGame(userChoice, setChoice);
        displayAnswers();
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
    
    /* Reset Button Click Event*/
    $("#reset").click(function() {
        var empty = document.getElementById("Answer");
        empty.innerHTML = "";
        $(".choices").show(100);
    })
    
    
    
    var runGame = function(user, comp) {

        if (user === comp) {
            return disChoices(user, comp);
        };

        if (user === "rock") {
            if (comp === "scissors") {
                disChoices(user, comp);
                return 10;
            } else {
                return disChoices(user, comp);
            }
        };

        if (user === "paper") {
            if (comp === "rock") {
                return disChoices(user, comp);
            } else {
                return disChoices(user, comp);
            }
        };

        if (user === "scissors") {
            if (comp === "paper") {
                return disChoices(user, comp);
            } else {
                return disChoices(user, comp);
            }
        }
    }
    
    var disChoices = function(user, comp){
        var elem = document.getElementById("Answer");
        elem.innerHTML = ("You Chose: " + user +"!" +"<br>" + " The Comp Chose: " + comp+"!");
        
    }
    
    //var reset = function() {
    //}
    
  //end program  
})

// Add function for display Winnder after diplay choices.
// format the html that is inserted into the page etc... 
// Create a reset button