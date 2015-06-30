$(document).ready(function(){
    $("#backIcon").hide();
    console.log("Working");
    //seting variables for result images
    var rockIcon = "<img src='../images/Rock-Icon.png' class='icons'/>",
        paperIcon = "<img src='../images/Paper-Icon.png' class='icons'/>",
        scissorsIcon = "<img src='../images/Scissors-Icon.png' class='icons'/>";

    //set global variables to track user and computer choices
    var userImage = "....",
    compImage = "....";
    gameResults = "."
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

    function logStats(result) {
        if(result === "win") {
            UserStats.wins += 1;
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
            logStats("tie");
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

    // DISPLAY STATS STATS STATS STATS STATS
    $('#statsIcon').click(function() { // change element
        $(".buttons").hide();
        $(".statbox").addClass("animated bounce");
        displayStats();
        var elem = document.getElementById("appHeaderText");
        elem.innerHTML = "";
        elem.innerHTML = "<h2>User Statistics</h2>";
        $('#resetButton').removeClass("animated rotateIn")
        $("#backIcon").show();
        $("#statsIcon").hide();
    });
    // DISPLAY STATS STATS STATS STATS STATS STATS


    // run the functions above

    $("#cRock").click(function() {
        $(".buttons").hide();
        gameResults = runGame("rock", compChoice());
        displayResults();
    });

    $("#cPaper").click(function() {
        $(".buttons").hide();
        gameResults = runGame("paper", compChoice());
        displayResults();
    });

    $("#cScissors").click(function() {
        $(".buttons").hide();
        gameResults = runGame("scissors", compChoice());
        displayResults();
    });


    function displayResults (){
        var elem = document.getElementById("results"),
            inserthtml =
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
                        "<h3 id ='resultsText'>" + gameResults +
                        "</h3>" +
                    "</div>" +
                "</div>";
        elem.innerHTML = inserthtml;
    }

    function displayStats() {
        var elem = document.getElementById("results"),
            inserthtml =
            "<div class='container-fluid statsbox1'>" +
                "<div class='col-sm-4 col-sm-offset-1 animated fadeIn' id='wins'>" +
                    "<h3>Wins</h3>" +
                    "<div class='col-sm-10 col-sm-offset-1 graybox'>" +
                        "<h4>" + UserStats.wins + "</h4>" +
                    "</div>"+
                "</div>" +
                "<div class='col-sm-4 col-sm-offset-2 animated fadeIn' id='loses'>" +
                    "<h3>Loses</h3>" +
                    "<div class='col-sm-10 col-sm-offset-1 graybox'>" +
                        "<h4>" + UserStats.lossses + "</h4>" +
                    "</div>" +
                "</div>" +
            "</div>" +
            "<div class='container-fluid statsbox2'>" +
                "<div class='col-sm-4 col-sm-offset-1 animated fadeIn' id='ties'>" +
                    "<h3>Ties</h3>" +
                    "<div class='col-sm-10 col-sm-offset-1 graybox'>" +
                        "<h4>" + UserStats.ties + "</h4>" +
                    "</div>" +
                "</div>" +
                "<div class='col-sm-4 col-sm-offset-2 animated fadeIn' id='total'>" +
                    "<h3>Total</h3>" +
                    "<div class='col-sm-10 col-sm-offset-1 graybox'>" +
                        "<h4>" + UserStats.gamesPlayed +"</h4>" +
                    "</div>" +
                "</div>" +
            "</div>";
        elem.innerHTML = inserthtml;
    }

    $(".buttons").click(function() {
        $('#resultsText').hide();
        $("#resetButton").removeClass("animated rotateIn");
        $(".buttons").removeClass("animated fadeIn");
        $("#compImage").addClass("animated bounceInDown");
        $('#vs').addClass("animated zoomIn");

        if (gameResults === "You Won"){
            $('#resultsText').delay(2000).show(0).addClass("animated flash");
        } else {
            $('#resultsText').delay(2000).show(0).addClass("animated shake");
        }
    });

    // backbutton click event
    $("#backIcon").click(function() {
        var emptyresults = document.getElementById("results");
        emptyresults.innerHTML = "";
        $(".buttons").show();
        $(".buttons").addClass("animated fadeIn");
        $("#compImage").removeClass("animated bounceInDown");
        $("#vs").removeClass("animated zoomIn");
        ResetAppTextHeader();
        $("#backIcon").hide();
        $("#statsIcon").show();
    });

    $('#backIconPlaceholder').mousedown(function(){
        $("#backBox").addClass("icondown");
    });

    $('#backIconPlaceholder').mouseup(function(){
        $("#backBox").removeClass("icondown");
    });

    /* Reset Button Click Event*/
    $("#resetButton").click(function() {
        clearresults();
        $(".buttons").show();
        $(this).addClass("animated rotateIn");
        $(".buttons").addClass("animated fadeIn");
        $("#compImage").removeClass("animated bounceInDown");
        $("#vs").removeClass("animated zoomIn");
        ResetAppTextHeader();
        $("#backIcon").hide();
        $("#statsIcon").show();
    });

    function ResetAppTextHeader () {
        var elem = document.getElementById("appHeaderText");
        elem.innerHTML = "";
        elem.innerHTML = "<h2>Choose One</h2>";
    }

    function clearresults() {
        var emptyresults = document.getElementById("results");
        emptyresults.innerHTML = "";
    }

  //end program
})

// get rid of long ifstatement in function to set image values....
