$(document).ready(function(){
    alert("Working");
    
    //seting variables for result images
    var rockIcon = "<img src='../images/Rock-Icon.png' class='icons'/>";
    var paperIcon = "<img src='../images/Paper-Icon.png' class='icons'/>";
    var scissorsIcon = "<img src='../images/Scissors-Icon.png' class='icons'/>";
    
    //set global variables to track user and computer choices
    var userChoice = "";
    var setChoice = "";
    
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
        $(".buttons").hide();
        userChoice = "rock";
        setChoice = compChoice();
        runGame(userChoice, setChoice);
    });
    
    $("#cPaper").click(function() {
        $(".buttons").hide();
        userChoice = "paper";
        setChoice = compChoice();
        runGame(userChoice, setChoice);
    });
    
    $("#cScissors").click(function() {
        $(".buttons").hide();
        userChoice = "scissors";
        setChoice = compChoice();
        runGame(userChoice, setChoice);
    });
    
    
    /* Reset Button Click Event*/
    
    $("#resetBox").click(function() {
        var empty = document.getElementById("results");
        empty.innerHTML = "";
        $(".buttons").show();
    })
    
    
    var runGame = function(user, comp) {
        if (user === comp) {
            disChoices(user, comp);
            return ;
            //tie
        };

        if (user === "rock") {
            if (comp === "scissors") {
                disChoices(user, comp);
                return;
                //user wins
            } else {
                return disChoices(user, comp);
                // comp wins
            }
        };

        if (user === "paper") {
            if (comp === "rock") {
                return disChoices(user, comp);
                //user wins
            } else {
                return disChoices(user, comp);
                //comp wins
            }
        };

        if (user === "scissors") {
            if (comp === "paper") {
                return disChoices("scissors", "paper");
                //user wins
            } else {
                return disChoices("scissors", "rock");
                //comp wins
            }
        }
    }
    
    
    var disChoices = function(user, comp){
        var elem = document.getElementById("results");
        
        if (user === "rock") {
            var userImage = rockIcon;    
        } else if (user === "paper") {
            var userImage = paperIcon;    
        } else if (user === "scissors") {
            var userImage = scissorsIcon;    
        };
        
        if (comp === "rock") {
            var compImage = rockIcon;    
        } else if (comp === "paper") {
            var compImage = paperIcon;    
        } else if (comp === "scissors") {
            var compImage = scissorsIcon;    
        };
        
        var inserthtml = 
            
                "<div id ='b1_2'>" +
                    "<div id='b1_3'>" +
                        "<h2 class ='h1s col-lg-6 col-md-6 col-sm-6 col-sm-6' id='userdis'>USER</h2>" +
                        "<h2 class ='h1s col-lg-6 col-md-6 col-sm-6 col-sm-6' id='compdis'>COMP</h2>" +
                    "</div>" +
                "</div>" +

                "<div id ='display'>" +
                    "<div class='ditem'>" + userImage +
                    "</div>" +
                    "<div class='ditem'>" +
                        "<span id='vs'>VS</span>" +
                    "</div>" +
                    "<div class='ditem'>" + compImage +
                    "</div>" +
                "</div>";
        
        elem.innerHTML = inserthtml;
    }
    
    
  //end program  
})

// Add function for display Winnder after diplay choices.
// format the html that is inserted into the page etc... 
// Create a reset button