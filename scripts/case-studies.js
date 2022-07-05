var allStudies = [];
var currentStudies = [];

// resize background
function contentHeight() {
    // get the height of header, footer, and main content to set the height of the background
    var headerHei = $(".primary-navigation").outerHeight() + $(".banner").outerHeight(),
        footerHei = $("footer").outerHeight(),
        contentHei = $("#main-content").outerHeight();
    $(".background-line").css("min-height", headerHei + footerHei + contentHei);
}

// remove all case studies
function clearCaseStudies() {
    for (let i in currentStudies) {
        let id = '#' + currentStudies[i].id;
        $(id).remove();
    }
}

// append a case study
function addCaseStudy(caseStudy) {
    let toolsUsed = caseStudy.tools.join(', '); 
    $('#case-studies').append(
        $("<div class='card-large' id='"+ caseStudy.id +"'>"+
        "<img src='"+ caseStudy.img +"' alt='"+ caseStudy.imgAlt +"'>"+
        "<div class='card-large-contents'>" +
        "<h1>" + caseStudy.name + "</h1>" +
        "<p>" + caseStudy.summary + "</p>" +
        "<p class='tools-used'><small>TOOLS USED: " + toolsUsed + "</small></p>" +
        "<div class='text-align-center'><a target='_blank' rel='noopener noreferrer' class='cta-link btn-default' href='"
        + caseStudy.url +"'>READ MORE</a>" +
        "</div></div></div>")
    );
}

function updateCaseStudies() {
    console.log('update');
    clearCaseStudies();

    let inputVal = $('#case-study-search').val();
    for (let i in allStudies) {
        let current = allStudies[i];
        for (let tagsIndex in current.tags) {
            if (current.tags[tagsIndex].toLowerCase().includes(inputVal.toLowerCase())) {
                addCaseStudy(current);
                break;
            }
        }
    }
    contentHeight();
}

$(document).ready(function () {
    // SETUP: load case studies JSON into case-studies.html
    $.getJSON("../../json/case-studies.json", function(json) {
        var caseStudies = json['caseStudies'];

        for (let i in caseStudies) {
            let caseStudy = caseStudies[i];
            allStudies.push(caseStudy);
            currentStudies.push(caseStudy);
            // create tools used string
            let toolsUsed = caseStudy.tools.join(', ');
            

            $('#case-studies').append(
                $("<div class='card-large' id='"+ caseStudy.id +"'>"+
                "<img src='"+ caseStudy.img +"' alt='"+ caseStudy.imgAlt +"'>"+
                "<div class='card-large-contents'>" +
                "<h1>" + caseStudy.name + "</h1>" +
                "<p>" + caseStudy.summary + "</p>" +
                "<p class='tools-used'><small>TOOLS USED: " + toolsUsed + "</small></p>" +
                "<div class='text-align-center'><a target='_blank' rel='noopener noreferrer' class='cta-link btn-default' href='"
                + caseStudy.url +"'>READ MORE</a>" +
                "</div></div></div>")
            );
        }
    });

    $('#case-study-search').keyup(function() {
        updateCaseStudies();
    });

    $('#search-close').on('click', function() {
        $('#case-study-search').val("");
        updateCaseStudies();
    });
});