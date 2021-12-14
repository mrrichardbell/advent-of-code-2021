"use strict";
exports.__esModule = true;
var fs = require("fs");
function driveSub() {
    var horizontalPosition = 0;
    var verticalPosition = 0;
    var aimTheDamnGun = 0;
    fs.readFile("day-two-input.txt", function (err, data) {
        var commandsFromTheCaptain = data.toString().replace(/\r\n/g, '\n').split('\n').slice();
        commandsFromTheCaptain.forEach(function (command) {
            var commandAsInstructions = command.split(" ", 2);
            switch (commandAsInstructions[0]) {
                case "forward": {
                    horizontalPosition += parseInt(commandAsInstructions[1]);
                    verticalPosition += aimTheDamnGun * parseInt(commandAsInstructions[1]);
                    break;
                }
                case "down": {
                    aimTheDamnGun += parseInt(commandAsInstructions[1]);
                    break;
                }
                case "up": {
                    aimTheDamnGun -= parseInt(commandAsInstructions[1]);
                    break;
                }
            }
            ;
        });
        console.log("Final position sum is ".concat(verticalPosition * horizontalPosition));
    });
}
driveSub();
