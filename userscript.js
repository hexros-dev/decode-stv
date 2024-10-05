// ==UserScript==
// @name        Decode Text
// @namespace   Violentmonkey Scripts
// @match       *://sangtacviet.vip/truyen/*/*/*/*/
// @grant       none
// @version     1.1
// @author      Hexros Raymond
// @description Đôi lúc chữ trong truyện sẽ bị mã hoá, khi đó userscript này phát huy tác dụng.
// ==/UserScript==

(function () {
	'use strict';
	const decodeMap = {
		ҡ: 'A',
		Ҡ: 'B',
		ғ: 'C',
		Җ: 'D',
		Ҵ: 'E',
		Ҫ: 'F',
		Ң: 'G',
		Ҕ: 'H',
		ҭ: 'I',
		Ҭ: 'J',
		ҵ: 'K',
		ұ: 'L',
		Қ: 'M',
		Ҍ: 'N',
		Ҝ: 'O',
		Ґ: 'P',
		Ҥ: 'Q',
		ҷ: 'R',
		Ҹ: 'S',
		Ҟ: 'T',
		Ҋ: 'U',
		ҧ: 'V',
		ҝ: 'W',
		ү: 'X',
		ҫ: 'Y',
		ң: 'Z',
		Ҷ: 'a',
		ҹ: 'b',
		қ: 'c',
		Ҏ: 'd',
		ҍ: 'e',
		ҩ: 'f',
		ҕ: 'g',
		ҳ: 'h',
		i: 'i',
		Ғ: 'j',
		Ү: 'k',
		l: 'l',
		ҙ: 'm',
		Ҙ: 'n',
		Ҩ: 'o',
		p: 'p',
		Ҧ: 'q',
		r: 'r',
		Ұ: 's',
		t: 't',
		ҏ: 'u',
		ҥ: 'v',
		ҟ: 'w',
		Ҳ: 'x',
		җ: 'y',
		ґ: 'z',
	};

	function decodeString(str) {
		let text = '';
		str.split('').forEach((char) => {
			text += decodeMap[char] || char;
		});
		return text;
	}

	window.onload = function () {
		setInterval(() => {
			const iElements = document.querySelectorAll('i');
			iElements.forEach((element) => {
				const encodedText = element.textContent;
				const decodedText = decodeString(encodedText);
				element.textContent = decodedText;
			});
		}, 2000);
	};
})();
