//take the json object and put it into an array
var peopleArray = [];

$(document).ready(function() {
    $.ajax({
        url: "/data",
        success: function (data) {
            console.log(data);
            $.each(data, function (index, person) {
                peopleArray.push(person.name);

            });
        }
    });

//generate buttons dynamically
//target the dom element and append the buttons as the last child element
    for (var i = 2; i <= 11; i++) {
        var $button = $('<button class = "numberButton"  data-index =' + i + '>' + "Button " + i + '</button>');
        $(".numbers").last().append($button);
    }


    //appendTeamMemberToDOM(teamMember, teamAssignment){
    //$("team" + teamAssignment).append(); YOU NEED TO FILL OUT THE APPEND

    //generate the same number of div containers as there will be teams; for example 3 divs for 3 teams
    $(".numbers").on('click', ".numberButton", function () {
        var index = $(this).data('index');

        //call the shuffle function to shuffle the names in the array
        var shuffledArray = shuffle(peopleArray);

        function writeTeamToDOM(person, assignedTeam, index){
            $(".peopleholder").append("<div" + assignedTeam + "</div>");
            $(".peopleholder").children().last().append("<p>" + person + "</p>");

        }

        function assignPeopleToTeam(shuffledArray){
            var teamToWrite = 0;
            for(var i = 0; i < shuffledArray.length; i++){
                writeTeamToDOM(shuffledArray[i], teamToWrite, i);
                teamToWrite++;
                if(teamToWrite >= selectedTeamSize){
                    teamToWrite = 0;
                }
            }
        }
    });





    function shuffle(array) {
        var currentIndex = array.length, temporaryValue, randomIndex;

        // While there remain elements to shuffle...
        while (0 !== currentIndex) {

            // Pick a remaining element...
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;

            // And swap it with the current element.
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }

        return array;
    }
});
