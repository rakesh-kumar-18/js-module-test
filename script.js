const ruleBtn = document.querySelector("#rules");
const crossBtn = document.querySelector(".cross-btn");
const headingDiv = document.querySelector("#heading-div");
const rulesDiv = document.querySelector("#game-rules");
const handBtn = document.querySelectorAll("#hands .hand");
const handsDiv = document.querySelector("#hands");
const resDiv = document.querySelector("#result");
const userChoice = document.querySelector("#user-choice img");
const compChoice = document.querySelector("#comp-choice img");
const result = document.querySelector("#result-text h1");
const subHeading = document.querySelector("#result-text h4");
const playBtn = document.querySelectorAll(".play");
const nextBtn = document.querySelector("#next");
const winDiv = document.querySelector("#win-page");
const compScoreEle = document.querySelector("#comp-score");
const userScoreEle = document.querySelector("#user-score");

let compScore = localStorage.getItem("computer") ?? 0;
let userScore = localStorage.getItem("user") ?? 0;

localStorage.setItem("computer", compScore);
localStorage.setItem("user", userScore);

compScoreEle.innerText = compScore;
userScoreEle.innerText = userScore;

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
		playBtn[0].innerText = "REPLAY";
		result.style.marginBottom = "20px";
	} else if (text === "YOU WIN") {
		ruleBtn.style.right = "110px";
		nextBtn.style.display = "inline";
		userScore = parseInt(localStorage.getItem("user")) + 1;
		localStorage.setItem("user", userScore);
		userScoreEle.innerText = userScore;
		userChoice.classList.add("res-hand");
	} else {
		compScore = parseInt(localStorage.getItem("computer")) + 1;
		localStorage.setItem("computer", compScore);
		compScoreEle.innerText = compScore;
		compChoice.classList.add("res-hand");
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
		play.innerText = "PLAY AGAIN";
		result.style.marginBottom = "0";
		ruleBtn.style.right = "20px";
		nextBtn.style.display = "none";
		userChoice.classList.remove("res-hand");
		compChoice.classList.remove("res-hand");
	});
});

nextBtn.addEventListener("click", () => {
	headingDiv.style.display = "none";
	resDiv.style.display = "none";
	winDiv.style.display = "block";
	ruleBtn.style.right = "20px";
	nextBtn.style.display = "none";
});
