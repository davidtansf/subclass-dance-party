// Creates and returns a new dancer object that can step
var celebList = ["arnold.png","brad.png","mel.png","jackson.png","rachel.png","alex.png","bryan.png","gun.png","tae.png","sean.png","shehzan.png",'trace.png','will.png','jerod.png','savrut.png'];

var Makedancer = function(top, left, timeBetweenSteps){

  var rand = Math.floor(Math.random() * celebList.length);

  this.$node = $('<span class="dancer"><img src="src/img/'+celebList[rand]+'"></span>');
  this.$node.css({'border-color':'transparent'});
  this.timeBetweenSteps = timeBetweenSteps;
  this.top = top;
  this.left = left;
  this.counter = Math.floor(Math.random() * 2);

  rand < 4 ? (this.celeb = true) : (this.celeb = false);

  this.step();
  this.setPosition(top, left);

};


//$oneDancer.lineup()
Makedancer.prototype.lineup = function () {
  // do a modulo check ,see if odd or even
  // set width as 0 or 1
  if (this.counter % 2 == 0) {
    this.left = $('body').width() * .33;
  } else {
    this.left = $('body').width() * .67;
  }
  this.setPosition(this.top,this.left);
  this.moved = true;
};

Makedancer.prototype.interact = function(){
  // check closest out of all dancers
  // for loop, iterate through all of the dancers
  var lowestDistance = null;
  var lowestIndex = null;
  var distance;
  for (var i = 0; i < window.dancers.length; i++){
    // if dancer[i] === this dancer
    if (window.dancers[i] === this){
      // continue
      continue;
    }
    // distance = calculate between dancer[i] and this dancer

    distance = Math.pow(window.dancers[i].top - this.top, 2) + Math.pow(window.dancers[i].left - this.left, 2);
    // if first one, save distance as lowest
    if (lowestDistance === null){
      lowestDistance = distance;
      lowestIndex = i;
      continue;
    } else {
    // else if distance lower than lowest, replace lowest as distance
      if (distance > 50 && distance < lowestDistance){
        lowestDistance = distance;
        lowestIndex = i;
      }
      // also save index of lowest
    }
  }

  // do something to that one
  // go to that dancers position, or halfway
  this.$node.css({"transition":"top " + this.timeBetweenSteps / 1000 + "s, left " + this.timeBetweenSteps / 1000 + "s"});

  var storage = {};
  storage.dancer = this;
  storage['left'] = window.dancers[lowestIndex].left;
  storage['top'] = window.dancers[lowestIndex].top;
  return storage;

};

Makedancer.prototype.step = function  () {
  setTimeout(this.step.bind(this), this.timeBetweenSteps);
};



Makedancer.prototype.setPosition = function (top, left) {
  var styleSettings = {
    top: top,
    left: left
  };
  this.$node.css(styleSettings);
};
