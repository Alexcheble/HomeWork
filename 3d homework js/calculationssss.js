
function calculation () {
  var a;
  var b;
  var oper;
  var c;
  var t
  a = prompt('Введите первое число.', 0);
  b = prompt('Введите второе число.', 0);
  oper = prompt('Введите знак: +, -, *, /.');
  if (oper === '+') {
     c = Number(a) + Number(b);
  }
  else if (oper === '-') {
     c = Number(a) - Number(b);
  }
  else if (oper === '*') {
     c = Number(a) * Number(b);
  }
  else if (oper === '/') {
     c =  Number(a) / Number(b);
  }
  else if (oper =! null) { c = "Неверно введены данные."}
  else if (oper =! undefined) { c = "Неверно введены данные."}
 
  return c;
}
document.write(calculation())


