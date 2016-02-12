var code = require('../main');
var expect = require('chai').expect;

describe('Leap Year', function() {
  it("should return 'True' when passed a non-century year divisble by 4", function() {
    expect(code.leapYear(1996)).to.equal(true);
  });
  it("should return 'False' when passed a non-century year NOT divisble by 4", function() {
    expect(code.leapYear(1993)).to.equal(false);
  });
  it("should return 'True' when passed a century year divisble by 400", function() {
    expect(code.leapYear(2000)).to.equal(true);
  });
  it("should return 'False' when passed a century year NOT divisble by 400", function() {
    expect(code.leapYear(1700)).to.equal(false);
  });
});
