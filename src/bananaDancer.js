// var BananaDancer = function(top, left, timeBetweenSteps) {
//   Dancer.call(this, top, left, timeBetweenSteps);
//   this.$node = $('<span class="gify"><img src="banana.gif"></span>');
//   this.count = 0;
//   this.setPosition();
// };

// BananaDancer.prototype = Object.create(Dancer.prototype);
// BananaDancer.prototype.constructor = BananaDancer;

// BananaDancer.prototype.step = function() {
//   Dancer.prototype.step.call(this);
//   this.$node.toggleClass('stretchy',1000);

// };

var BananaDancer = class extends Dancer {
  
  constructor(top, left, timeBetweenSteps) {
    super(top, left, timeBetweenSteps);
    this.$node = $('<span class="gify"><img src="banana.gif"></span>');
    this.count = 0;
    this.setPosition();
  }

  step() {
    super.step.call(this);
    this.$node.toggleClass('stretchy',1000);
  }

}


