var makeMovingDancer = function(top, left, timeBetweenSteps){

  Makedancer.call(this,top, left, timeBetweenSteps);
  this.timeBetweenSteps += 3000;
  this.$node.css({"transition":"top " + this.timeBetweenSteps / 1000 + "s, left " + this.timeBetweenSteps / 1000 + "s"});
};

makeMovingDancer.prototype = Object.create(Makedancer.prototype);
makeMovingDancer.prototype.constructor = makeMovingDancer;

makeMovingDancer.prototype.step = function(){
  if (this.moved) {
  	setTimeout(this.step.bind(this), 4000);
  	this.moved = false;
  } else {
    Makedancer.prototype.step.call(this);
    var randTop = $("body").height() * Math.random(); // $("body").height() refers to the height of the entire body, ie. the height of the browser window
    var randLeft = $("body").width() * Math.random();
    this.top = randTop;
    this.left = randLeft;
    this.setPosition(randTop, randLeft);
  }
};