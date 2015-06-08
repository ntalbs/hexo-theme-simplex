/**
 * Main JS file
 */

(function ($) {
  "use strict";

  $(document).ready(function (){
    $(".post-content").fitVids();
  });

  var threshold = $('h1').offset().top + $('h1').height() - $('nav').height();
  $(document).scroll(function () {
    var dh = $('.post-content').height(), // document height
        wh = $(window).height(),          // window height
        offsetTop = $('.post-content').offset().top,
        y = $(document).scrollTop(),
        base = Math.max(5, offsetTop + dh - wh),
        progress = Math.min(100, y / base * 100);
    $('#bar').css({width: progress + '%'});

    if (y <= threshold) {
      $('#progress').height('8px');
    } else {
      $('#progress').height('36px');
    }
  });
}(jQuery));
