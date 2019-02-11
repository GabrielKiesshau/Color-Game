var titleArea = document.getElementById("titleArea");
var guessingColorText = document.getElementById("guessingColorText");
var statusText = document.getElementById("statusText");
var buttonNewColors = document.getElementById("buttonNewColors");
var buttonEasy = document.getElementById("buttonEasy");
var buttonHard = document.getElementById("buttonHard");

var guessingColor = 0;

var colors = 3;
var colorButtons = 
[
    color1 = document.getElementById("color1"),
    color2 = document.getElementById("color2"),
    color3 = document.getElementById("color3"),
    color4 = document.getElementById("color4"),
    color5 = document.getElementById("color5"),
    color6 = document.getElementById("color6")
];

ResetGame();

buttonNewColors.addEventListener("click", function() {
    statusText.textContent = "";
    ResetGame();
});

buttonEasy.addEventListener("click", function() {
    statusText.textContent = "";
    colors = 3;
    ResetGame();
});

buttonHard.addEventListener("click", function() {
    statusText.textContent = "";
    colors = 6;
    ResetGame();
});

for (let i = 0; i < colorButtons.length; i++) {
    const colorButton = colorButtons[i];
    colorButton.addEventListener("click", function()
    {
        if (guessingColor == colorButtons.indexOf(this))
        {
            statusText.textContent = "You got it right";
            titleArea.style.backgroundColor = guessingColorText.textContent;
        }
        else
        {
            statusText.textContent = "Try again!";
            this.style.display = "none";
        }
    });
}

function ResetGame()
{
    for (let i = 0; i < colorButtons.length; i++) {
        const colorButton = colorButtons[i];
        colorButton.style.backgroundColor = Color();
    }

    guessingColor = RandomIntRange(0, (colors-1));
    guessingColorText.textContent = colorButtons[guessingColor].style.backgroundColor;

    console.log(guessingColor);
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