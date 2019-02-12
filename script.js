const titleArea = document.getElementById("titleArea");
const guessingColorText = document.getElementById("guessingColorText");
const statusText = document.getElementById("statusText");
const buttonNewColors = document.getElementById("buttonNewColors");
const buttonEasy = document.getElementById("buttonEasy");
const buttonHard = document.getElementById("buttonHard");

var guessingColor = 0;

var hardMode = false;
const colorButtons = 
[
    color1 = document.getElementById("color1"),
    color2 = document.getElementById("color2"),
    color3 = document.getElementById("color3"),
    color4 = document.getElementById("color4"),
    color5 = document.getElementById("color5"),
    color6 = document.getElementById("color6")
];

var gameOver = false;

ResetGame();

buttonNewColors.addEventListener("click", function() {
    statusText.textContent = "";
    ResetGame();
});

buttonEasy.addEventListener("click", function() {
    statusText.textContent = "";
    hardMode = false;
    ResetGame();
});

buttonHard.addEventListener("click", function() {
    statusText.textContent = "";
    hardMode = true;
    ResetGame();
});

for (let i = 0; i < colorButtons.length; i++) {
    const colorButton = colorButtons[i];
    colorButton.addEventListener("click", function()
    {
        if (guessingColor == colorButtons.indexOf(this))
        {
            gameOver = true;

            statusText.textContent = "You got it right";
            titleArea.style.backgroundColor = guessingColorText.textContent;
            buttonNewColors.style.color = guessingColorText.textContent;
            buttonEasy.style.color = guessingColorText.textContent;
            buttonHard.style.color = guessingColorText.textContent;

            let colors = hardMode? 5 : 2;

            for (let j = 0; j <= colors; j++) {    
                colorButtons[j].style.backgroundColor = guessingColorText.textContent;
            }
        }
        else if (!gameOver)
        {
            statusText.textContent = "Try again!";
            this.style.backgroundColor = "black";
        }
    });
}

function ResetGame()
{
    gameOver = false;
    let colors = hardMode? 5 : 2;

    for (let i = 0; i <= colors; i++) {
        const colorButton = colorButtons[i];
        colorButton.style.backgroundColor = Color();
    }
    if (!hardMode)
    {
        colorButtons[3].style.backgroundColor = "black";
        colorButtons[4].style.backgroundColor = "black";
        colorButtons[5].style.backgroundColor = "black";
    }
    
    guessingColor = RandomIntRange(0, colors);
    guessingColorText.textContent = colorButtons[guessingColor].style.backgroundColor;
}

function Color()
{
    const color = {
        r: RandomIntRange(0, 255),
        g: RandomIntRange(0, 255),
        b: RandomIntRange(0, 255)
    };
    return `rgb(${color.r}, ${color.g}, ${color.b})`;
}

function RandomIntRange(min, max)
{
    return Math.round((Math.random() * (max - min)) + min);
}