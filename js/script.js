'use strict';
let sec_7IB = document.querySelectorAll('.sec_7__block__inblock');
let sec_7B = document.querySelectorAll('.sec-7__block');
let sec_8 = document.querySelectorAll('.sec-8__wrapper__block__inblock > .sec-8__block__slider');
headerMenu.onclick = () => {
	headAside.style.left = "0px";
	removes.style.display = "none";
	sec_1.style.minHeight = "calc(100% - 76px)";
	sec_1__wrapper.style.minHeight = "calc(100% - 76px)";
	sec_1__wrapper__block.style.margin = "36.5px auto 0px auto";
	overlayBlack.style = "width: 100%; height: 100%; opacity: 1;";
};
overlayBlack.onclick = () => {
	if (removes.style.display == "none") {
		headAside.style.left = "-250px";
		removes.style.display = "";
		sec_1__wrapper__block.style.margin = "60px auto";
		sec_1.style.minHeight = "728px";
		sec_1__wrapper.style.minHeight = "728px";
		overlayBlack.style = "width: 0; height: 0; opacity: 0;";
	}
};
aside__btn.onclick = () => {
	headAside.style.left = "-250px";
	removes.style.display = "";
	sec_1__wrapper__block.style.margin = "60px auto";
	sec_1.style.minHeight = "728px";
	sec_1__wrapper.style.minHeight = "728px";
	overlayBlack.style = "width: 0; height: 0; opacity: 0;";
};
sec_7__block_1.onclick = () => {
	sec_7__block_2.style.backgroundColor = "#fff";
	sec_7__block_3.style.backgroundColor = "#fff";
	sec_7__block_1.style.backgroundColor = "#E5E5E5";
	sec_7__block__inblock_3.style.display = "none";
	sec_7__block__inblock_2.style.display = "none";
	sec_7__block__inblock_1.style.display = "block";
};
sec_7__block_2.onclick = () => {
	sec_7__block_1.style.backgroundColor = "#fff";
	sec_7__block_3.style.backgroundColor = "#fff";
	sec_7__block_2.style.backgroundColor = "#E5E5E5";
	sec_7__block__inblock_1.style.display = "none";
	sec_7__block__inblock_3.style.display = "none";
	sec_7__block__inblock_2.style.display = "block";
};
sec_7__block_3.onclick = () => {
	sec_7__block_1.style.backgroundColor = "#fff";
	sec_7__block_2.style.backgroundColor = "#fff";
	sec_7__block_3.style.backgroundColor = "#E5E5E5";
	sec_7__block__inblock_1.style.display = "none";
	sec_7__block__inblock_2.style.display = "none";
	sec_7__block__inblock_3.style.display = "block";
};
sec8BtnLeft.onclick = () => {
	for (let i = 0; i < sec_8.length; i++) {
		if (sec_8[i].style.display == 'block') {
			sec_8[i].style.display = 'none';
		} else if (sec_8[i].style.display == 'none') {
			sec_8[i].style.display = 'block';
		}
	}
};
sec8BtnRight.onclick = sec8BtnLeft.onclick;