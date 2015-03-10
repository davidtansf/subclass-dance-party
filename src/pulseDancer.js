var makePulseDancer = function(top, left, timeBetweenSteps){
 // var blinkyDancer = new Makedancer(top, left, timeBetweenSteps);
  Makedancer.call(this,top, left, timeBetweenSteps);
  
  this.$node.css({'transition': 'border ' + timeBetweenSteps / 1000 + 's'});

};

makePulseDancer.prototype = Object.create(Makedancer.prototype);
makePulseDancer.prototype.constructor = makePulseDancer;

makePulseDancer.prototype.step = function(){
    // call the old version of step at the beginning of any call to this new version of step
    Makedancer.prototype.step.call(this);
    // toggle() is a jQuery method to show/hide the <span> tag.
    // See http://api.jquery.com/category/effects/ for this and
    // other effects you can use on a jQuery-wrapped html tag.
    
    this.$node.toggleClass("pulsate1");

  };