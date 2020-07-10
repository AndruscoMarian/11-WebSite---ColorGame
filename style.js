var numSquares = 6;
var colors = [];
var pickedColor;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode")

init();

function init(){
    //mode buttons event listeners
    setupModeButtons();
    setupSquares();
    reset();
}

function setupModeButtons(){
    for(i=0; i<modeButtons.length; i++){
        modeButtons[i].addEventListener("click", function(){
            modeButtons[0].classList.remove("selected");
            modeButtons[1].classList.remove("selected");
            this.classList.add("selected");
            this.textContent === "Easy" ? numSquares = 3: numSquares = 6;
            reset();
        })
    }
}

function setupSquares(){
    for(i=0; i<squares.length; i++){
        //add click listenners to squares
        squares[i].addEventListener("click", function(){
                //grab color of the clicked square
               var clickedColor = this.style.backgroundColor;
                //compare color to pickedColor
            if(clickedColor === pickedColor){
                messageDisplay.textContent = "Correct!";
                resetButton.textContent = "Play Again?"
                changeColor(clickedColor);
                h1.style.backgroundColor = clickedColor;
            } else{
                this.style.backgroundColor = "#232323";
                messageDisplay.textContent = "Try Again";
            }
        });
    }
}


function reset(){
    colors = generateRandomColors(numSquares);
    //pick a new random color from array
    pickedColor = pickColor();
    //change colorDisplay to match picked color
    colorDisplay.textContent = pickedColor;
    resetButton.textContent = "New Colors";
    messageDisplay.textContent = "";
    //change colors of squares
    for(i=0; i < squares.length; i++){
        if(colors[i]){
            squares[i].style.display = "block";
            squares[i].style.backgroundColor=colors[i];
        }else{
            squares[i].style.display = "none";
        }
        
    }
    h1.style.backgroundColor = "steelblue"
}

//reset the colors and the correct color that must be selected
resetButton.addEventListener("click", function(){
   reset();
})


//when the correct color is selected make all of them the correct color
function changeColor(color){
    for(i=0; i<squares.length; i++){
        squares[i].style.backgroundColor = color;
    }
}

//pick the correct color random
function pickColor(){
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

//make num=6(in this case) of random colors
function generateRandomColors(num){
    //make an array
    var arr = []
    //repeat num times
    for(i=0; i < num; i++){
        //get radnom color and push into arr
       arr.push(randomColor())
    }
    //returnthat array
    return arr;
}
//generate random string color
function randomColor(){
    //pick a red from 0 - 255
    var r = Math.floor(Math.random() * 256);
    //pick a green from 0 - 255
    var g = Math.floor(Math.random() * 256);
    //pick a blue from 0 - 255
    var b = Math.floor(Math.random() * 256);
    return "rgb("+ r + ", " + g + ", " + b + ")";
}