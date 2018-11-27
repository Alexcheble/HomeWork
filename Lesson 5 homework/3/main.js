var a = [ 1, 2, 3, 4, 5];

function foo (y) {
	var c = y*2;
	return c;
}
function map (fn, array) {
	var numbers = Array();
	for (var i = 0; i < array.length; i++) {
		numbers.push(fn(array[i]));
	}
	return numbers;
}

console.log(map(foo,a));