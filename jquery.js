$(document).ready(function(){
    // Hamburger menu toggle
    $("#menu-toggle").on('click', function() {
        console.log("clicked!!!");
        $("#primary-nav-list").slideToggle();
    });

    // var screenWidth = $(window).width();
    // var screenHeight = $(window).height();

    // console.log(screenWidth);
    // console.log(screenHeight);

    // var  svg = document.getElementById("line-home");
    // // Get the bounds of the SVG content

    // console.log(svg);
    // var  bbox = svg.getBBox();
    // console.log(bbox);
    // Update the width and height using the size of the contents
    // svg.setAttribute("width", screenWidth);
    // svg.setAttribute("height", screenHeight);
  
});