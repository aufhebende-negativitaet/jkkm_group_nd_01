var companyNames = ["Acme inc.", "Widget Corp",	"123 Warehousing", "Demo Company", "Smith and Co.", "Foo Bars", "ABC Telecom", "Fake Brothers", "QWERTY Logistics", "Demo inc.", "Sample Company", "Sample Inc", "Acme Corp", "Allied Biscuit", "Ankh-Sto Associates", "Extensive Enterprise", "Galaxy Corp", "Globo-Chem", "Mr. Sparkle", "LexCorp"]
var feEmployees=[];
var csEmployees=[];
var ssEmployees=[];
var currentPtsFE = 0;
var currentPtsCS = 0;
var currentPtsSS = 0;
var ptsNeededFE = 0;
var ptsNeededCS = 0;
var ptsNeededSS = 0;

function getRandomValue(min, max){
    return Math.round((Math.random() * max) + min);
};
function assignCompanyName(){
    $('#companyName').text(companyNames[getRandomValue(0, companyNames.length-1)]);
};
function assignPts(){
    ptsNeededFE = getRandomValue(10, 60);
    ptsNeededCS = getRandomValue(10, 60);
    ptsNeededSS = getRandomValue(10, 60);

    $('#frontEnd').text('Front End Points: ' + ptsNeededFE),
        $('#clientSide').text('Client Side Points: ' + ptsNeededCS),
        $('#serverSide').text('Server Side Points: ' + ptsNeededSS)
};
$(document).ready(function(){
    $('#generate').on('click', function(){
        // var feEmployees=[];
        // var csEmployees=[];
        // var ssEmployees=[];
        $('.content').children().children().empty();
        assignCompanyName();
        assignPts();
        $('#staff').removeClass('hidden');
    });

    $('#staff').on('click', function(){
        console.log("Click event for employees fired");
        getEmployee();
    });

    $('#extra').on('click', function(){
        $.get( "https://ancient-plateau-8570.herokuapp.com/employees", function( data ) {

            $('#extraName').text(data.name);
            $('#extraSkill').text(data.skillset);
            $('#extraPoints').text(data.points);
            var $reSprint = $('#reSprint');
            $reSprint.text("This project will STILL be completed in ONE sprint!");

        });
    });
});
function getEmployee(){
    $.get( "https://ancient-plateau-8570.herokuapp.com/employees", function(data){
        //console.log("Get ee before whichBucket:", data);
        if(currentPtsFE<ptsNeededFE || currentPtsCS<ptsNeededCS || currentPtsSS<ptsNeededSS){
            console.log("Buckets still not full");
            whichBucket(data);
        }else{
            console.log("Buckets are full!")
            var $sprint = $('#sprint');
            $('#extra').removeClass('hidden');
            $sprint.text("This project will be completed in ONE sprint!");
        }

    })
};
function totalPoints(array){
    var somePoints = 0;
    var i = 0;
    for (i=0; i < array.length; i++){
        somePoints += array[i].points;
    }
    return somePoints;
}
function whichBucket(data){
    //console.log("in which bucket", data);
    switch (data.skillset){
        case "Front End":
            if (currentPtsFE<ptsNeededFE) {
                feEmployees.push(data);
                currentPtsFE+=totalPoints(feEmployees);
                printEE();
                break; }
            else {
                getEmployee();
            }
            break;
        case "Client Side":
            if (currentPtsCS<ptsNeededCS) {
                csEmployees.push(data);
                currentPtsCS+=totalPoints(csEmployees);
                printEE();
                break;}
            else {
                getEmployee();
            }
            break;
        case "Server Side":
            if (currentPtsSS<ptsNeededSS) {
                ssEmployees.push(data);
                currentPtsSS+=totalPoints(ssEmployees);
                printEE();
                break;
            } else {
                getEmployee();
            }
            break;
        //  default:
        //  	console.log("IN DEFAULT");
        //  	 //when the whole team is assigned
        //    //stop the function and display the extra person button
        // $h1.text("This project will be completed in ONE sprint!");
        // $('#randomEmployee').append($h1);
        //    break;
    }

}

function printEE(){
    var $div = $('<div>');
    $div.attr('class', data.skillset);
    $div.text(data.name+": " +data.skillset+", "+data.points+" scrum points");
    $('#randomEmployee').append($div);
}