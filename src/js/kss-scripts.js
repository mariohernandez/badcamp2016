$(document).ready(function() {
  'use strict';

  /**
   * Styleguide JS here. Because the styleguide
   * pages aren't using Drupal behaviors, we're using
   * a standard $(document).ready() function.
   */

  /**
   * Example of a KSS Node script
   */
  var $navigationToggle = $('.js-navigation-toggle');
  var $navigation = $('.js-navigation-container');

  $navigation.addClass('closed');
  $navigationToggle.addClass('closed');

  // Open the menu when the icon is clicked
  $navigationToggle.on('click', function(event) {
    $(this).toggleClass('closed');
    $navigation.toggleClass('closed');
  });


    /**
   * Adds a listener for custom fonts.  When custom fonts are
   * loaded, a css class is added to the 'body' tag which is then
   * used to change font family from system to custom site-wide.
   * See https://fontfaceobserver.com for more info.
   */
  var muliregular = new FontFaceObserver('muli');
  var mulibold = new FontFaceObserver('muli');
  var muliitalic = new FontFaceObserver('muli');
  var mulibolditalic = new FontFaceObserver('muli');

  Promise.all([
    muliregular.load(),
    mulibold.load(),
    muliitalic.load(),
    mulibolditalic.load()
  ]).then(function() {
    $('body').addClass('fonts-loaded');
  });


    /* Card toggle */
  var card = {
    var $bioButton = $('.card__view-bio');
    var $bioDrawer = $('.card__col-2');
    var showBio = 'View full biography';
    var hideBio = 'Hide biography';

    $bioButton.on('click', function() {
      $bioDrawer.toggleClass('is-open');
      $bioButton.toggleClass('flip-carat');
      if ($bioDrawer.hasClass('is-open')) {
        $bioButton.text(hideBio);
      }
      else {
        $bioButton.text(showBio);
      }
    });
  };

  card.attach(document);
});

