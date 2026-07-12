document.addEventListener('DOMContentLoaded', (event) => {
	console.log("DOM loaded and parsed");

	// Post Preview Images - Zoom in/out onclick --------------->
	const PREVIEW = document.getElementsByClassName("preview");

	for (let i = 0; i < PREVIEW.length; i++) {

		// Disable Draggable Preview Images
		PREVIEW[i].setAttribute('draggable', false);
		console.log("Preview Draggable => false");
			
		// Zoom in/out onclick
		let image = PREVIEW[i].style;
		image.cursor = "zoom-in";

		PREVIEW[i].addEventListener('click', function () {
			if (!image.transform) {
				image.backgroundColor = "#000";
				image.borderRadius = "7px";
				image.cursor = "zoom-out";
				image.transform = "scale(1.5)";
				console.log("Preview Zoomed-in");
			} else {
				image.borderRadius = "";
				image.cursor = "zoom-in";
				image.transform = "";
				console.log("Preview Zoomed-out");
			}
		})
	}


});