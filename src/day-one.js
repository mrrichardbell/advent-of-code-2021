"use strict";
exports.__esModule = true;
var fs = require("fs");
function findTheNumberOfTimesTheOceanDepthIncreases() {
    fs.readFile("input.txt", function (err, data) {
        var numberOfTimesDepthIncreases = 0;
        var oceanDepthReadings = data.toString().replace(/\r\n/g, '\n').split('\n');
        var lastOceanDepth = parseInt(oceanDepthReadings[0]);
        removeStartingOceanDepth(oceanDepthReadings);
        oceanDepthReadings.forEach(function (oceanDepth) {
            var currentOceanDepth = parseInt(oceanDepth);
            if (lastOceanDepth < currentOceanDepth) {
                numberOfTimesDepthIncreases++;
            }
            lastOceanDepth = currentOceanDepth;
        });
        console.log("Number of times size increases is ".concat(numberOfTimesDepthIncreases));
        process.exit(0);
    });
}
function removeStartingOceanDepth(oceanDepthReadings) {
    oceanDepthReadings.splice(0, 1);
}
findTheNumberOfTimesTheOceanDepthIncreases();
