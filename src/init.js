$(document).ready(function() {
  window.dancers = [];

  $('.addDancerButton').on('click', function(event) {
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
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];
    console.log(dancerMakerFunction);

    // make a dancer with a random position

    var dancer = new dancerMakerFunction(
      Math.floor(Math.random() * $("body").height() / 2) + ($("body").height() / 2),
      $("body").width() * Math.random(),
      100
    );

    window.dancers.push(dancer);
    $('body').append(dancer.$node);
  });

  $('.lineUpButton').on('click', function(event) {
    
    window.dancers.forEach(function (dancer){
      dancer.lineUp();
    });
  });

  $('body').on('click', 'span', function(event) {
    
    var element = $(event.target);

    var clickedLeft = element.context.x || element.context.offsetLeft;
    var clickedTop = element.context.y || element.context.offsetTop;

    console.log(element)
    
    var dancerGroup = [];

    window.dancers.forEach(function (dancer){
      var top = dancer.top;
      var left = dancer.left;

      var distanceFromTarget = Math.floor(Math.sqrt((top - clickedTop) ** 2 + (left - clickedLeft) ** 2));
      console.log('distance:', distanceFromTarget);
      
      if (distanceFromTarget < 500) {
        dancerGroup.push(dancer);
      }
    });

    dancerGroup.push(element);

    dancerGroup.forEach(function (dancer){
      dancer.lineUp();
    });   
  });

  // $('body').on('mouseover', 'span', function(event) {
    
  //   $(event.target).toggleClass('hovered');
    
  // });


});

