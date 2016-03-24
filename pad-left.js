let padLeft = function padLeft(str, char, len) {
	let strArr = str.split('');

	while(len) {
		strArr.unshift(char);
		len--;
	}

	return strArr.join('');
}
