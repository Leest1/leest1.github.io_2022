var scrollPosition;
var scrollDirection;
var prevMouseY = 100;
var dropOn = false;
var detect = 50;

// show navigation bar when moving mouse to top of screen ; hides when leaves top of screen
$(document).mousemove( function(event) {
    if($(window).width() <= 485 && detect > 50) {
        detect = 200;
    }
    
    if(event.clientY < detect) {
        if(prevMouseY > detect) {
            $("ul.navigation").dequeue().stop().slideDown("slow");
        }
    }
    else if (event.clientY >= detect) {
        if(prevMouseY <= detect) {
            $("ul.navigation").dequeue().stop().slideUp("slow");
        }
    }
    prevMouseY = event.clientY;
});

// hide navigation bar when scrolling down; show when scroll up
$(window).scroll(function() {
    var nextPosition = $(this).scrollTop();
    if(scrollPosition < nextPosition) {
        if(scrollDirection != "down") {
            $("ul.navigation").dequeue().stop().slideUp("slow");
            scrollDirection = "down";
        }
    }
    else {
        if(scrollDirection != "up") {
            $("ul.navigation").dequeue().stop().slideDown("slow");
            scrollDirection = "up";
        }
    }
    scrollPosition = nextPosition;
});

// toggle dropdown menu
$(document).ready( function() {
    $("a.menuIcon").click( function() {
        $("div.dropMenu").dequeue().stop().fadeToggle("fast");
        dropOn = !dropOn;
        if(dropOn == false) {
            detect = 50;
        }
        else {
            detect = 200;
        }
    });
});

// text header animation
$(document).ready( function() {
    $("h1").animate({opacity:1, letterSpacing: "0"}, {duration:2500});
    $("span.quote").animate({opacity:1, letterSpacing: "0"}, {duration:2500});
    $("span.author").animate({opacity:1, letterSpacing: "0"}, {duration:2500});
});

// toggle sections
var section = "#home";
var toggleSections = function(section) {
//    $("header").slideUp("slow");
//    $("#portfolio").slideUp("slow");
//    $("#contact").slideUp("slow");
//    $("#about").slideUp("slow");
//    $(section).slideDown("slow");
    $("header").hide("slow");
    $("#portfolio").hide("slow");
    $("#contact").hide("slow");
    $("#about").hide("slow");
    $(section).show("slow");
}

$(document).ready( function() {
    $(".homeButton").click( function() {
        if(section != "#home"){ toggleSections("header"); }
        section = "#home";
    });
    $(".aboutButton").click ( function() {
        if(section != "#about"){ toggleSections("#about"); }
        section = "#about";
    });
    $(".portfolioButton").click ( function() {
        if(section != "#portfolio"){ toggleSections("#portfolio"); }
        section = "#portfolio";
    });
    $(".contactButton").click( function() {
        if(section != "#contact"){ toggleSections("#contact"); }
        section = "#contact";
    });
});

// about buttons toggling
$(document).ready( function(){
    $("#about1").click( function() {
        $("#aboutSector1").show("slow");
        $("#aboutSector2").hide("slow");
    });
    $("#about2").click( function() {
        $("#aboutSector1").hide("slow");
        $("#aboutSector2").show("slow");
    });
});