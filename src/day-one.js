"use strict";
exports.__esModule = true;
var fs = require("fs");
var numberOfTimesDepthIncreases = 0;
var lastOceanDepth = NaN;
function findTheNumberOfTimesTheOceanDepthIncreases() {
    var fileInput = fs.readFile("input.txt", function (err, data) {
        var arr = data.toString().replace(/\r\n/g, '\n').split('\n');
        arr.forEach(function (oceanDepth) {
            var currentOceanDepth = parseInt(oceanDepth);
            if (Number.isNaN(lastOceanDepth)) {
                lastOceanDepth = parseInt(oceanDepth);
            }
            else {
                if (lastOceanDepth < currentOceanDepth) {
                    numberOfTimesDepthIncreases++;
                }
                lastOceanDepth = currentOceanDepth;
            }
        });
        console.log("\nNumber of times size increases is ".concat(numberOfTimesDepthIncreases));
        process.exit(0);
    });
}
findTheNumberOfTimesTheOceanDepthIncreases();
