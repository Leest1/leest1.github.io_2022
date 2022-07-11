function contentHeight() {
    // get the height of header, footer, and main content to set the height of the background
    var headerHei = $(".primary-navigation").outerHeight() + $(".banner").outerHeight(),
        footerHei = $("footer").outerHeight(),
        contentHei = $("#main-content").outerHeight();
    $(".background-line").css("min-height", headerHei + footerHei + contentHei);
}

function copyToClipboard(copyString) {
    navigator.clipboard.writeText(copyString);
    var tooltip = document.getElementById("myTooltip");
    tooltip.innerHTML = "Copied!";
}
function outFunc() {
    var tooltip = document.getElementById("myTooltip");
    tooltip.innerHTML = "Copy to clipboard";
}

// SETS UP HIDDEN ITEMS BEFORE PAGE LOAD
$(window).bind('setup', function() {
    // hide 'Looking for Work banner' if user has closed before
    if (sessionStorage.bannerClose == 'true') {
        $(".banner").hide();
    } else {
        $(".banner").show();
    }
});

$(document).ready(function(){
    $(window).trigger('setup');

    // RESIZE BACKGROUND
    contentHeight();

    // HAMBURGER TOGGLE
    $("#menu-toggle").on('click', function() {
        $("#primary-nav-list").slideToggle();
    });

    // IF BANNER CLOSE BUTTON CLICKED
    $("#bannerXMark").on('click', function() {
        sessionStorage.setItem('bannerClose','true');
        $(".banner").hide();
    });

    $("#bannerXMark").on('keypress', function(e) {
        if(e.which == 13) {
            sessionStorage.setItem('bannerClose','true');
            $(".banner").hide();
        }
    });

    // ICON ANIMATIONS
    $(".logo").hover(function() {
        $(".fa-seedling").addClass('fa-bounce');
    }, function() {
        $(".fa-seedling").removeClass('fa-bounce');
    });

    $(".fa-linkedin").hover(function() {
        $(this).addClass('fa-bounce');
    }, function() {
        $(this).removeClass('fa-bounce');
    });

    $(".fa-dribbble-square").hover(function() {
        $(this).addClass('fa-bounce');
    }, function() {
        $(this).removeClass('fa-bounce');
    });

    $(".fa-github-square").hover(function() {
        $(this).addClass('fa-bounce');
    }, function() {
        $(this).removeClass('fa-bounce');
    });

    // PROFILE PICTURE ANIMATE
    const profilePic = document.querySelector('#about-img');
    let range=48;
    function shadow(e) {
        let { offsetX: x, offsetY: y } = e;
        if (this !== e.target) {
            console.log(e);
            x = x + e.target.offsetLeft;
            y = y + e.target.offsetTop;
            console.log(x);
            console.log(y);
        }

        // height and width of div.hero
        const { offsetWidth: width, offsetHeight: height } = profilePic;

        const xRange = Math.round( (x/width * range)  - range/2 );
        const yRange = Math.round( (y/height * range) - range/2 );
        
        profilePic.style.boxShadow = `${xRange}px ${yRange}px 0 #AF9696`;
    }

    if (profilePic) {
        profilePic.addEventListener('mousemove', shadow);
    }
});

$(window).resize(function() {
    contentHeight();
});