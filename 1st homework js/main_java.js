
var color = prompt(' Здравствуйте, какой цвет телефона вы хотите? У нас на выбор есть три цвета: Золотой, Серебряный и Черный. ');
if (color === 'Золотой' ) {
	document.write('<img src="img/gold.png">');
	var memory = prompt(' Сколько гигабайт памяти вы хотите? Можем предложить: 16, 32, 64, 128, 256. ');
if (memory == 16 ) {
	document.write('1000грн');
} 

else if (memory < 16 ) {
	document.write('Золотого телефона с таким количеством памяти нет в продаже.');
} 

else if (memory > 256 ) {
	document.write('Золотого телефона с таким количеством памяти нет в продаже.');
} 

else if (memory == 32) {
	document.write('2000грн');
} 

else if (memory == 64) {
	document.write('4000грн')
} 

else if (memory == 128) {
	document.write('8000грн')
} 

else if (memory == 256) {
	document.write('6000грн')
}
} 
else if (color === 'Черный' ) {
	document.write('<img src="img/black.png">');
	var memory = prompt(' Сколько гигабайт памяти вы хотите? Можем предложить: 16, 32, 64, 128, 256. ');
if (memory == 16 ) {
	document.write('1000грн');
} 

else if (memory < 16 ) {
	document.write('Серебряного телефона с таким количеством памяти нет в продаже.');
} 

else if (memory > 256 ) {
	document.write('Серебряного телефона с таким количеством памяти нет в продаже.');
} 

else if (memory == 32) {
	document.write('2000грн');
} 

else if (memory == 64) {
	document.write('4000грн')
} 

else if (memory == 128) {
	document.write('8000грн')
} 

else if (memory == 256) {
	document.write('6000грн')
}
} 
else if (color === 'Серебряный' ) {
	document.write('<img src="img/silver.png">');
	var memory = prompt(' Сколько гигабайт памяти вы хотите? Можем предложить: 16, 32, 64, 128, 256. ');
if (memory == 16 ) {
	document.write('1000грн');
} 

else if (memory < 16 ) {
	document.write('Черного телефона с таким количеством памяти нет в продаже.');
} 

else if (memory > 256 ) {
	document.write('Черного телефона с таким количеством памяти нет в продаже.');
} 

else if (memory == 32) {
	document.write('2000грн');
} 

else if (memory == 64) {
	document.write('4000грн')
} 

else if (memory == 128) {
	document.write('8000грн')
} 

else if (memory == 256) {
	document.write('6000грн')
}
} 
else {
	document.write('Извините, такого цвета у нас нет в продаже.');
} 




