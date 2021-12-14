import * as fs from "fs";

function driveSub() {
    let horizontalPosition = 0;
    let verticalPosition = 0;
    let aimTheDamnGun = 0;

    fs.readFile("day-two-input.txt", function(err, data) {
        let commandsFromTheCaptain = data.toString().replace(/\r\n/g,'\n').split('\n').slice();

        commandsFromTheCaptain.forEach((command) => {
            const commandAsInstructions = command.split(" ", 2);
            switch(commandAsInstructions[0]) {
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
            };
            
        });

        console.log(`Final position sum is ${verticalPosition * horizontalPosition}`);
    });
    

}

driveSub()