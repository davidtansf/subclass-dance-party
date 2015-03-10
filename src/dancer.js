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