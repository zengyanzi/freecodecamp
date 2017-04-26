//We'll pass you an array of two numbers. Return the sum of those two numbers and all numbers between them.
function sumAll(arr) {
  var min=Math.min(arr[0],arr[1]);
  var max= Math.max(arr[0],arr[1]);
  var sum=0;
  for(i=min;i<=max;i++){
    sum += i;
  }
  return (sum);
}

sumAll([1, 4]);
