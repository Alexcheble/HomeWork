
var compareObjects = function (o1, o2, key) {
    if (!key) key = 'name';
    return o1[key] === o2[key] ? true : false;
}

var calculate = function (arr,k) {
    var endsumm = 0; var t = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i].hasOwnProperty(k)){
        endsumm = (arr[i][k])+t;
        t = endsumm;
        } 
    }
    return endsumm;
}


// CONSTANTS
var SIZE_SMALL = {
    name: 'small',
    price: 50,
    kk: 20
};
var SIZE_LARGE = {
    name: 'large',
    price: 100,
    kk: 40
};
var STUFFING_CHEESE = {
    name: 'cheese',
    price: 10,
    kk: 20
};
var STUFFING_POTATO = {
    name: 'potato',
    price: 15,
    kk: 10
};
var STUFFING_SALAD = {
    name: 'salad',
    price: 20,
    kk: 5
};
var TOPPING_SPICE = {
    name: 'spice',
    price: 15,
    kk: 0
};
var TOPPING_MAYO = {
    name: 'mayo',
    price: 20,
    kk: 5
};
// !!!!!!!!!

var Hamburger = function (size, stuffing) {
    this._size = size;
    this._stuffing = stuffing;
    this._toppings = [];
}

Hamburger.prototype.getSize = function () {
    return this._size.name;
}

Hamburger.prototype.getStuffing = function () {
    return this._stuffing.name;
}

Hamburger.prototype.getToppings = function () {
    return this._toppings;
}

Hamburger.prototype.getPrice = function () {
    var a = this._size.price; 
    var b = this._stuffing.price; 
    var c = calculate(this._toppings,'price'); 
    var price = a+b+c;
    return price;
}

Hamburger.prototype.getKk = function () {
    var a = this._size.kk; 
    var b = this._stuffing.kk; 
    var c = calculate(this._toppings,'kk'); 
    var kk = a+b+c;
    return kk;
}

Hamburger.prototype.addTopping = function (newTopping) {
    for (var i = 0; i < this._toppings.length; i++) {
        if (compareObjects(newTopping, this._toppings[i])) {
            console.log('Такой топпинг уже есть');
            return false;
        }
    }
    this._toppings.push(newTopping);
    return newTopping;
}

Hamburger.prototype.removeTopping = function (newTopping) {
    for (var i = 0; i < this._toppings.length; i++) {
        if (compareObjects(newTopping, this._toppings[i])) {
            this._toppings.splice(i, 1);
            return newTopping;
        }
    }
    console.log('Такого топпинга вообще нет');
    return false;
}


document.getElementById('Burgervalue').onclick = function getBurgerValue (){
document.getElementById('Burgerprice').innerHTML = '';
document.getElementById('Burgerenergy').innerHTML = '';
var size;
var stuffing;
var topping = [];


if(document.getElementById('Small').checked == true){size = SIZE_SMALL; console.log(size);}
if(document.getElementById('Large').checked == true){size = SIZE_LARGE; console.log(size);}
if(document.getElementById('Cheese').checked == true) {stuffing = STUFFING_CHEESE;console.log(stuffing);}
if(document.getElementById('Salad').checked == true){stuffing = STUFFING_SALAD;console.log(stuffing);}
if(document.getElementById('Potato').checked == true) {stuffing = STUFFING_POTATO;console.log(stuffing);}
    var burger = new Hamburger(size,stuffing);
console.log(burger.getSize());
console.log(burger.getStuffing());

var Top = document.getElementById('Topping').getElementsByTagName('input');
for (i = 0; i < Top.length; i++){
    if (Top[i].checked == true){
        var newTopping = Top[i];
        console.log(newTopping);
    burger.addTopping(newTopping);
    console.log(burger.addTopping(newTopping));
    }
}
burger.getToppings();
console.log(burger.getPrice());
console.log(burger.getKk());
document.getElementById('Burgerprice').innerHTML = burger.getPrice();
document.getElementById('Burgerenergy').innerHTML = burger.getKk();
}