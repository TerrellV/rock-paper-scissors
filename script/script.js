$(document).ready(function(){
    alert("Working");
    
    //seting variables for result images
    var rockIcon = "<img src='../images/Rock-Icon.png' class='icons'/>";
    var paperIcon = "<img src='../images/Paper-Icon.png' class='icons'/>";
    var scissorsIcon = "<img src='../images/Scissors-Icon.png' class='icons'/>";
    
    //set global variables to track user and computer choices
    var userImage = "....";
    var compImage = "....";
    run = "Taday"
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
    
    
    
    
    
    // define and set new value for outcome 
    
    var runGame = function(user, comp) {
        if (user === comp) {
            compImage = "dont know yet";
            userImage = "lalala";
            return "tie";
        };
        if (user === "rock") {
            if (comp === "scissors") {
                compImage = scissorsIcon;
                userImage = rockIcon;
                return "You Won";
            } else {
                userImage = rockIcon;
                compImage = paperIcon;
                return "You Lost";
            }
        };
        if (user === "paper") {
            if (comp === "rock") {
                userImage = paperIcon;
                compImage =  rockIcon;
                return "You Won";
            } else {
                userImage = paperIcon;
                compImage = scissorsIcon;
                return "You Lost";
            }
        };
        if (user === "scissors") {
            if (comp === "paper") {
                userImage = scissorsIcon;
                compImage = paperIcon;
                return "You Won";
            } else {
                userImage = scissorsIcon;
                compImage = rockIcon;
                return "You Lost";}
        }
    };
    
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
        $("#resultsText").addClass("animated zoomInDown")
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