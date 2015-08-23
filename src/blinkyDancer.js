var makeBlinkyDancer = function(top, left, timeBetweenSteps){

  Makedancer.call(this,top, left, timeBetweenSteps);

};

makeBlinkyDancer.prototype = Object.create(Makedancer.prototype);
makeBlinkyDancer.prototype.constructor = makeBlinkyDancer;

makeBlinkyDancer.prototype.step = function(){
    // call the old version of step at the beginning of any call to this new version of step
    // toggle() is a jQuery method to show/hide the <span> tag.
    // See http://api.jquery.com/category/effects/ for this and
    // other effects you can use on a jQuery-wrapped html tag.
  Makedancer.prototype.step.call(this);
  this.$node.toggle();
};
