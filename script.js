// DRY = Don't Repeat Yourself

const css = document.querySelector("h3");
const [color1, color2, color3] = document.querySelectorAll(".color")
const body = document.querySelector("#gradient");
const random = document.querySelector(".btn-generate");


setGradient = () => {
	body.style.background = _linearGradient();
	css.textContent = `${body.style.background};`;
}


_linearGradient = () => {
	return `linear-gradient(to right, ${color1.value}, ${color2.value}, ${color3.value})`;
}


// function getRandomColor () {
// 	var letters = '0123456789ABCDEF';
// 	var color = '#';
// 	for (var i = 0; i < 6; i++) {
// 	  color += letters[Math.floor(Math.random() * 16)];
// 	}
// 	return color;
// }

const getRandomColor = () => {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};


// function randomColors(){
// 	color1.value = getRandomColor();
// 	color2.value = getRandomColor();
// 	color3.value = getRandomColor();
// 	setGradient();
// }

const randomColors = () => {
  color1.value = getRandomColor();
  color2.value = getRandomColor();
  color3.value = getRandomColor();
  setGradient();
};


color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);
color3.addEventListener("input", setGradient);
window.addEventListener("load", setGradient);
random.addEventListener("click", randomColors);
