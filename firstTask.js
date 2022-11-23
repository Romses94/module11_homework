/* FIRST TASK

Дан массив. Нужно вывести в консоль количество чётных и нечётных элементов в массиве. Если в массиве есть нулевой элемент, то он учитывается и выводится отдельно. 

При выполнении задания необходимо учесть, что массив может содержать не только числа, но и, например, знаки, null и так далее. 

На этот раз оформите решение в виде функции: постарайтесь дать этой функции корректное название, вызовите функцию, проанализируйте синтаксис.*/

arr = [0, 1, 2, 3, 4, 5, 'test', null, true, undefined, false];
even = [];
odd = [];
zero = [];

function checkNumber(arr, even, odd, zero) {

	for (i = 0; i < arr.length; i++) {
		if (arr[i] % 2 == 0 && arr[i] != 0 && typeof(arr[i]) == "number") {
			even.push(arr[i]);
		}
		else if (arr[i] % 2 == 1 && typeof(arr[i]) == "number") {
			odd.push(arr[i]);
		}
		else if (arr[i] == 0 && typeof(arr[i]) == "number") {
			zero.push(arr[i]);
		}
	}

	console.log("В массиве " + even.length + " чётных числа");
	console.log("В массиве " + odd.length + " нечетных числа");
	console.log("В массиве " + zero.length + " ноль");
}

checkNumber(arr, even, odd, zero);