/**
 * @file
 *
 * Javascript functionality for flipper.
 */

(function ($) {
  'use strict';

  /**
   * Adds a listener for custom fonts.  When custom fonts are
   * loaded, a css class is added to the 'body' tag which is then
   * used to change font family from system to custom site-wide.
   * See https://fontfaceobserver.com for more info.
   */
  Drupal.behaviors.FontFaceObserver = {
    attach: function(context, settings) {

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
    }
  };
}(jQuery));
