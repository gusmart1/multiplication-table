
function getInputValueAsNumber(inputID ) {
    if (document.getElementById(inputID)) {
        if (document.getElementById(inputID).value !== null) {
            return document.getElementById(inputID).value
        }
    }
}

function createWithHtmlTable(rows, cols, highlight) { // method declaration, has two parameters
    let string // define a variable called string
    if (rows && cols) { // if rows and columns were provided
        string = "<div class='table'>\n" // start building the HTML table

        // first "for" loop to build the rows of the table
        for (let row = 1; row <= rows; row++) {

            if (highlight && highlight === row) {
                // if highlight "IS TRUTHY" and its value matches the row
                // we're on, then do this next
                string += "<div class='highlight'>\n"
            } else {
                // otherwise just start a regular HTML row with no class
                string += "<div class='cell'>\n" // start building an HTML row
            }

            // second "for" loop to build the columns of EACH row
            for (let col = 1; col <= cols; col++) {

                if (highlight && highlight === col) {
                    string += "<div class='highlight'>\n"
                } else {
                    string += "<div class='cell'>" // start building a single "cell" or column in the HTML row
                }


                string += row * col // populate the contents of the HTML cell
                string += "</div>\n" // complete the HTML cell
            }
            string += "</div>\n" // complete the HTML row
        }

        string += "</div>\n" // complete the HTML table
    } else { // I guess the method wasn't provided either rows or columns
        string = 'Provide some inputs' // set value of "string" variable to "Provide some inputs"
    }

    document.querySelector("section.container > section#output").innerHTML = string
    // document.getElementById("output").innerHTML = string; // WRITE the string we've just built to an element
    // in the HTML document whose ID is "output"
}