

var CelebDancer = function(top, left, timeBetweenSteps){
	makeMovingDancer.call(this, top, left, timeBetweenSteps);

};
CelebDancer.prototype = Object.create(makeMovingDancer.prototype);
CelebDancer.prototype.constructor = CelebDancer;

