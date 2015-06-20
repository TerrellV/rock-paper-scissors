$(document).ready(function(){
    alert("Working");
    
    //seting variables for result images
    var rockIcon = "<img src='../images/Rock-Icon.png' class='icons'/>";
    var paperIcon = "<img src='../images/Paper-Icon.png' class='icons'/>";
    var scissorsIcon = "<img src='../images/Scissors-Icon.png' class='icons'/>";
    
    //set global variables to track user and computer choices
    var userImage = "....";
    var compImage = "....";
    run = "."
    // defining computers response
    
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
    
    
    /*setting function and user object to log stats*/
    
    var logStats = function(result) {
        if(result === "win") {
            UserStats.wins += 1;
            console.log(UserStats.wins);
             UserStats.gamesPlayed += 1;
        } else if (result === "lose") {
            UserStats.lossses += 1;
             UserStats.gamesPlayed += 1;
        } else {
            UserStats.gamesPlayed += 1;
            UserStats.ties +=1;
        }
    };
    
    var UserStats = {
        wins: 0,
        lossses: 0,
        ties: 0,
        gamesPlayed: 0
    };
    
    /*seting images on tie function*/
    var tieImageSet = function(user, comp) {
        if(user === "rock") {
        userImage = rockIcon;
    } else if(user === "paper") {
        userImage = paperIcon;
    } else {
        userImage = scissorsIcon;
    }
    
    if(comp === "rock") {
        compImage = rockIcon;
    } else if(comp === "paper") {
        compImage = paperIcon;
    } else {
        compImage = scissorsIcon;
    }};
    
    
    // define and set new value for outcome 
    
    var runGame = function(user, comp) {
        if (user === comp) {
            tieImageSet(user, comp);
            logStats("tie"); // havent added a tracker for ties yet
            return "Tie Game";
        };
        if (user === "rock") {
            if (comp === "scissors") {
                compImage = scissorsIcon;
                userImage = rockIcon;
                logStats("win");
                return "You Won";
            } else {
                userImage = rockIcon;
                compImage = paperIcon;
                logStats("lose");
                return "You Lost";
            }
        };
        if (user === "paper") {
            if (comp === "rock") {
                userImage = paperIcon;
                compImage =  rockIcon;
                logStats("win");
                return "You Won";
            } else {
                userImage = paperIcon;
                compImage = scissorsIcon;
                logStats("lose");
                return "You Lost";
            }
        };
        if (user === "scissors") {
            if (comp === "paper") {
                userImage = scissorsIcon;
                compImage = paperIcon;
                logStats("win");
                return "You Won";
            } else {
                userImage = scissorsIcon;
                compImage = rockIcon;
                logStats("lost");
                return "You Lost";}
        }
    };
    
    
    // TEST TEST TEST TEST DELETE AFTER TEST
    
    $('#mainText').click(function() {
        alert("Wins: " + UserStats.wins  + " Loses: " + UserStats.lossses + " Ties: " +UserStats.ties + " Games Played: " + UserStats.gamesPlayed );
    })
    
    $("#mainText").mousedown(function() {
        $(this).addClass("headerClickDown");
    })
    $("#mainText").mouseup(function() {
        $(this).removeClass("headerClickDown");
    })
    // TEST TEST TEST TEST DELETE AFTER TEST
    
    
    // run the functions above
    
    $("#cRock").click(function() {
        $(".buttons").hide();
        run = runGame("rock", compChoice());
        displayResults();
    });
    
    $("#cPaper").click(function() {
        $(".buttons").hide();
        run = runGame("paper", compChoice());
        displayResults();
    });
    
    $("#cScissors").click(function() {
        $(".buttons").hide();
        run = runGame("scissors", compChoice());
        displayResults();
    });
    
    
    var displayResults = function(user, comp){
        var elem = document.getElementById("results");
        var inserthtml = 
                "<div id ='b1_2'>" +
                    "<div id='b1_3'>" +
                        "<h2 class ='resultHeader col-lg-6 col-md-6 col-sm-6 col-sm-6' id='userdis'>USER</h2>" +
                        "<h2 class ='resultHeader col-lg-6 col-md-6 col-sm-6 col-sm-6' id='compdis'>COMP</h2>" +
                    "</div>" +
                "</div>" +

                "<div id ='displayImages'>" +
                    "<div class='displayitem'>" + userImage +
                    "</div>" +
                    "<div class='displayitem'>" +
                        "<span id='vs'>VS</span>" +
                    "</div>" +
                    "<div class='displayitem' id='compImage'>" + compImage +
                    "</div>" +
                    "<div>" +
                        "<h3 id ='resultsText'>" + run + //use function runGame to determine winner
                        "</h3>" +
                    "</div>" +
                "</div>";
        elem.innerHTML = inserthtml;
    }
    
    
    $(".buttons").click(function() {
        $("#resetButton").removeClass("animated rotateIn");
        $(".buttons").removeClass("animated fadeIn");
        $("#compImage").addClass("animated bounceInDown");
        $('#vs').addClass("animated zoomIn");
        $("#resultsText").addClass("animated fadeIn")
    })
    
    /* Reset Button Click Event*/
    
    $("#resetButton").click(function() {
        var empty = document.getElementById("results");
        empty.innerHTML = "";
        $(".buttons").show();
        $(this).addClass("animated rotateIn");
        $(".buttons").addClass("animated fadeIn");
        $("#compImage").removeClass("animated bounceInDown");
        $("#vs").removeClass("animated zoomIn");
    });
    
  //end program  
})

// get rid of long ifstatement in function to set image values....