/**
 * Hockey is the game. Make it happen.
 *
 * USEFUL RESOURCES
 * https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/JavaScript_basics
 * https://api.jquery.com/id-selector/
 * https://api.jquery.com/html/
 * https://api.jquery.com/css/
 * https://api.jquery.com/click/
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseInt
 *
 * If you want to turn it into some other sport, have at it.
 *
 * Anyway, I have given you a basic HTML structure for a
 * BATTLE OF THE SPORTS GAME THING between these two rivals, and you
 * should make the page do what it needs to do, using your knowledge
 * of JS, HTML, CSS, and... sports.
 *
 * Here's what this 'game' should do:
 *
 * 1. Clicking a "SHOOT" button attempt to score against the opposing team.
 *   - shots have a random chance of succeeding or failing
 *   - number of shots taken should increase every click on the "SHOOT" button
 *   - number of hits obviously only increases when the shot is successful
 *
 * 2. Clicking the "RESET" button resets all the shot and score counters and
 * adds 1 to the number of resets
 *
 * 3. Any time a team shoots and scores change the background color of
 *    page to that teams color
 *
 * OPTIONAL STUFF:
 * - add logos of the two rivals below their name
 * - make the page just look better
 * - play a sound when someone clicks the "Shoot" button. You'll need to read about the <audio> element
 *   and how to use it in JS. You will also need to download a sound bite
 */

(function(){

  //jQuery equivelent to window.onload = function{}
  //code in here wont run until page loads
  $(function(){

    // Buttons we need from the DOM, retrieved using jQuery
    let resetButton = $("#reset");
    let teamoneShootButton = $("#teamone-shoot");
    let teamtwoShootButton = $("#teamtwo-shoot");

    // Set the sounds we will use when the shoot button is clicked
    let shotSound = new Audio("assets/images/Hockey_Shot.wav");
    let cheeringSound = new Audio("assets/images/Cheering.wav");
    let booSound = new Audio("assets/images/Boo.wav");

    //  Counters we need from the DOM, using jQuery to get them
    let resetCounter = $("#num-resets");
    let teamoneShotCounter = $("#teamone-numshots");
    let teamoneHitCounter = $("#teamone-numhits");
    let teamtwoShotCounter = $("#teamtwo-numshots");
    let teamtwoHitCounter = $("#teamtwo-numhits");



    // When team One shoot button is clicked increment shot counter and maybe the hit counter
    teamoneShootButton.click(function(){

      shotSound.play();
      // Increment shot counter
      teamoneShotCounter.html(parseInt(teamoneShotCounter.html()) + 1);

      // Timer delay of 1.2 seconds between shot and crowd reaction
      setTimeout(function(){
        // Use Math.random to generate shot success value between 1 and 100
        let shotSuccess = Math.random() * 100;
        console.log(shotSuccess);

        // Increment hit counter if shotSuccess is greater than 50
        if(shotSuccess >= 60) {
          $("#scoreboard").css("background-color", "darkblue");
          cheeringSound.play();
          teamoneHitCounter.html(parseInt(teamoneHitCounter.html()) + 1);
        } else {
          $("#scoreboard").css("background-color", "grey");
          booSound.play();
        }
      }, 1200);

    })

    // When team Two shoot button is clicked increment shot counter and maybe the hit counter
    teamtwoShootButton.click(function(){

      shotSound.play();
      // Increment shot counter
      teamtwoShotCounter.html(parseInt(teamtwoShotCounter.html()) + 1);

      // Timer delay of 1.2 seconds between shot and crowd reaction
      setTimeout(function(){
        // Use Math.random to generate shot success value between 1 and 100
        let shotSuccess = Math.random() * 100;
        console.log(shotSuccess);

        // Increment hit counter if shotSuccess is greater than 50
        if(shotSuccess >= 60) {
          $("#scoreboard").css("background-color", "orange");
          cheeringSound.play();
          teamtwoHitCounter.html(parseInt(teamtwoHitCounter.html()) + 1);
        } else {
          $("#scoreboard").css("background-color", "grey");
          booSound.play();
        }
      }, 1200);
    })

    // When reset button is clicked we need to increment the reset counter and zero out all other Counters
    resetButton.click(function(){

      // Increment reset counter
      resetCounter.html(parseInt(resetCounter.html()) + 1);

      // Set all other counters to zero
      teamoneShotCounter.html(0);
      teamoneHitCounter.html(0);
      teamtwoShotCounter.html(0);
      teamtwoHitCounter.html(0);

    })

  })

})();
