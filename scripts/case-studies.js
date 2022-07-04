// load case studies JSON into case-studies.html
$.getJSON("../../json/case-studies.json", function(json) {
    var caseStudies = json['caseStudies'];

    for (let i in caseStudies) {
        let caseStudy = caseStudies[i];
        // create tools used string
        let toolsUsed = caseStudy.tools.join(', ');
        

        $('#case-studies').append(
            $("<div class='card-large'>"+
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