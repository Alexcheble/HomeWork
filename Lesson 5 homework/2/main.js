
var characters = [{
		name: 'Jhon',
		age: 24
	},

	{
		name: 'Samantha',
		age: 45
	},

	{
		name: 'Mike',
		age: 54
	}];
function pluck(arr, prop) {
	var ob = [];
	for (var i = 0; i < arr.length; i++) {
			ob.push(arr[i][prop])
		}
    return ob;
}
console.log(pluck(characters,'age'));


