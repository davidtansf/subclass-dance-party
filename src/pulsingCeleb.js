

var makePulsingCeleb = function(top, left, timeBetweenSteps){
  makePulseDancer.call(this, top, left, timeBetweenSteps);	
  
  // append the image
  // '<img src=' + celebList[rand] + '>' --> <img src=arnold.png>
  //                                     --> <img src="arnold.png">
};
makePulsingCeleb.prototype = Object.create(makePulseDancer.prototype);
makePulsingCeleb.prototype.constructor = makePulsingCeleb;

