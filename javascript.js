function getInputValueAsNumber(inputID) {
    const el = document.getElementById(inputID);
    return el && el.value !== "" ? Number(el.value) : null;
}

function createWithHtmlTable(rows, cols, highlight) {
    let string = "<div class='table'>\n";


    for (let row = 1; row <= rows; row++) {
        string += "<div class='row'>\n";
        for (let col = 1; col <= cols; col++) {
            let cellClass = "cell";
            if (highlight && (row === highlight || col === highlight)) {
                cellClass += " highlight";
            }
            string += `<div class='${cellClass}'>${row * col}</div>\n`;
        }
        string += "</div>\n";
    }


    string += "</div>\n";
    document.querySelector("section.container > section#output").innerHTML = string;
}


