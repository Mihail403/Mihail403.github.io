'use strict';
let side = document.querySelector('div.sidebar');
function openSidebar() {
	if (side.style.left == "0px") {
		side.style.left = '-175px';
	} else if (side.style.left == "-175px") {
		side.style.left = "0px";
	}
}