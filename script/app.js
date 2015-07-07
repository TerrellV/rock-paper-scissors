(function(){
    var myapp = angular.module('myapp', []);

    myapp.controller('SetheaderController', function(){

        //b represents comp choice - Random || Predicted
        var b = compChoice();
        var arr = [];

        // START SCREEN - BEGINNING VIEW
        this.header = "Choose One";
        this.showstatsIcon = true;
        this.showbuttons = true;
        this.showresults = false;
        this.showstats = false;
        this.showbackIcon = false;
        this.userChoice = "";
        this.compChoice = "";
        this.rockIcon = "../images/Rock-Icon.png";
        this.paperIcon = "../images/Paper-Icon.png";
        this.scissorsIcon = "../images/Scissors-Icon.png";

///////////////// Game Logic /////////////////////

        // set random value for computer
        function compChoice() {
            var computerChoice = Math.random();
            if (computerChoice < 0.34) {
                return "R";
            } else if (computerChoice <= 0.67) {
                return "P";
            } else {
                return "S";
            }
        };

        // Decide Winner and Log Stats
        var runGame = function(user,comp) {
            if (user === comp) {
                return logTie();;
            };
            if (user === "R") {
                if (comp === "S") {
                    return logWin();;
                } else {
                    return logLoss();
                }
            };
            if (user === "P") {
                if (comp === "R") {
                    return logWin();;
                } else {
                    return logLoss();
                }
            };
            if (user === "S") {
                if (comp === "P") {
                    return logWin();;
                } else {
                    return logLoss();
                }
            }
        };

        // define logging functions
        function logWin () {
            UserStats.wins += 1;
            UserStats.gamesPlayed += 1;
            return "You Won";
        }

        function logLoss () {
            UserStats.lossses += 1;
            UserStats.gamesPlayed += 1;
            return "You Lost";
        }

        function logTie () {
            UserStats.gamesPlayed += 1;
            UserStats.ties +=1;
            return "It's a Tie";
        }

        // STAT VALUE STORAGE
        var UserStats = {
            wins: 0,
            lossses: 0,
            ties: 0,
            gamesPlayed: 0
        };
        this.stats = UserStats; // allowing for reference in html

        // Store Given Value Based on Last 2 options.
        // ex) last 3 choices [R,P,S] set hist.R.P = 'S'
        var hist = {
            R:{
               R:null,
               P:null,
               S:null
            },
            P:{
               R:null,
               P:null,
               S:null
            },
            S:{
               R:null,
               P:null,
               S:null
            }
        }

        // return winning options based on predicted choice
        function botrun () {
            var next = hist[ arr[1] ][ arr[2] ];
            if (next === 'R') { return "P";}
            if (next === 'P') { return "S";}
            if (next === 'S') { return "R";}
        };

///////////// Funcitons Dictate major page changes //////////////////////

        // DISPLAY Results when user choice is made
        this.onOptionPick = function(user) {
            this.userChoice = user;
            this.compChoice = b;
            this.showresults = true;
            this.showbuttons = false;
            this.gameResults = runGame(user,b);
            arr.push(user.slice(0,1).toUpperCase());
            if (arr.length > 2) {
                hist[arr[0]][arr[1]] = arr[2];
            };
            if (arr.length > 3) {
                arr.shift();
                if (botrun() !== undefined) {
                    b = botrun();
                }
            };
            // function to add classes for animations
        };

        //STATS SHOW on click of downarrow
        this.onStatsIconClick = function(){
            this.header = "User Statistics";
            this.showbackIcon = true;
            this.showstats = true;
            this.showresults = false;
            this.showbuttons = false;
            this.showstatsIcon = false;
            // function to add classes to stats and remove from options
        }

        // RESET to beginning View on click of back or redCircle
        this.Reset = function(user,comp){
            this.header = "Choose One";
            this.showstatsIcon = true;
            this.showbuttons = true;
            this.showbackIcon = false;
            this.showresults = false;
            this.showstats = false;
            // functions to remove classes from stats and results but add to option pannel
        }

    });
})();
