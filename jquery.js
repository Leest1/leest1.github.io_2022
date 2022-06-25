function contentHeight() {
    // get the height of header, footer, and main content to set the height of the background
    var headerHei = $(".primary-navigation").outerHeight() + $(".banner").outerHeight(),
        footerHei = $("footer").outerHeight(),
        contentHei = $("#main-content").outerHeight();
    $(".background-line").css("min-height", headerHei + footerHei + contentHei);
}

// SETS UP HIDDEN ITEMS BEFORE PAGE LOAD
$(window).bind('setup', function() {
    // hide Looking for Work banner if user has closed before
    if (sessionStorage.bannerClose == 'true') {
        $(".banner").hide();
    } else {
        $(".banner").show();
    }
});

$(document).ready(function(){
    $(window).trigger('setup');

    // resize background height according to content;
    contentHeight();

    // Hamburger menu toggle
    $("#menu-toggle").on('click', function() {
        $("#primary-nav-list").slideToggle();
    });

    // IF BANNER CLOSE BUTTON CLICKED
    $("#bannerXMark").on('click', function() {
        sessionStorage.setItem('bannerClose','true');
        $(".banner").hide();
    });
});

$(window).resize(function() {
    contentHeight();
});