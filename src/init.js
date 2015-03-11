$(document).ready(function(){
  window.dancers = [];
  var arnoldCounter = 0;

  $(".addDancerButton").on("click", function(event){
    /* This function sets up the click handlers for the create-dancer
     * buttons on dancefloor.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    // get the dancer function name
    var dancerMakerFunctionName = $(this).data("dancer-maker-function-name");

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position

    var dancer = new dancerMakerFunction(
      $("body").height() * Math.random(),
      $("body").width() * Math.random(),
      Math.random() * 1000
    );

    $('body').append(dancer.$node);
    window.dancers.push(dancer);
    dancer.$node.mouseover((function(){
      var index = window.dancers.indexOf(dancer);
      window.dancers.splice(index,1);
      // dance.node from body.chi;dren
      // console.log($('body').children('.dancer'));
      this.$node.remove();
      if (this.celeb === true)
        arnoldCounter++;
      else
        arnoldCounter--;
      $('.pointsCounter').text(arnoldCounter);
      // $("body").remove(dancer.$node);
    }).bind(dancer));
  });

  $(".lineup").on("click", function(event) {
    for (var i = 0; i < window.dancers.length; i++) {
      window.dancers[i].lineup();
    }
  });

  $('.interact').on('click', function(event){
    var newlocation = [];
    for (var i = 0; i < window.dancers.length; i++){
      newlocation.push(window.dancers[i].interact());
    }
    for (var i = 0; i < newlocation.length; i++) {
      var storage = newlocation[i];   // storage {dancer:{}, top: #, left: #}
      storage.dancer.left = storage.left; // dancer {top:#, left#, setPosition: function, step: function}
      storage.dancer.top = storage.top;
      storage.dancer.setPosition(storage.top, storage.left);
      storage.dancer.moved = true;
    }
    // iterate through all the dancers in window.dancers
      // call it's interact function
    
  });
  
});

