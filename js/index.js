window.onload = function () {
	document.body.classList.add("loaded_hiding");
	window.setTimeout(function () {
		preloader.style.display = "none";
		document.body.classList.remove("loaded_hiding");
	}, 500);
};

// const column = document.querySelector(".resume");

// function changeClass() {
// 	column.classList.remove("column__left").add("column__right");
// }

// // Crude way to check that the screen is at least 1024x768
// if (window.matchMedia("(min-width: 768px)").matches) {
// 	changeClass();
// }
