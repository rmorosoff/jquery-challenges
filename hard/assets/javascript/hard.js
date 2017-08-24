/**
 * Given the HTML provided, please make the following changes with javascript – don't change any HTML!:
 *
 * USEFUL RESOURCES
 * https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/JavaScript_basics
 * https://api.jquery.com/id-selector/
 * https://api.jquery.com/html/
 * https://api.jquery.com/css/
 * https://api.jquery.com/click/
 * https://api.jquery.com/show/
 * https://api.jquery.com/hide/
 * https://api.jquery.com/remove/
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseInt
 *
 * 1. Any time someone clicks on the title at the top "feed template,"
 *    make the color of the "feed template" text change from black to red
 *    and then from red to black when clicked again.
 *
 * 2. The links on the side of the page – "your name," "section 1," "section 2," etc. –
 *    hide every odd-numbered link in the menu.
 *
 * 3. Change every instance of the word "bacon" on the page to be "LASER VISION"
 *
 * 4. Delete the last two posts in the middle section (they have a CSS class "post"
 *
 * 5. Remove the images in the right column
 *
 * BONUS: add a special surprise inside!
 *
 */

 (function(){

   //jQuery equivelent to window.onload = function{}
   //code in here wont run until page loads
   $(function(){
     let templateText = $(".panel h1");

     //  when title is clicked, toggle text color between red and black
     templateText.click(function(){
       console.log("Template Text clicked");
       console.log(templateText.css("color"));
       //  if color is not red, then make it red
       if (templateText.css("color") != "rgb(255, 0, 0)"){
         templateText.css("color", "red");
       } else //  make color black
         {
           console.log("color now" + templateText.css("color"));
           templateText.css("color", "black");
         }
     })

     //  get odd item with class of "title"
     let oddTitle = $(".title:even");
     console.log(oddTitle);
     //  now hide those items
     oddTitle.hide();

     //  select all p tags, loop through using each, relace "Bacon" with "LASER VISION"
     //  then set each sentence with the one with the words replaced
     $(".large-10.columns p").each(function() {
        var text = $(this).text();
        text = text.replace("Bacon", "LASER VISION");
        $(this).text(text);
      });


      //  select all "row post", then use slice to get the last 2, then remove them
      //  a negative # allows us to slice from the end of the array.  -3 is getting the
      //  last 2 items, while -2 is only getting the last item.  Not sure why.
      $(".row.post").slice(-3).remove();


      //  Now, remove the images from class "large-3 columns hide-for-small"
      $(".large-3.columns.hide-for-small img").remove();


   })

 })();
