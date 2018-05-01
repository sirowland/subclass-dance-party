var BlinkyDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  this.count = 0;
};

BlinkyDancer.prototype = Object.create(Dancer.prototype);
BlinkyDancer.prototype.constructor = BlinkyDancer;

BlinkyDancer.prototype.step = function() {
  Dancer.prototype.step.call(this);
  this.$node.toggle();
  this.$node.toggleClass('stretchy',1000);
  this.count++;

  if (this.count % 5 === 0) {
    this.$node.toggleClass('stretchy2', 100);
  }
};