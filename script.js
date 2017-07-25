/*jslint browser: true*/
/*global $, jQuery, alert*/

var scrollPosition;
var scrollDirection;
var prevMouseY = 100;
var dropOn = false;
var detect = 50;
var section = "header";

// fitText
$(window).resize(function () {
    jQuery("#nameHead").fitText(0.5, {minFontSize: "50px", maxFontSize: "150px"});
});

// show navigation bar when moving mouse to top of screen ; hides when leaves top of screen
$(document).mousemove(function (event) {
    if ($(window).width() <= 485 && detect > 50) {
        detect = 200;
    }
    if (event.clientY < detect) {
        if (prevMouseY >= detect) {
            $("ul.navigation").dequeue().stop().slideDown("slow");
        }
    } else if (event.clientY >= detect) {
        if (prevMouseY < detect) {
            $("ul.navigation").dequeue().stop().slideUp("slow");
            $("div.dropMenu").dequeue().stop().hide();
            $("a.menuIcon").css({"background-color":"#FFF", "color":"#77C9D4"});
            dropOn = !dropOn;
            if (dropOn == false) {
            detect = 50;
            } else {
                detect = 200;
            }
        }
    }
    prevMouseY = event.clientY;
});

// hide navigation bar when scrolling down; show when scroll up
$(window).scroll(function () {
    var nextPosition = $(this).scrollTop();
    if (scrollPosition < nextPosition) {
        if (scrollDirection != "down") {
            $("ul.navigation").dequeue().stop().slideUp("slow");
            scrollDirection = "down";
        }
    } else {
        if (scrollDirection != "up") {
            $("ul.navigation").dequeue().stop().slideDown("slow");
            scrollDirection = "up";
        }
    }
    scrollPosition = nextPosition;
});

// toggle dropdown menu
$(document).ready(function () {
    $("a.menuIcon").click(function () {
        $("div.dropMenu").dequeue().stop().fadeToggle("fast");
        dropOn = !dropOn;
        if (dropOn == false) {
            $("a.menuIcon").css({"background-color":"#FFF", "color":"#77C9D4"});
            detect = 50;
        } else {
            $("a.menuIcon").css({"color":"#FFF", "background-color":"#77C9D4"});
            detect = 200;
        }
    });
});

// text header animation
$(document).ready(function () {
    $("h1").animate({opacity: 1, letterSpacing: "0"}, {duration : 2500});
    $("span.quote").animate({opacity: 1, letterSpacing: "3"}, {duration : 2500});
});

// toggle sections
var toggleSections = function (sectionNew) {
    if (!$(section).is(':animated')) {
        $(section).dequeue().stop().hide("slow");
        $(sectionNew).dequeue().stop().show("slow");
        section = sectionNew;
    }
};

$(document).ready(function () {
    $(".homeButton").click(function () {
        if (section != "header") { toggleSections("header"); }
    });
    $(".aboutButton").click(function () {
        if (section != "#about") { toggleSections("#about"); }
    });
    $(".portfolioButton").click( function () {
        if (section != "#portfolio") { toggleSections("#portfolio"); }
    });
    $(".contactButton").click(function () {
        if (section != "#contact") { toggleSections("#contact"); }
    });
});

/*!
* FitText.js 1.2
*
* Copyright 2011, Dave Rupert http://daverupert.com
* Released under the WTFPL license
* http://sam.zoy.org/wtfpl/
*
* Date: Thu May 05 14:23:00 2011 -0600
*/

(function( $ ){

  $.fn.fitText = function( kompressor, options ) {

    // Setup options
    var compressor = kompressor || 1,
        settings = $.extend({
          'minFontSize' : Number.NEGATIVE_INFINITY,
          'maxFontSize' : Number.POSITIVE_INFINITY
        }, options);

    return this.each(function(){

      // Store the object
      var $this = $(this);

      // Resizer() resizes items based on the object width divided by the compressor * 10
      var resizer = function () {
        $this.css('font-size', Math.max(Math.min($this.width() / (compressor*10), parseFloat(settings.maxFontSize)), parseFloat(settings.minFontSize)));
      };

      // Call once to set.
      resizer();

      // Call on resize. Opera debounces their resize by default.
      $(window).on('resize.fittext orientationchange.fittext', resizer);

    });

  };

})( jQuery );