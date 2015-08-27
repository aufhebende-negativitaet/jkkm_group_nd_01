var $content = $('content');
var $div =$('div');
var companyNames = ["Acme inc.", "Widget Corp",	"123 Warehousing", "Demo Company", "Smith and Co.", "Foo Bars", "ABC Telecom", "Fake Brothers", "QWERTY Logistics", "Demo inc.", "Sample Company", "Sample Inc", "Acme Corp", "Allied Biscuit", "Ankh-Sto Associates", "Extensive Enterprise", "Galaxy Corp", "Globo-Chem", "Mr. Sparkle", "LexCorp"]

function getRandomValue(min, max){
    return Math.round((Math.random() * max) + min);
}

function assignCompanyName(){
    $('#companyName').text(companyNames[getRandomValue(0, companyNames.length-1)]);
}

function assignPts(){
    var frontEndPts = getRandomValue(10, 60);
    var clientSidePts = getRandomValue(10, 60);
    var serverSidePts = getRandomValue(10, 60);

    $('#frontEnd').text('Front End Points: ' + frontEndPts);
        $('#clientSide').text('Client Side Points: ' + clientSidePts);
        $('#serverSide').text('Server Side Points: ' + serverSidePts);
}


$(document).ready(function(){
    $('#generate').on('click', function(){
        console.log("Hello");
        assignCompanyName();
        assignPts();
    });
});

//$.get( "http://127.0.0.1:3000/employees", function( data ) {console.log(data)});
