// Creates and returns a new dancer object that can step
var celebList = ["arnold.png","brad.png","mel.png","jackson.png","rachel.png","alex.png","bryan.png","gun.png","tae.png","sean.png","shehzan.png",'trace.png','will.png','jerod.png','savrut.png'];

var Makedancer = function(top, left, timeBetweenSteps){ 
  
  var rand = Math.floor(Math.random() * celebList.length);
  
  this.$node = $('<span class="dancer"><img src="src/img/'+celebList[rand]+'"></span>');
  this.$node.css({'border-color':'transparent'});
  this.timeBetweenSteps = timeBetweenSteps;
  this.top = top;
  this.left = left;
  
  this.step();
  this.setPosition(top, left);

};  
//$oneDancer.lineup()
Makedancer.prototype.lineup = function () {
  this.setPosition(this.top,"50%");
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
      if (distance < lowestDistance){
        lowestDistance = distance;
        lowestIndex = i;
      }
      // also save index of lowest
    }
  }

  // do something to that one
  // go to that dancers position, or halfway
  this.$node.css({"transition":"top " + this.timeBetweenSteps / 1000 + "s, left " + this.timeBetweenSteps / 1000 + "s"});
  this.left = window.dancers[lowestIndex].left;
  this.top = window.dancers[lowestIndex].top;
  this.setPosition(window.dancers[lowestIndex].top, window.dancers[lowestIndex].left);

  // make into pulse dancer
};

Makedancer.prototype.step = function  () {
  /* 
  window.setTimeout((function(context) { 
    return function(){ context.step() };
  })(this) , this.timeBetweenSteps
  */
  setTimeout(this.step.bind(this), this.timeBetweenSteps);
};

Makedancer.prototype.setPosition = function (top, left) {
  var styleSettings = {
    top: top,
    left: left
  };
  this.$node.css(styleSettings);
};

// base dancer
//   .lineup
//   .step
//   .setPosition = function(top, left)
//         this.css = ({"top": top , "left": left });