function contentHeight() {
    // get the height of header, footer, and main content to set the height of the background
    var headerHei = $(".primary-navigation").outerHeight() + $(".banner").outerHeight(),
        footerHei = $("footer").outerHeight(),
        contentHei = $("#main-content").outerHeight();
    $(".background-line").css("min-height", headerHei + footerHei + contentHei);
}

// load skills JSON into about.html
$(document).ready(function () {
    $.getJSON("../../json/skills.json", function(json) {
        var skillSection = $('#skills');
        var allSkills = json['skills'];

        for (let i in allSkills) {
            let skills = allSkills[i];
            // create skills string
            let skillStrings = ""
            for (let line in skills.lines) {
                let skillString = skills.lines[line].join(', ');
                skillStrings+= "<li>" + skillString + "</li>";
            }

            skillSection.append(
                $("<section><h3>" + skills.title + "</h3><ul>" +
                skillStrings + "</ul></section>")
            );
            contentHeight();
        }
    });
});