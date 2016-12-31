var scrollPosition;
var scrollDirection;

$(document).ready(function() {
    $(window).scroll(function() {
        var nextPosition = $(this).scrollTop();
        if(scrollPosition < nextPosition) {
            if(scrollDirection != "down") {
                $("ul.navigation").dequeue()
                    .stop()
                    .slideUp("slow");
                scrollDirection = "down";
            }
        }
        else {
            if(scrollDirection != "up") {
                $("ul.navigation").dequeue()
                    .stop()
                    .slideDown("slow");
                scrollDirection = "up";
            }
        }
        scrollPosition = nextPosition;
    });
});