var BananaDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<span class="gify"><img src="banana.gif"></span>');
  this.count = 0;
  this.step();
  this.setPosition();
};

BananaDancer.prototype = Object.create(Dancer.prototype);
BananaDancer.prototype.constructor = BananaDancer;

BananaDancer.prototype.step = function() {
  Dancer.prototype.step.call(this);
  this.$node.toggleClass('stretchy',1000);
  this.count++;

};

