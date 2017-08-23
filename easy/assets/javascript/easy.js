(function(){
  /**
   * Using the LocalStorage API, save the contents of the text box
   * when users click the "save" button.
   * Load the saved text when users click the "Load" button.
   *
   * USEFUL RESOURCES
   * https://api.jquery.com/id-selector/
   * https://api.jquery.com/val/
   * https://api.jquery.com/click/
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseInt
   *
   *
   * Here's the documentation you need:
   * https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage
   */

  let saveButton = $('#save-button');
  let loadButton = $('#load-button');

  /**
   * Gets the text from the element for you
   * @return {String}
   */
  function getText() {
    return $('#save-me').val();
  }

  /**
   * Puts different text
   * @param {String} text the stuff you want to put in the box
   */
  function setText(text) {
    return $('#save-me').val(text);
  }


  //  use localStorage.setItem to get text from #save-me and store in myText
  saveButton.click(function(){
    console.log("save button clicked");
    //  use localStorage.setItem to get text from #save-me and store in myText
    localStorage.setItem('myText', getText());
    console.log(localStorage.getItem("myText"));
  })


  loadButton.click(function(){
    console.log("load button clicked");
    // use localStorage.getItem to retrieve myText, then use setText to put it back in #save-me
    setText(localStorage.getItem("myText"));
  })

})();
