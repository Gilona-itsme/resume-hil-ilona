window.onload = function () {
	document.body.classList.add("loaded_hiding");
	window.setTimeout(function () {
		preloader.style.display = "none";
		document.body.classList.remove("loaded_hiding");
	}, 500);
};
