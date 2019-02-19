"use strict";
// типы данных
/*
var str = 'Halk', //строка
    number = 1, //число (простое)
    numberSecond = 2.4, //число (дробное)
    bool = true, //булевые выражения
    undef, //undefined - значение не задано
    nuull = null, // ничего
    obj = {
        prop: 'yo',
        prop: function () {
            
        }
    }; //обект
alert(obj);
*/
/*
//Примитивные и объектные данные. Обертки
var str = 'Halk',
    number = 1,
    numberSecond = 2.4,
    bool = true,
    undef,
    nuull = null;
var obj = {
        prop: 'yo',
        prop: function () {

        }
    },
    regexp = /baba/g,
    func = function () {
        
    },
    arr = [1,2,3];
    console.log(typeof obj);
    console.log(typeof regexp);
    console.log(typeof func);
    console.log(typeof arr);
    */
//Statements (инструкции), expressions (выражения), operators (операторы)
//условные и логические операторы
/*
var num1 = null,
    num2 = 2,
    num3 = 3,
    num4 = 4;
*/
//console.log(true + false);
/*
var age = prompt("Введите ваш возраст");
if (age >=14 && age<=90){
    alert("Guut!")
} else {
    alert("nicht!")
};*/
/*

var i = 0;
while (i <= 3) {
    alert( i );
    i++;
}*/
//код подсчитывает сумму вводимых чисел до тех пор, пока посетитель их вводит, а затем – выдаёт
/*

var sum = 0;

while (true) {

    var value = +prompt("Введите число", '');

    if (!value) break; // (*)

    sum += value;

}
alert( 'Сумма: ' + sum );
*/
/*
for (var i = 2; i <= 10; i++) {
    if (i % 2 == 0) {
        alert( i );
    }
}*/