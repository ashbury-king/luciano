
var elements = document.querySelectorAll('.grid-ball--pick3-primary--selected');

if (elements.length > 0) {

    let count = 0;
    let picks = [];
    let pick = "";
    elements.forEach(function (element) {
        var innerHTML = element.innerHTML;
        pick += innerHTML.trim();
        count += 1;
        if (count % 3 === 0) {
            picks.push(pick);
            pick = "";
        }
    });

    console.log([...new Set(picks)]);
} else {
    console.log('No elements found with the specified class.');
}
