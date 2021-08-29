
const monthlyCosts = []
const grandTotal = `<bold>Total Costs:</bold>`;
let testing = "testing now"

$(document).ready(readyNow);

function readyNow() {
    console.log('DOM ready')
    $(`#submit-button`).on(`click`, appendNameToTable);
    $(`#submit-button`).on(`click`, addition);
    $(`#employees-table-body`).on(`click`, `.delete-button`, removeTable)
    $(`.total`).html(grandTotal);
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
    sum += thisGuysSalary
    $(`.total`).append(`${sum}`)
    } if (sum > 20000){
        $(`.total`).css(`background-color`, `crimson`)
    }
}


function removeTable() {
    let thisTable = $(this).parent().parent();
    thisTable.remove();
}

