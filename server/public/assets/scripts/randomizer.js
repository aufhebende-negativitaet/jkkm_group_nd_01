/**
 * Created by JKKM on 8/26/15.
 */

var randomizer = {

    //create random employee
    randomName: function(){

        var lastNames = ["Wiley", "Hood", "Crane", "Joseph", "Ruiz", "Mayer", "Howe", "Flowers", "Hardin", "Deleon", "Welch", "Love", "Knox", "Larsen", "Lowe", "Dunn", "Novak", "Holland", "Farrell", "Vaughan", "Willis", "Villarreal", "Russo", "Haas", "Mccarty", "Watson", "Hanna", "Combs", "Lara", "Keller", "Freeman", "Osborn", "Mooney", "Good", "Glenn", "Charles", "Barrera", "Murray", "Fowler", "Church", "Arnold", "Snyder", "Taylor", "Mosley", "Mcclure", "Hawkins", "Graves", "Ingram", "Callahan", "Simmons", "Munoz", "Green", "Dixon", "Paul", "Clark", "Mcintosh", "Weiss", "Howell", "Bryan", "Craig", "Cherry", "Trevino", "Lamb", "Hancock", "Logan", "Lynch", "Barrett", "Mason", "Parsons", "Harmon", "Colon", "Garner", "Ortiz", "Kaiser", "Douglas", "Carroll", "Benjamin", "Morton", "Garza", "Esparza", "Simon", "Carr", "Benitez", "Jarvis", "Sandoval", "Barnett", "Lopez", "Cooper", "Hebert", "Wilkinson", "Bailey", "Maddox", "Chase", "Moreno", "Burch", "Price", "Mccann", "Juarez", "Braun", "Sherman"];
        var firstNames = ["Lena", "Marianna", "Maxim", "Kailyn", "Corinne", "Lila", "Kamila", "Jovany", "Giselle", "Kash", "Israel", "Kristian", "Mathias", "Davin", "Lorelei", "Luis", "Beckham", "Raina", "Lorena", "Rosemary", "Chad", "Damion", "Isabel", "Owen", "Johnny", "Lennon", "Jovan", "Laney", "Reilly", "Charlie", "Jovanny", "Mercedes", "Bailee", "Martin", "Kylee", "Amare", "Kyson", "Bernard", "Raiden", "Kamron", "Xiomara", "Julie", "Guadalupe", "Sylvia", "Frances", "Kyan", "Justin", "Sierra", "Aryanna", "Sergio", "Luciano", "Isabelle", "Allyson", "Eli", "Keely", "Savanna", "Aryana", "Houston", "Julian", "Aylin", "Cade", "Nicole", "Simeon", "Juliana", "Mira", "Cole", "Myah", "Margaret", "Terrence", "Dominik", "Leo", "Kira", "Daniel", "Stacy", "Marisol", "Demetrius", "Charlize", "Mohamed", "Mylie", "Kamren", "Elle", "Rodney", "Abigayle", "Cheyanne", "Blaine", "Jermaine", "Eve", "Jorden", "Kadence", "Saul", "Essence", "Devyn", "Chance", "Deegan", "Lana", "Jerimiah", "Milo", "Ulises", "Steven", "Madisyn"];

        var a = Math.floor((Math.random() * lastNames.length) + 0);
        var b = Math.floor((Math.random() * firstNames.length) + 0);

        var name = firstNames[b] + " " + lastNames[a];
        return name;
    },

    //create random skillset, front end, server side, and clientside
    randomSkill: function(){

        var skillSet = ["Front End", "Server Side", "Client Side"];
        var skill = Math.floor((Math.random() * 3) + 0);

        return skillSet[skill];
    },

    //create random Scrum points 1-9
    randomScrum: function(){

        return Math.floor((Math.random() * 9) + 1);
    }
};

module.exports = randomizer;