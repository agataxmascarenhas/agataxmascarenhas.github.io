window.addEventListener("load", function () {
	setTimeout(function () {
	  // Vai adicionar mais um class chamado mystyle em 0.5s
	  // Significa que vai aplicar um transform: translate(-50%, -50%); em 0.5s no div do popup
		document.querySelector(".header-content").classList.add("mystyle");
	}, 500);
});
