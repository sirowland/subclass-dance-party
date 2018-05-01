var AvocadoDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<span class="rolly"><img src="avocado.png"></span>');
  this.count = 0;
  this.step();
  this.setPosition();
};

AvocadoDancer.prototype = Object.create(Dancer.prototype);
AvocadoDancer.prototype.constructor = AvocadoDancer;

AvocadoDancer.prototype.step = function() {
  Dancer.prototype.step.call(this);
  this.count++;

  if (this.count % 5 === 0) {
    this.$node.addClass('roll');
  } else if (this.count % 9 === 0) {
    this.$node.removeClass('roll');
  }
};