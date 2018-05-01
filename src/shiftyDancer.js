var ShiftyDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  this.count = 0;
};

ShiftyDancer.prototype = Object.create(Dancer.prototype);
ShiftyDancer.prototype.constructor = ShiftyDancer;

ShiftyDancer.prototype.step = function() {
  Dancer.prototype.step.call(this);
  this.$node.toggleClass('stretchy',1000);
  this.count++;

  if (this.count % 5 === 0) {
    this.$node.toggleClass('stretchy2', 100);
  }
};