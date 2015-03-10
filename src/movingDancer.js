var makeMovingDancer = function(top, left, timeBetweenSteps){
 // var blinkyDancer = new Makedancer(top, left, timeBetweenSteps);
  Makedancer.call(this,top, left, timeBetweenSteps);
  this.timeBetweenSteps += 3000;
  this.$node.css({"transition":"top " + this.timeBetweenSteps / 1000 + "s, left " + this.timeBetweenSteps / 1000 + "s"});
};

makeMovingDancer.prototype = Object.create(Makedancer.prototype);
makeMovingDancer.prototype.constructor = makeMovingDancer;

makeMovingDancer.prototype.step = function(){
    // call the old version of step at the beginning of any call to this new version of step
    Makedancer.prototype.step.call(this);
    // toggle() is a jQuery method to show/hide the <span> tag.
    // See http://api.jquery.com/category/effects/ for this and
    // other effects you can use on a jQuery-wrapped html tag.

    var randTop = $("body").height() * Math.random();
    var randLeft = $("body").width() * Math.random();
    this.setPosition(randTop, randLeft); // change this later

  };