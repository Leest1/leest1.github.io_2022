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

// hide navigation bar when clicking a button


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