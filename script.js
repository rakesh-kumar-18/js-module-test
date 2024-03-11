const ruleBtn = document.querySelector("#rules");
const crossBtn = document.querySelector(".cross-btn");
const headingDiv = document.querySelector("#heading-div");
const rulesDiv = document.querySelector("#game-rules");
const handBtn = document.querySelectorAll(".hand");
const handsDiv = document.querySelector("#hands");
const resDiv = document.querySelector("#result");
const userChoice = document.querySelector("#user-choice img");
const compChoice = document.querySelector("#comp-choice img");
const result = document.querySelector("#result-text h1");
const subHeading = document.querySelector("#result-text h4");
const playBtn = document.querySelectorAll(".play");
const nextBtn = document.querySelector("#next");
const winDiv = document.querySelector("#win-page");

ruleBtn.addEventListener("click", changeDisplay("flex"));
crossBtn.addEventListener("click", changeDisplay("none"));

function changeDisplay(displayValue) {
	return () => {
		rulesDiv.style.display = displayValue;
	};
}

const resText = (userHand, compHand) => {
	const res = userHand + compHand;
	switch (res) {
		case "rockrock":
			return "TIE UP";

		case "rockpaper":
			return "YOU LOST";

		case "rockscissor":
			return "YOU WIN";

		case "paperpaper":
			return "TIE UP";

		case "paperrock":
			return "YOU WIN";

		case "paperscissor":
			return "YOU LOST";

		case "scissorscissor":
			return "TIE UP";

		case "scissorrock":
			return "YOU LOST";

		default:
			return "YOU WIN";
	}
};

function displayResult(userHand, compHand) {
	const text = resText(userHand, compHand);
	handsDiv.style.display = "none";
	resDiv.style.display = "flex";
	userChoice.src = `./assets/${userHand}.png`;
	userChoice.id = userHand;
	compChoice.src = `./assets/${compHand}.png`;
	compChoice.id = compHand;
	result.innerText = text;
	if (text === "TIE UP") {
		subHeading.style.display = "none";
		playBtn.innerText = "REPLAY";
		result.style.marginBottom = "20px";
	} else if (text === "YOU WIN") {
		ruleBtn.style.right = "110px";
		nextBtn.style.display = "inline";
	}
}

const choices = ["rock", "paper", "scissor"];

const comp = () => {
	const randomNo = Math.floor(Math.random() * 3);
	return choices[randomNo];
};

handBtn.forEach((hand) => {
	hand.addEventListener("click", () => {
		displayResult(hand.id, comp());
	});
});

playBtn.forEach((play) => {
	play.addEventListener("click", () => {
		headingDiv.style.display = "flex";
		handsDiv.style.display = "flex";
		winDiv.style.display = "none";
		resDiv.style.display = "none";
		subHeading.style.display = "block";
		playBtn.innerText = "PLAY AGAIN";
		result.style.marginBottom = "0";
		ruleBtn.style.right = "20px";
		nextBtn.style.display = "none";
	});
});

nextBtn.addEventListener("click", () => {
	headingDiv.style.display = "none";
	resDiv.style.display = "none";
	winDiv.style.display = "block";
	ruleBtn.style.right = "20px";
	nextBtn.style.display = "none";
});
