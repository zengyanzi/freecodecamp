//Find the smallest common multiple of the provided parameters that can be evenly divided by both,
//as well as by all sequential numbers in the range between these parameters.
//The range will be an array of two numbers that will not necessarily be in numerical order.
//e.g. for 1 and 3 - find the smallest common multiple of both 1 and 3 that is evenly divisible by all numbers
//between 1 and 3.

function s(arr){
	var t = arr[0]*arr[1];
	var gcd = calcGCD(arr[0],arr[1])
	return t / gcd;
}
function calcGCD(x,y){
	if (y === 0){
        return x;
    }else{
        return calcGCD(y, x%y);
    }
}

