/**
 * Created by JKKM on 8/26/15.
 */

var randomizer = require('./randomizer');

var newEmployee = {
    createEmployee: function(){

        var employee = {
            name: randomizer.randomName(),
            skillset: randomizer.randomSkill(),
            points: randomizer.randomScrum()

        };

        var employeeToSend = employee.name + " " + employee.skillset + " " + employee.points;
        return employeeToSend;
    }

};
module.exports = newEmployee;