var GifyDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<span class="gify"><img src="banana.gif"></span>');
  this.count = 0;
  this.step();
  this.setPosition();
};

GifyDancer.prototype = Object.create(Dancer.prototype);
GifyDancer.prototype.constructor = GifyDancer;

GifyDancer.prototype.step = function() {
  Dancer.prototype.step.call(this);
  this.$node.toggleClass('stretchy',1000);
  this.count++;

  if (this.count % 5 === 0) {
    this.$node.toggleClass('gify1', 100);
  }
};

