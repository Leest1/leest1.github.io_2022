function contentHeight() {
    var headerHei = $(".primary-navigation").outerHeight() + $(".banner").outerHeight(),
        footerHei = $("footer").outerHeight(),
        contentHei = $("#main-content").outerHeight();
    $("#background-line").css("min-height", headerHei + footerHei + contentHei);
}

$(document).ready(function(){
    // Hamburger menu toggle
    $("#menu-toggle").on('click', function() {
        console.log("clicked!!!");
        $("#primary-nav-list").slideToggle();
    });

    contentHeight();
});

$(window).resize(function() {
    contentHeight();
});