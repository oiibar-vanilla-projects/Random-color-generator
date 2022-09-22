const CONTAINER = document.querySelector("#container");

const displayGrid = () => {
	for (let i = 0; i < 16; i++) {
		const colorContainer = document.createElement("div");
		const colorTitle = document.createElement("h1");
		colorTitle.classList.add('color-title');
		colorContainer.classList.add("color-container");
		colorContainer.setAttribute('id', `l${i}`);
		colorContainer.appendChild(colorTitle);
		CONTAINER.appendChild(colorContainer);
	}
}
const generateRandomColor = () => {
	const hexadecimal = "0123456789ABCDEF";
	let randomColor = "";
	for (let i = 0; i < 6; i++) {
		const randomChar = Math.floor(Math.random() * hexadecimal.length);
		randomColor += hexadecimal[randomChar];
	}
	return `#${randomColor}`;
}
const setBackgroundColor = () => {
	for (let i = 0; i < 16; i++) {
		const randomColor = generateRandomColor();
		const currentEl = document.getElementById(`l${i}`);
		currentEl.style.backgroundColor = randomColor;
		const currenColorTitle = document.querySelector(`#l${i} h1`);
		currenColorTitle.innerText = randomColor;
	}
}

displayGrid();
generateRandomColor();
setBackgroundColor();