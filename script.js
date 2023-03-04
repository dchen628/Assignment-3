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
    if(numCols == 0 && numRows == 0)
    {
        const tab = document.getElementById('grid');
        Row = tab.insertRow(-1);
        newCell = Row.insertCell(-1);
        newCell.addEventListener('click', function() {color(this);});
        numCols++;
        numRows++;
    }
    else
    {
        const tab = document.getElementById('grid');
        for(let i = 0; i < tab.rows.length; i++)
        {
            newCell = tab.rows[i].insertCell(-1);
            newCell.addEventListener('click', function() {color(this);});
        }
        numCols++;
    }
}

// Remove a row
function removeR() {
    if(numRows == 0)
        return;
    const tab = document.getElementById('grid');
    Row = tab.deleteRow(-1);
    numRows--;
    if(numRows == 0)
    {
        numCols = 0;
    }
}

// Remove a column
function removeC() {
    if(numCols == 0)
        return;
    const tab = document.getElementById('grid');
    for(let i = 0; i < tab.rows.length; i++)
    {
        newCell = tab.rows[i].deleteCell(-1);
    }
    numCols--;
    if(numCols == 0)
    {
        numRows = 0;
        while(tab.rows.length != 0)
        {
            tab.deleteRow(-1);
        }
    }
}

// Set global variable for selected color
function selectColor(){
    colorSelected = document.getElementById("selectedColorId").value;
    if(colorSelected == "SELECT")
        return;
    return colorSelected;
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