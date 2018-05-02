// var PineappleDancer = function(top, left, timeBetweenSteps) {
//   Dancer.call(this, top, left, timeBetweenSteps);
//   this.$node = $('<span class="bouncy"><img src="pineapple.png"></span>');
//   this.count = 0;
//   this.setPosition();
// };

// PineappleDancer.prototype = Object.create(Dancer.prototype);
// PineappleDancer.prototype.constructor = PineappleDancer;

// PineappleDancer.prototype.step = function() {
//   Dancer.prototype.step.call(this);
//   this.$node.toggleClass('stretchy',1000);
//   this.count++;

//   if (this.count % 5 === 0) {
//     this.$node.toggleClass('gify1', 100);
//   }
// };


var PineappleDancer = class extends Dancer {

  constructor(top, left, timeBetweenSteps) {
    super(top, left, timeBetweenSteps);
    this.$node = $('<span class="bouncy"><img src="pineapple.png"></span>');
    this.count = 0;
    this.setPosition();
  }

  step() {
    super.step.call(this);
    this.$node.toggleClass('stretchy',1000);
    this.count++;

    if (this.count % 5 === 0) {
      this.$node.toggleClass('gify1', 100);
    }

  }

} 




