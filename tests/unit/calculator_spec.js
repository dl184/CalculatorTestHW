var Calculator = require('../../public/js/calculator.js')
var assert = require('assert')

describe('calculator', function () {
  beforeEach(function () {
    calculator = new Calculator()
  });

  // write unit tests here in the form of "it should do something..."
  it('has a sample test', function(){
    assert.equal(true, true)
  })

  it('should be able to add', function(){
    calculator.numberClick(1);
    calculator.operatorClick('+');
    calculator.numberClick(1);
    calculator.operatorClick('=');
    assert.equal(2, calculator.runningTotal);
  })

  it('should be able to subtract', function(){
    calculator.numberClick(5);
    calculator.operatorClick('-');
    calculator.numberClick(1);
    calculator.operatorClick('=');
    assert.equal(4, calculator.runningTotal);
  })

  it('should be able to multiply', function(){
    calculator.numberClick(5);
    calculator.operatorClick('*');
    calculator.numberClick(5);
    calculator.operatorClick('=');
    assert.equal(25, calculator.runningTotal);
  })

  it('should be able to divide', function(){
    calculator.numberClick(8);
    calculator.operatorClick('/');
    calculator.numberClick(2);
    calculator.operatorClick('=');
    assert.equal(4, calculator.runningTotal);
  })

  it('should see number clicks', function(){
    calculator.numberClick(1);
    calculator.numberClick(1);
    calculator.numberClick(1);
    assert.equal(111, calculator.runningTotal);
  })

  it('should see operatorClicks', function(){
    calculator.numberClick(1)
    calculator.operatorClick('+');
    calculator.operatorClick('+');
    calculator.operatorClick('+');
    assert.equal(4, calculator.runningTotal)
  })

  it('should clear clicks', function(){
    calculator.numberClick(1);
    calculator.operatorClick('+');
    calculator.numberClick(1);
    calculator.clearClick();
    assert.equal(0, calculator.runningTotal)
  })
});
