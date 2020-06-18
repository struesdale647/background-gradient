var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.querySelector("body");
var rand1 = document.getElementById("button1");
var rand2 = document.getElementById("button2");
var randBoth = document.getElementById("buttonboth");
var swap = document.getElementById("buttonswap");
var radio = document.querySelectorAll(".radio");
var gradientType = "linear-gradient(to right, "


function setGradient () {
	body.style.background = gradientType + color1.value + " , " + color2.value + ")";
	css.textContent = body.style.background + ";";
};

function randomRGB () {
	var randomColor = "#000000".replace(/0/g,function(){return (~~(Math.random()*16)).toString(16);});
	return randomColor
};



// Inital Settings
color1.value = "#17e081";
color2.value = "#4ac3e9";
setGradient(color1.value, color2.value);

//Event Listeners Below here
color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

rand1.addEventListener("click", function(){
	color1.value = randomRGB();
	setGradient();
});

rand2.addEventListener("click", function(){
	color2.value = randomRGB();
	setGradient();
});

randBoth.addEventListener("click", function(){
	color1.value = randomRGB();
	color2.value = randomRGB();
	setGradient();
});

swap.addEventListener("click", function(){
	var temp = color1.value;
	color1.value = color2.value;
	color2.value = temp;
	setGradient();
});

radio[0].addEventListener("click", function(){
	rand1.textContent = "Random Left";
	rand2.textContent = "Random Right";
	gradientType = "linear-gradient(to right, ";
	setGradient();
});

radio[1].addEventListener("click", function(){
	rand1.textContent = "Random Top";
	rand2.textContent = "Random Bottom";
	gradientType = "linear-gradient(to bottom, ";
	setGradient();
});

radio[2].addEventListener("click", function(){
	rand1.textContent = "Random Centre";
	rand2.textContent = "Random Edge";
	gradientType = "radial-gradient(";
	setGradient();
});

radio[3].addEventListener("click", function(){
	rand1.textContent = "Random Top";
	rand2.textContent = "Random Bottom";
	gradientType = "linear-gradient(to right bottom, ";
	setGradient();
});

radio[4].addEventListener("click", function(){
	rand1.textContent = "Random Top";
	rand2.textContent = "Random Bottom";
	gradientType = "linear-gradient(to left bottom, ";
	setGradient();
});