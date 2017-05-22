//Drop the elements of an array (first argument), starting from the front, until the predicate (second argument) returns true.

//The second argument, func, is a function you'll use to test the first elements of the array to decide if you should drop it or not.



function dropElements(arr, func) {
  // Drop them elements.
  var arrlength=arr.length;
  for(var i=0;i<arrlength;i++){
    if(func(arr[0])){
      break;
    }else{
      arr.shift();
    }
  }
  return arr;
}

dropElements([1, 2, 3], function(n) {return n < 3; });
