/* SECOND TASK 

Напишите функцию, которая принимает на входе любое число (но не больше 1 000), определяет, является ли оно простым, и выводит, простое число или нет. Если введено больше 1 000, то выводится сообщение, что данные неверны. Обратите внимание на числа 0 и 1. */

function simple(a) {
    if (!Number.isInteger(a) || a < 2 || a > 1000) return "данные неверны";
 
    let b = Math.sqrt(a);
    for (let i = 2; i <= b; i++)
		if (a % i === 0) return "не простое число";
 
	    return "простое число";
}
 
console.log(simple(555));
console.log(simple(7));