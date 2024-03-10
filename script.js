const ruleBtn = document.querySelector(".rules");
const crossBtn = document.querySelector(".cross-btn");
const rulesDiv = document.querySelector("#game-rules");

ruleBtn.addEventListener("click", changeDisplay("flex"));
crossBtn.addEventListener("click", changeDisplay("none"));

function changeDisplay(displayValue) {
	return () => {
		rulesDiv.style.display = displayValue;
	};
}
