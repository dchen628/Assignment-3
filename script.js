// Declare global variables
let numRows = 2;
let numCols = 3;
let colorSelected;
let newCell;
let Row;

// Add a row
function addR() {
    if(numCols == 0 && numRows == 0)
    {
        const tab = document.getElementById('grid');
        Row = tab.insertRow(-1);
        newCell = Row.insertCell(-1);
        newCell.addEventListener('click', function() {color(this);});
        numRows++;
        numCols++;
    }
    else
    {
        const tab = document.getElementById('grid');
        Row = tab.insertRow(-1);
        for(let i = 0; i < tab.rows[0].cells.length; i++)
        {
            newCell = Row.insertCell(-1);
            newCell.addEventListener('click', function() {color(this);});
        }
        numRows++;
    }
}

// Add a column
function addC() {
    alert("Clicked Add Col"); // Replace this line with your code.
}

// Remove a row
function removeR() {
    alert("Clicked Remove Row"); // Replace this line with your code.
}

// Remove a column
function removeC() {
    alert("Clicked Remove Col"); // Replace this line with your code.
}

// Set global variable for selected color
function selectColor(){
    colorSelected = document.getElementById("selectedColorId").value;
    console.log(colorSelected);
}

// Fill all uncolored cells
function fillU(){
    alert("Clicked Fill All Uncolored"); // Replace this line with your code.
}

// Fill all cells
function fillAll(){
    alert("Clicked Fill All"); // Replace this line with your code.
}

// Clear all cells
function clearAll(){
    alert("Clicked Clear All"); // Replace this line with your code.
}