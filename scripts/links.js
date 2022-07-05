// load links & urls JSON
$(document).ready(function () {
    $.getJSON("../../json/links.json", function(json) {
        // setup links
        $('.linkedin').attr('href', json.linkedin);
        $('.dribbble').attr('href', json.dribbble);
        $('.github').attr('href', json.github);
        $('.email').attr('href', 'mailto: ' + json.email);
        $('.resume').attr('href', json.resume);

        if ($('#location')) {
            $('#location').append(json.location);
        }
    });
});