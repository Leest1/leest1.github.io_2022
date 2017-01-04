/*jslint browser: true*/
/*global $, jQuery, alert*/

var scrollPosition;
var scrollDirection;
var prevMouseY = 100;
var dropOn = false;
var detect = 50;

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
            detect = 50;
        } else {
            detect = 200;
        }
    });
});

// text header animation
$(document).ready(function () {
    $("h1").animate({opacity: 1, letterSpacing: "0"}, {duration : 2500});
    $("span.quote").animate({opacity: 1, letterSpacing: "0"}, {duration : 2500});
    $("span.author").animate({opacity: 1, letterSpacing: "0"}, {duration : 2500});
});

// toggle sections
var section = "header";
var toggleSections = function (sectionNew) {
    $(section).hide("slow");
    $(sectionNew).show("slow");
};

$(document).ready(function () {
    $(".homeButton").click(function () {
        if (section != "header") { toggleSections("header"); }
        section = "header";
    });
    $(".aboutButton").click(function () {
        if (section != "#about") { toggleSections("#about"); }
        section = "#about";
    });
    $(".portfolioButton").click( function () {
        if (section != "#portfolio") { toggleSections("#portfolio"); }
        section = "#portfolio";
    });
    $(".contactButton").click(function () {
        if (section != "#contact") { toggleSections("#contact"); }
        section = "#contact";
    });
});

// about buttons toggling 1 < 2 < 3 < 4
var about = "#aboutSector1";
var toggleAbout = function (sector) {
    if (about.substr(-1) < sector.substr(-1)) {
        $(about).animate({left:"-700px"}, 500).delay(0).hide(0, function() {
            $(sector).show(0).css("left", "700px").animate({left : "0px"}, "slow");
        });
    } else {
        $(about).animate({left:"700px"}, 500).delay(0).hide(0, function() {
            $(sector).show(0).css("left", "-700px").animate({left : "0px"}, "slow"); 
        });
    }
    about = sector;
};

$(document).ready(function () {
    $("#about1").click(function () {
        if (about != "#aboutSector1") {toggleAbout("#aboutSector1"); }
    });
    $("#about2").click(function () {
        if (about != "#aboutSector2") {toggleAbout("#aboutSector2"); }
        about = "#aboutSector2";
    });
    $("#about3").click(function () {
        if (about != "#aboutSector3") {toggleAbout("#aboutSector3"); }
        about = "#aboutSector3";
    });
    $("#about4").click(function () {
        if (about != "#aboutSector4") {toggleAbout("#aboutSector4"); }
        about = "#aboutSector4";
    });
});