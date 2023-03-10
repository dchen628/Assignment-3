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
    const tab = document.getElementById('grid');
    for(let i = 0; i < numRows; i++)
    {
        for(let j = 0; j < numCols; j++)
        {
            if(tab.rows[i].cells[j].hasAttribute("style"))
            {
                continue;
            }
            else
            {
                tab.rows[i].cells[j].style.backgroundColor = selectColor();
            }
        }
    }
}

// Fill all cells
function fillAll(){
    const tab = document.getElementById('grid');
    for(let i = 0; i < numRows; i++)
    {
        for(let j = 0; j < numCols; j++)
        {
            tab.rows[i].cells[j].style.backgroundColor = selectColor();
        }
    }
}

// Clear all cells
function clearAll(){
    const tab = document.getElementById('grid');
    for(let i = 0; i < numRows; i++)
    {
        for(let j = 0; j < numCols; j++)
        {
            tab.rows[i].cells[j].removeAttribute("style");
        }
    }
}

function color(cell){
    cell.style.backgroundColor = selectColor();
}