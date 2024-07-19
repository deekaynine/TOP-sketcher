// create a 16x16 grid using javascript NOT HTML
// you may use create a div named container in your html
// set up a hover effect where grid squares changes color when you pass through it with ur cursor
// create a button to change grid size for example if user inputs 32 the grid will now be 32x32

// create the rows so if input is 16 create 16 divs
// select all the rows and loop over it and create 16 grid elements for each row 
// append the grid elements to their respective row
// loop through all grid elements and add event of hover to change effect

// create button to prompt user for size of grid
// delete grid and replace with new grid with user input size

let defaultBoardSize = 16;
let container = document.querySelector(".container")
let sizeButton = document.querySelector("button")

sizeButton.addEventListener("click", changeGridSize)

createBoard(defaultBoardSize)

// creates a board of num x num size using the user input
// when you hover over each tile it highlights the respective tile
function createBoard(boardSize){
    for(let i=0;i<boardSize;i++){
        let row = document.createElement("div")
        row.className = "row"
        container.appendChild(row)
        }
        
        let rows = document.querySelectorAll(".row")
        
        rows.forEach((row)=>{
            for(let i=0;i<boardSize;i++){
                let box = document.createElement("div")
                box.className = "box"
                box.addEventListener("mouseover", (e)=>{
                    e.target.classList.add("highlighted")
                })
                row.appendChild(box)
            }
        })    
}

function changeGridSize(){
    let userInput = parseInt(prompt("Enter Grid Size (Max is 100): "))
    while(userInput > 100 || userInput < 0 || isNaN(userInput)){
        userInput = parseInt(prompt("Your input is not a number or not in the range of 1 - 100, please enter a number from 1 - 100: "));
        console.log(userInput)
    }

    container.innerHTML = "";
    createBoard(userInput)
    
}
