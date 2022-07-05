// load case studies JSON into index.html
$(document).ready(function () {
    $.getJSON("../../json/case-studies.json", function(json) {
        var caseStudies = json['caseStudies'];

        for (let i in caseStudies) {
            if (i == 2) {
                break;
            }
            else {
                let caseStudy = caseStudies[i];
                // create tools used string
                let toolsUsed = caseStudy.tools.join(', ');

                $('#latest-work').append(
                    $("<div class='card-small'><img style='object-position: 0% 30%' src='"+
                    caseStudy.img +"' alt='" + caseStudy.imgAlt + "'><div class='card-small-contents'><h1>"+
                    caseStudy.name + "</h1><p>" + caseStudy.summary + "</p><br><p><small>TOOLS USED: " +
                    toolsUsed + "</small></p></div><a target='_blank' rel='noopener noreferrer' class='cta-link' href='" + caseStudy.url + 
                    "'>CONTINUE READING <span aria-hidden='true' class='fa-solid fa-chevron-right'></span></a></div>")
                );
            }
        }
    });
});