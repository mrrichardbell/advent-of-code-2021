import * as fs from "fs";

let numberOfTimesDepthIncreases = 0;
let lastOceanDepth = NaN

function findTheNumberOfTimesTheOceanDepthIncreases() {
    let fileInput = fs.readFile("input.txt", function(err, data) {
        const arr = data.toString().replace(/\r\n/g,'\n').split('\n');
        
        arr.forEach((oceanDepth: string) => {
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
        console.log(`\nNumber of times size increases is ${numberOfTimesDepthIncreases}`);
        process.exit(0);
    });
}

findTheNumberOfTimesTheOceanDepthIncreases();
