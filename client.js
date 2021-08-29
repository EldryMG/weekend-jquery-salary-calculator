// On lack of pushes to GitHub.  Ran into a problem, probably didn't fork from my repo, but from
// Prime's.  In future assignments, I plan to get a more appropriate number of pushes to 
// GitHub.
const monthlyCosts = []
const grandTotal = `<bold>Total Costs:</bold>`;

$(document).ready(readyNow);

function readyNow() {
    console.log('DOM ready')
    $(`#submit-button`).on(`click`, appendNameToTable);
    $(`#submit-button`).on(`click`, addition);
    $(`#employees-table-body`).on(`click`, `.delete-button`, removeTable)
}

//Function to add new values to the table
function appendNameToTable() {
    let name = $(`#first-name`).val();
    let surname = $(`#surname`).val();
    let ID = $(`#ID`).val();
    let title = $(`#title`).val();
    let salary = $(`#salary`).val();
    $(`#employees-table-body`).append(`
        <tr>
            <td>${name}</td>
            <td>${surname}</td>
            <td>${ID}</td>
            <td>${title}</td>
            <td>${salary}</td>
            <td><button class="delete-button">Delete</button> </td>
        <tr>
    `)

}

// Function that adds salaries.
// Considering what we've learned, this one
// Looks overly complicated.
let sum = 0
function addition() {
    $(`.total`).empty();
    monthlyCosts.splice(0,monthlyCosts.length)
    //Added splice function since I can't get .empty() to work.
    let salary = parseInt($(`#salary`).val());
    if (salary) {
        monthlyCosts.push(salary)
    } for (let i = 0; i < monthlyCosts.length; i++) {
    let thisGuysSalary = parseInt(monthlyCosts[i])
    $(`.total`).html(grandTotal);
    sum += thisGuysSalary
    $(`.total`).append(`${sum.toFixed(2)}`)
    } if (sum > 20000){
        //I used .css here instead of the way it was shown on the Weather table,
        //I just couldn't get it to work.
        $(`.total`).css(`background-color`, `crimson`);
    }
}


function removeTable() {
    let thisTable = $(this).parent().parent();
    thisTable.remove();
}

