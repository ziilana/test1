
	var color1 = document.getElementById("color1");
	var color2 = document.getElementById("color2");
	var h3 = document.querySelector("h3");
	var body = document.querySelector("body");

	function changeBackground() {
		body.style.background = "linear-gradient(to right, "
								 + color1.value 
								 + ", " 
								 + color2.value 
								 + ")";
		h3.textContent = body.style.background + ";"
	}

	color1.addEventListener("input", changeBackground)

	color2.addEventListener("input", changeBackground)

