// var Dancer = function(top, left, timeBetweenSteps) {
//   this.$node = $('<span class="dancer"></span>');
//   this.top = top;
//   this.left = left;
//   this.timeBetweenSteps = timeBetweenSteps;
//   this.step();
//   this.setPosition();
// };

// Dancer.prototype.step = function() {
//   setTimeout(this.step.bind(this), this.timeBetweenSteps);
// };

// Dancer.prototype.setPosition = function() {
//   var styleSettings = {
//     top: this.top,
//     left: this.left
//   }

//   this.$node.css(styleSettings);
// };

// Dancer.prototype.lineUp = function() {
//   this.$node.css('top', '50%');
// };

var Dancer = class {

  constructor(top, left, timeBetweenSteps) {
    this.$node = $('<span class="dancer"></span>');
    this.top = top;
    this.left = left;
    this.timeBetweenSteps = timeBetweenSteps;
    this.step();
    this.setPosition();  
  }

  step() {
    setTimeout(this.step.bind(this), this.timeBetweenSteps);
  }

  setPosition() {
    var styleSettings = {
      top: this.top,
      left: this.left
    }

    this.$node.css(styleSettings);
  }

  lineUp() {
    this.$node.css('top', '50%');
  }

}
