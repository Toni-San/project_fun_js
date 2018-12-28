'use strict';

/*Взаимодействие с пользователем: alert, prompt, confirm*/

/*var years = prompt("Сколько вам лет?");
alert(years);*/

/*var years = prompt('Сколько вам лет?', 100);
alert('Вам ' + years + ' лет!')*/

/*var isAdmin = confirm("Вы - администратор?");
alert( isAdmin );*/

/*var name = prompt("Как вас зовут?", "");
alert("Ваше имя " + name + "Верно?");*/

/*Условные операторы: if, '?'*/

/*var year = prompt('В каком году появилась спецификация ECMA-262 5.1?', '');
if (year != 2011){
	alert( 'А вот и неправильно!' );
}*/

/*var year = prompt('Введите год появления стандарта ECMA-262 5.1', '');

if (year == 2011) {
  alert( 'Да вы знаток!' );
} else {
  alert( 'А вот и неправильно!' ); // любое значение, кроме 2011
}*/
/*var question = prompt("«Каково «официальное» название JavaScript?»", "");
if (question == "«ECMAScript»") {
	alert("«Верно!»");
}else {
	alert("«Не знаете? «ECMAScript»!»");
}*/
/*var value = prompt("Введите значение!", "");
if (value > 0) {
	alert ( 1 );
} else if (value < 0) {
	alert ( -1 );
} else {
	alert ( 0 );
}*/

/*var userName = prompt('Кто пришёл?', '');

if (userName == 'Админ') {

  var pass = prompt('Пароль?', '');

  if (pass == 'Чёрный Властелин') {
    alert( 'Добро пожаловать!' );
  } else if (pass == null) { // (*)
    alert( 'Вход отменён' );
  } else {
    alert( 'Пароль неверен' );
  }

} else if (userName == null) { // (**)
  alert( 'Вход отменён' );

} else {

  alert( 'Я вас не знаю' );

}*/
 
//не работает
/*var age = prompt("Ваш возраст", "");
if (age > "14" && age < "90") {
	alert("Верно");
} else {
	alert("Не верно");
}*/

/*var i = 0;
while (i < 3) {
  alert( i );
  i++;
}*/
/*
for (var i = 2; i <= 10; i++) {
  if (i % 2 == 0) {
    alert( i );
  }
}
*/
/*
var i = 0;
while (i < 3) {
  alert( "номер " + i + "!" );
  i++;
}
*/
/*
var num;

do {
  num = prompt("Введите число больше 100?", 0);
} while (num <= 100 && num != null);
*/
/*
nextPrime:
  for (var i = 2; i <= 10; i++) {

    for (var j = 2; j < i; j++) {
      if (i % j == 0) continue nextPrime;
    }

    alert( i ); // простое
  }
*/
/*var age = prompt("Введите число", "");
if (age >= 14 && age <= 90) {
	alert("Верно");
} else {
	alert ("No");
}*/
 /*
 var value = prompt("Каково «официальное» название JavaScript?","");
 if (value == "ECMAScript") {
 	alert("Верно!");
 } else {
 	alert ("Не знаете?«ECMAScript»!");
 }
 */
 /*
  var value = prompt("Введите значение!","");
  if (value > 0) {
  	alert( 1 );
  } else if (value < 0) {
  	alert( -1 );
  } else {
  	alert( 0 );
  }
*/
/*
var logIn = prompt("Введите логин","");

console.log(logIn);

if (logIn == "Админ") {
		var password = prompt("Введите пароль","");
		if (password == "Чёрный Властелин") {
			alert("Добро пожаловать!");
		} else if (password != "Чёрный Властелин") {
			alert("Пароль неверен");
		} else {
			alert("Вход отменён");
		};
} else if ( logIn != "Админ" || logIn) {
		alert("Я вас не знаю");
} else {
		alert("Вход отменён");
};
*/
/*
var userName = prompt('Кто пришёл?', '');

if (userName == 'Админ') {

  var pass = prompt('Пароль?', '');

  if (pass == 'Чёрный Властелин') {
    alert( 'Добро пожаловать!' );
  } else if (pass == null) { // (*)
    alert( 'Вход отменён' );
  } else {
    alert( 'Пароль неверен' );
  }

} else if (userName == null) { // (**)
  alert( 'Вход отменён' );

} else {

  alert( 'Я вас не знаю' );

}
*/
