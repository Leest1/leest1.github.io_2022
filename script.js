var scrollPosition;
var scrollDirection;
var prevMouseY = 100;

// show navigation bar when moving mouse to top of screen ; hides when leaves top of screen
$(document).mousemove( function(event) {
    if(event.clientY < 50) {
        if(prevMouseY > 50) {
            $("ul.navigation").dequeue().stop().slideDown("slow");
        }
    }
    else if (event.clientY >= 50) {
        if(prevMouseY <= 50) {
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
//$("#about").click( function() {
//    $(this).hide();
////    $(div.dropMenu).fadeToggle("slow");
//});