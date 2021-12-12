"use strict";
exports.__esModule = true;
var fs = require("fs");
var depth_quantifier_1 = require("./depth-quantifier");
function doSonarSweep() {
    fs.readFile("input.txt", function (err, data) {
        var oceanDepthReadings = data.toString().replace(/\r\n/g, '\n').split('\n');
        measureNumberOfTimesDepthIncreasesFromLastMeasurement(oceanDepthReadings.slice());
        var numberOfTimesInWindowOfThree = (0, depth_quantifier_1.numberOfTimesDepthIncreasesWhenUsingWindowOfLastThreeMeasurements)(oceanDepthReadings.slice());
        console.log("Number of times size increases in window of three is ".concat(numberOfTimesInWindowOfThree));
        process.exit(0);
    });
}
function measureNumberOfTimesDepthIncreasesFromLastMeasurement(oceanDepthReadings) {
    var numberOfTimesDepthIncreases = 0;
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
}
function removeStartingOceanDepth(oceanDepthReadings) {
    oceanDepthReadings.splice(0, 1);
}
doSonarSweep();
