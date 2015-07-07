$(document).ready(function(){
    $("#backIcon").hide();
    console.log("Working");
    //seting variables for result images


    // DISPLAY STATS STATS STATS STATS STATS
    $('#statsIcon').click(function() { // change element
        $(".buttons").hide();
        $(".statbox").addClass("animated bounce");
        displayStats();
        $('#resetButton').removeClass("animated rotateIn")
        $("#backIcon").show();
        $("#statsIcon").hide();
    });
    // DISPLAY STATS STATS STATS STATS STATS STATS


    // run the functions above

    // $("#cRock").click(function() {
    //     $(".buttons").hide();
    //     gameResults = runGame("rock", compChoice());
    //     displayResults();
    // });
    //
    // $("#cPaper").click(function() {
    //     $(".buttons").hide();
    //     gameResults = runGame("paper", compChoice());
    //     displayResults();
    // });
    //
    // $("#cScissors").click(function() {
    //     $(".buttons").hide();
    //     gameResults = runGame("scissors", compChoice());
    //     displayResults();
    // });

    // $(".buttons").click(function() {
    //     $('#resultsText').hide();
    //     $("#resetButton").removeClass("animated rotateIn");
    //     $(".buttons").removeClass("animated fadeIn");
    //     $("#compImage").addClass("animated bounceInDown");
    //     $('#vs').addClass("animated zoomIn");
    //
    //     if (gameResults === "You Won"){
    //         $('#resultsText').delay(2000).show(0).addClass("animated flash");
    //     } else {
    //         $('#resultsText').delay(2000).show(0).addClass("animated shake");
    //     }
    // });

    // backbutton click event
    $("#backIcon").click(function() {
        var emptyresults = document.getElementById("results");
        emptyresults.innerHTML = "";
        $(".buttons").show();
        $(".buttons").addClass("animated fadeIn");
        $("#compImage").removeClass("animated bounceInDown");
        $("#vs").removeClass("animated zoomIn");
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
        $("#backIcon").hide();
        $("#statsIcon").show();
    });

    function clearresults() {
        var emptyresults = document.getElementById("results");
        emptyresults.innerHTML = "";
    }

  //end program
})

// get rid of long ifstatement in function to set image values....
