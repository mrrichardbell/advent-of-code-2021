"use strict";
exports.__esModule = true;
exports.numberOfTimesDepthIncreasesWhenUsingWindowOfLastThreeMeasurements = void 0;
var numberOfTimesDepthIncreasesWhenUsingWindowOfLastThreeMeasurements = function numberOfTimesDepthIncreasesWhenUsingWindowOfLastThreeMeasurements(depths) {
    var numberOfTimesDepthWindowIncreases = 0;
    if (depths.length < 4) {
        return 0;
    }
    for (var i = 2; i < depths.length - 1; i++) {
        var windowOne = depths.slice(i - 2, i + 1);
        var windowTwo = depths.slice(i - 1, i + 2);
        var sumOfWindowOneDepths = getSumOfWindowDepths(windowOne);
        var sumOfWindowTwoDepths = getSumOfWindowDepths(windowTwo);
        if (sumOfWindowTwoDepths > sumOfWindowOneDepths) {
            numberOfTimesDepthWindowIncreases++;
        }
    }
    return numberOfTimesDepthWindowIncreases;
};
exports.numberOfTimesDepthIncreasesWhenUsingWindowOfLastThreeMeasurements = numberOfTimesDepthIncreasesWhenUsingWindowOfLastThreeMeasurements;
function getSumOfWindowDepths(depths) {
    return depths.map(function (depth) { return parseInt(depth); }).reduce(function (sumOfDepths, depth) { return sumOfDepths + depth; });
}
