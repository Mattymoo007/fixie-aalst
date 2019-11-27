$( document ).ready(function() {
    // todo: fetch this data from the database
    const issues = [
        {"description": "flat tyre",
        "class": 'tyre',
        "time": 30,
        "cost": 50},
        {"description": "breaks",
        "class": "breaks",
        "time": 60,
        "cost": 100},
        {"description": "fix my whole bike",
        "class": "whole",
        "time": 180,
        "cost": 200}
    ]
    
    // show the issues as radiobuttons
    let radios = '<div>';
    issues.forEach(issue => {
        radios += `<label for="${issue['class']}"><input type="checkbox" name="issue" value="${issue['class']}">${issue['description']}</label>`;
    });
    radios += '</div>';
    $('#typeBike').after(radios);
    console.log('dit is een test ${issues}');
});