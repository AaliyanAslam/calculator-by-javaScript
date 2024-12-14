let num1 = document.getElementById("num1");
let num2 = document.getElementById("num2");
let add = document.getElementById("add");
let sub = document.getElementById("sub");
let multiply = document.getElementById("multiply");
let divide = document.getElementById("divide");
let ans = document.getElementById("ans");



function add_fun() {
  let result = parseInt(num1.value) + parseInt(num2.value);
  ans.innerHTML = result;
}

add.onclick = add_fun;

function sub_fun() {
  let result1 = parseInt(num1.value) - parseInt(num2.value);
  ans.innerHTML = result1;
}

sub.onclick = sub_fun;

function mult() {
  let result2 = parseInt(num1.value) * parseInt(num2.value);
  ans.innerHTML = result2;
}

multiply.onclick = mult;

function divi() {
  let result3 = parseInt(num1.value) / parseInt(num2.value);
  ans.innerHTML = result3;
}

divide.onclick = divi;

