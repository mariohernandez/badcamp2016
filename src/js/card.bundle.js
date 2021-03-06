/**
  * @file
  * Attach behaviors for the search author bio js.
  */

(function ($) {
  'use strict';

  Drupal.behaviors.card = {
    attach: function attach(context, settings) {
      var $bioButton = $('.card__view-bio', context);
      var $bioDrawer = $('.card__col-2', context);
      var showBio = "View full biography";
      var hideBio = "Hide biography";

      $bioButton.on('click', function () {
        $bioDrawer.toggleClass('is-open');
        $bioButton.toggleClass('flip-carat');
        if ($bioDrawer.hasClass('is-open')) {
          $bioButton.text(hideBio);
          $bioButton.toggleClass('is-open');
        } else {
          $bioButton.text(showBio);
          $bioButton.removeClass('is-open');
        }
      });
    }
  };
})(jQuery);
//# sourceMappingURL=card.bundle.js.map
