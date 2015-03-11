var makePulseDancer = function(top, left, timeBetweenSteps){

  Makedancer.call(this,top, left, timeBetweenSteps);
  this.$node.css({'transition': 'border ' + timeBetweenSteps / 1000 + 's'});

};

makePulseDancer.prototype = Object.create(Makedancer.prototype);
makePulseDancer.prototype.constructor = makePulseDancer;

makePulseDancer.prototype.step = function(){

  Makedancer.prototype.step.call(this);
  this.$node.toggleClass("pulsate1");

};