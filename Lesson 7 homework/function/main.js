// В первом варианте мы удаляем 
var man = [{name:'Jhon', age: 25}, {name:'Bob', age: 35}, {name:'Bill', age: 45}];
function remove (arr, ind) {delete arr [ind]; return arr;}
console.log(remove(man,1));
// А во втором мы заменяем елемент массива на undefined и этот елемент существует еще в массиве
var man2 = ['Kurt', 'Michael', 'Orlando'];
function rem (arr, ind) {arr[ind]=undefined; return arr;}
console.log(rem(man2,1));

