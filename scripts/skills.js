// load case studies JSON into case-studies.html
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
    }
});