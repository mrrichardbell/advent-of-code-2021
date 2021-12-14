import * as fs from "fs";
import { numberOfTimesDepthIncreasesWhenUsingWindowOfLastThreeMeasurements } from "./depth-quantifier"

function doSonarSweep() {
    fs.readFile("input.txt", function(err, data) {
        let oceanDepthReadings = data.toString().replace(/\r\n/g,'\n').split('\n');
        
        measureNumberOfTimesDepthIncreasesFromLastMeasurement(oceanDepthReadings.slice());

        const numberOfTimesInWindowOfThree = numberOfTimesDepthIncreasesWhenUsingWindowOfLastThreeMeasurements(oceanDepthReadings.slice())
        console.log(`Number of times size increases in window of three is ${numberOfTimesInWindowOfThree}`);
        process.exit(0);
    });
}

function measureNumberOfTimesDepthIncreasesFromLastMeasurement(oceanDepthReadings: string[]) {
    let numberOfTimesDepthIncreases = 0;
    let lastOceanDepth = parseInt(oceanDepthReadings[0]);
    removeStartingOceanDepth(oceanDepthReadings);

    oceanDepthReadings.forEach((oceanDepth: string) => {
        let currentOceanDepth = parseInt(oceanDepth);
        if (lastOceanDepth < currentOceanDepth) {
            numberOfTimesDepthIncreases++;
        }
        lastOceanDepth = currentOceanDepth;
    });

    console.log(`Number of times size increases is ${numberOfTimesDepthIncreases}`);
}

function removeStartingOceanDepth(oceanDepthReadings: string[]) {
    oceanDepthReadings.splice(0, 1);
}

doSonarSweep();
