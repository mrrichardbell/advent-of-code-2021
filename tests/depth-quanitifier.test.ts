import { numberOfTimesDepthIncreasesWhenUsingWindowOfLastThreeMeasurements } from '../src/depth-quantifier';
import { expect } from 'chai';
import 'mocha';

describe('Verify the depth quantification for windows of three depths', () => {

  it('should be no increases when only one depth', () => {
    const result = numberOfTimesDepthIncreasesWhenUsingWindowOfLastThreeMeasurements(["5"]);

    expect(result).to.equal(0);
  });

  it('should be no increases when only two depths', () => {
    const result = numberOfTimesDepthIncreasesWhenUsingWindowOfLastThreeMeasurements(["5", "6"]);

    expect(result).to.equal(0);
  });

  it('should be no increases when only 1 window', () => {
    const result = numberOfTimesDepthIncreasesWhenUsingWindowOfLastThreeMeasurements(["5", "6", "7"]);

    expect(result).to.equal(0);
  });
  
  it('should be an increase of 1 when 2 windows and second window greater ', () => {
    const result = numberOfTimesDepthIncreasesWhenUsingWindowOfLastThreeMeasurements(["5", "6", "7", "8"]);

    expect(result).to.equal(1);
  });

  it('should not be an increase when 2 windows and second window lesser ', () => {
    const result = numberOfTimesDepthIncreasesWhenUsingWindowOfLastThreeMeasurements(["5", "6", "7", "3"]);

    expect(result).to.equal(0);
  });

});