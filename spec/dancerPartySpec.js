

describe('avocadoDancer', function() {

  var avocadoDancer, clock;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    avocadoDancer = new AvocadoDancer(10, 20, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function() {
    expect(avocadoDancer.$node).to.be.an.instanceof(jQuery);
  });

  it('should have a count', function() {
    expect(avocadoDancer.count).to.be.equal(0);
  });

  it('should change class to rotate', function() {
    sinon.spy(avocadoDancer.$node, 'addClass');
    avocadoDancer.step();
    clock.tick(timeBetweenSteps);
    clock.tick(timeBetweenSteps);
    clock.tick(timeBetweenSteps);
    clock.tick(timeBetweenSteps);
    clock.tick(timeBetweenSteps);
    expect(avocadoDancer.$node.addClass.called).to.be.true;
  });

  describe('dance', function() {
    it('should call step at least once per second', function() {
      sinon.spy(avocadoDancer, 'step');
      expect(avocadoDancer.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps);

      expect(avocadoDancer.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(avocadoDancer.step.callCount).to.be.equal(2);
    });
  });

});


describe('bananaDancer', function() {

  var bananaDancer, clock;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    bananaDancer = new BananaDancer(10, 20, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function() {
    expect(bananaDancer.$node).to.be.an.instanceof(jQuery);
  });

  it('should have a class "gify"', function() {
    expect(bananaDancer.$node.attr('class')).to.be.equal('gify');
  });

  describe('dance', function() {
    it('should call step at least once per second', function() {
      sinon.spy(bananaDancer, 'step');
      expect(bananaDancer.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps);

      expect(bananaDancer.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(bananaDancer.step.callCount).to.be.equal(2);
    });
  });
});

describe('pineappleDancer', function() {

  var pineappleDancer, clock;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    pineappleDancer = new PineappleDancer(10, 20, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function() {
    expect(pineappleDancer.$node).to.be.an.instanceof(jQuery);
  });

  it('should have a class "bouncy"', function() {
    expect(pineappleDancer.$node.attr('class')).to.be.equal('bouncy');
  });

  it('should have a count', function() {
    expect(pineappleDancer.count).to.be.equal(0);
  });

  describe('dance', function() {
    it('should call step at least once per second', function() {
      sinon.spy(pineappleDancer, 'step');
      expect(pineappleDancer.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps);

      expect(pineappleDancer.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(pineappleDancer.step.callCount).to.be.equal(2);
    });
  });
});
