import * as fs from "fs";

function findTheNumberOfTimesTheOceanDepthIncreases() {
    fs.readFile("input.txt", function(err, data) {
        let numberOfTimesDepthIncreases = 0;
        let oceanDepthReadings = data.toString().replace(/\r\n/g,'\n').split('\n');
        let lastOceanDepth = parseInt(oceanDepthReadings[0]);
        removeStartingOceanDepth(oceanDepthReadings);
        
        oceanDepthReadings.forEach((oceanDepth: string) => {
            let currentOceanDepth = parseInt(oceanDepth);
            if(lastOceanDepth < currentOceanDepth) {
                numberOfTimesDepthIncreases++;
            }
            lastOceanDepth = currentOceanDepth;
        });

        console.log(`Number of times size increases is ${numberOfTimesDepthIncreases}`);
        process.exit(0);
    });
}

function removeStartingOceanDepth(oceanDepthReadings: string[]) {
    oceanDepthReadings.splice(0, 1);
}

findTheNumberOfTimesTheOceanDepthIncreases();


