
var memory = [{	
  memo: '16',
  price: 50
},

{
  memo: '32',
  price: 100
},

{
  memo: '64',
  price: 200
},

{
  memo: '128',
  price: 400
},

{
  memo: '256',
  price: 800
}];

var color = [

{col: 'черный',
 koef: 10,
 names: 'black' },
 
{col: 'золотой',
 koef: 20,
 names: 'gold' },

{col: 'серебряный',
 koef: 30,
 names: 'silver' }
 ];

var phonecolor; 
var k;
var phonename;

while (true){

	phonecolor = prompt('Какого цвета вы хотите телефон? В наличии есть цвета: черный, золотой и серебряный.');

	for (var i = 0; i < color.length; i++) {
		if (phonecolor === color[i].col){
			k = color[i].koef;
			phonename = color[i].names;
			break;
		}
	}

	if (k !== undefined){
		break;
		}else{
		alert('Данные введены неправильно.');
		}
}

var memories
var expen
while (true){
	
	memories = prompt('Cколько памяти вы хотите? Имеются телефоны на: 32, 64, 128 и 256 гигабайт.');

	for (var i = 0; i < memory.length; i++) {
		if (memories === memory[i].memo){
			expen = memory[i].price;
			break;
		}
	}

	if (expen !== undefined){
		break;
		}else{
		alert('Данные введены неправильно.');
		}
}

document.write('<img src="img/' + phonename + '.png" alt"image" style="margin: auto; display: block; padding-top:100px; padding-bot:50px;"<br><h1 style="text-align:center; color: gray;">Цена ' + (expen + k ) + '$</h1>')