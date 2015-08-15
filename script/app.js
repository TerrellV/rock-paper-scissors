(function(){
    var myapp = angular.module('myapp', []);

    myapp.controller('MainController', function(){

        //b represents comp choice - Random || Predicted
        var b = compChoice();
        var arr = [];

        // START SCREEN - BEGINNING VIEW
        this.head = "Choose One";
        this.statsBackIcon = 'stats';
        this.showOtherContent = false;
        this.showbuttons = true;
        this.showresults = false;
        this.showstats = false;
<<<<<<< HEAD
        this.rockIcon = "images/Rock-Icon.png";
        this.paperIcon = "images/Paper-Icon.png";
        this.scissorsIcon = "images/Scissors-Icon.png";
=======
        this.rockIcon = "../images/Rock-Icon.png";
        this.paperIcon = "../images/Paper-Icon.png";
        this.scissorsIcon = "../images/Scissors-Icon.png";
>>>>>>> Setting up gh-pages
        this.gitUrl = "https://github.com/MirPresT";
        this.twitterUrl = "https://twitter.com/TerrellVest7";
        this.facebookUrl = "https://www.facebook.com/terrell.vest7";
        this.personalSite = "http://terrellvest.com/";
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
            stats.wins += 1;
            stats.gamesPlayed += 1;
            return "You Won";
        }

        function logLoss () {
            stats.losses += 1;
            stats.gamesPlayed += 1;
            return "You Lost";
        }

        function logTie () {
            stats.gamesPlayed += 1;
            stats.ties +=1;
            return "It's a Tie";
        }

        // STAT VALUE STORAGE
        var stats = {
            wins: 0,
            losses: 0,
            ties: 0,
            gamesPlayed: 0
        };
        this.stats = stats;
         // allowing for reference in html

        // Store Given Value Based on Last 2 user options.
        // ex) if last 3 choices [R,P,S] then set hist.R.P = 'S'
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
            // computer tracking algorithm
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
        };

        //STATS SHOW on click of downarrow
        this.clickStats = function(){
            this.head = "User Stats";
            this.statsBackIcon = 'back';
            this.showstats = true;
            this.showOtherContent = false;
            this.showresults = false;
            this.showbuttons = false;
        }

        // other panel show on click of more
        this.clickMore = function(){
            this.head = "Other Content";
            this.statsBackIcon = 'back';
            this.showOtherContent = true;
            this.showstats = false;
            this.showresults = false;
            this.showbuttons = false;
        }

        // RESET to beginning View on click of back or red button
        this.Reset = function(user,comp){
            this.head = "Choose One";
            this.statsBackIcon = 'stats';
            this.showstatsIcon = true;
            this.showbuttons = true;
            this.showOtherContent = false;
            this.showbackIcon = false;
            this.showstats = false;
            this.showresults = false;
            // functions to remove classes from stats and results but add to option pannel
        }

    });
})();
