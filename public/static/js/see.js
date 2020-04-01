/**
 * See.js - A jQuery plugin for detecting if the user has
 * scrolled to an element on the page or not. Very useful
 * for landing page fade-ins.
 *
 * @author Carson Holloway
 * @license MIT
 * @version 0.1.1a
 */
(function($) {
  /**
   * Gets the absolute height in pixels of a string which describes that
   * height in simpler terms. This string can be a percentage (of the
   * window height, specified using a percentage symbol (%)), or pixels
   * (specified with either no units or "px").
   *
   * @param {string} str The string to parse.
   * @returns {number} The size in pixels of the
   */
  function absoluteHeight(str) {
    if (str.endsWith("%")) {
      // A percentage was given
      var percentageString = str.slice(0, str.length - 1);
      var percentage = Number(percentageString);

      // Calculate the absolute height with the percentage
      var height = (percentage / 100) * $(window).height();

      return Math.floor(height);
    } else {
      // Pixels are either stated, or implied
      var pixelsString;

      if (str.endsWith("px")) {
        pixelsString = str.slice(0, str.length - 2);
      } else {
        pixelsString = str;
      }

      var pixels = Number(pixelsString);

      return Math.floor(pixels);
    }
  }

  /**
   * Fired when the user scrolls down to an element or "sees" it.
   *
   * @param {string} height The height of the window where the element is "seen".
   * @param {Function} callback The callback to call when the element is "seen".
   * @param {Function} exitCallback The callback for when the element is "unseen".
   * @returns The jQuery object.
   */
  $.fn.see = function(height, callback, exitCallback) {
    var defaultHeight = "100%";
    var defaultCallback = function() {};
    var defaultExitCallback = function() {};

    if (
      height === undefined &&
      callback === undefined &&
      exitCallback == undefined
    ) {
      // No arguments were given
      return this;
    } else if (callback === undefined && exitCallback === undefined) {
      // One argument was given, assume it to be callback, and height 0
      callback = height;
      height = defaultHeight;
      exitCallback = defaultExitCallback;
    } else if (exitCallback === undefined) {
      // Two arguments were given, make exit callback a defualt nothing
      // function
      exitCallback = defaultExitCallback;
    }
    // Otherwise, all arguments were given...

    return this.each(function() {
      var target = this;
      var sawLastUpdate = false;

      // Whenever the user scrolls, do the following
      var doCheck = function() {
        /** @type {number} The absolute height difference. */
        var absHeight = absoluteHeight(height);

        /** @type {number} The scroll position of the user in the page. */
        var userScrollPosition = $(this).scrollTop();

        /** @type {number} The position of the element in the page. */
        var elementPosition = $(target).offset().top;

        if (elementPosition - userScrollPosition <= absHeight) {
          // Once the user has scrolled to the element, according to the
          // offset

          // Only bother calling it when they start seeing it
          if (!sawLastUpdate) callback.call(target);

          // It was seen this update
          sawLastUpdate = true;
        } else {
          // If they saw it last update, make sure to notify them
          // that they are exiting the "seeing" phase.
          if (sawLastUpdate) exitCallback.call(target);

          // It wasn't seen this update
          sawLastUpdate = false;
        }
      };

      $(document)
        .ready(doCheck)
        .scroll(doCheck);
    });
  };
})(jQuery);
