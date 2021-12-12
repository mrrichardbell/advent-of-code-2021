export const numberOfTimesDepthIncreasesWhenUsingWindowOfLastThreeMeasurements = function numberOfTimesDepthIncreasesWhenUsingWindowOfLastThreeMeasurements(depths: string[]): number {
    let numberOfTimesDepthWindowIncreases = 0;
    if (depths.length < 4) {
        return 0;
    }

    for(let i = 2; i < depths.length - 1; i++) {
        const windowOne = depths.slice(i - 2, i + 1);
        const windowTwo = depths.slice(i - 1, i + 2);
        const sumOfWindowOneDepths = getSumOfWindowDepths(windowOne);
        const sumOfWindowTwoDepths = getSumOfWindowDepths(windowTwo);
        if (sumOfWindowTwoDepths > sumOfWindowOneDepths) {
            numberOfTimesDepthWindowIncreases++;
        }
    }

    return numberOfTimesDepthWindowIncreases;
}

function getSumOfWindowDepths(depths: string[]): number {
    return depths.map((depth) => parseInt(depth)).reduce((sumOfDepths, depth) => sumOfDepths + depth);
}