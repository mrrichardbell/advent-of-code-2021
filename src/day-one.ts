import * as fs from "fs";

let numberOfTimesDepthIncreases = 0;
let lastOceanDepth = NaN

function findTheNumberOfTimesTheOceanDepthIncreases() {
    let fileInput = fs.readFile("input.txt", function(err, data) {
        const oceanDepthReadings = data.toString().replace(/\r\n/g,'\n').split('\n');
        
        oceanDepthReadings.forEach((oceanDepth: string) => {
            let currentOceanDepth = parseInt(oceanDepth);
            if (Number.isNaN(lastOceanDepth)) {
                lastOceanDepth = parseInt(oceanDepth);
            } else {
                if(lastOceanDepth < currentOceanDepth) {
                    numberOfTimesDepthIncreases++;
                }
                lastOceanDepth = currentOceanDepth;
            }
        });
        console.log(`Number of times size increases is ${numberOfTimesDepthIncreases}`);
        process.exit(0);
    });
}

findTheNumberOfTimesTheOceanDepthIncreases();
