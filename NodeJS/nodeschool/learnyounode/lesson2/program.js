// console.log(process.argv);
var result = process.argv;

function sumOfArguments(result) {
	var sum = 0;
	for (i = 2; i < result.length; i++) {
		sum += Number(result[i]);
	}

	return sum;
}

var sum = sumOfArguments(result);
console.log(sum);