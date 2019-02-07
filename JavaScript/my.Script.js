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