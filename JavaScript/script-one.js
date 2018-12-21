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

var year = prompt('Введите год появления стандарта ECMA-262 5.1', '');

if (year == 2011) {
  alert( 'Да вы знаток!' );
} else {
  alert( 'А вот и неправильно!' ); // любое значение, кроме 2011
}