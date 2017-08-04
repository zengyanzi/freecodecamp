//Given an array arr, find element pairs whose sum equal the second argument arg and return the sum of their indices.

//If multiple pairs are possible that have the same numeric elements but different indices, 
//return the smallest sum of indices. Once an element has been used, it cannot be reused to pair with another.

//For example pairwise([7, 9, 11, 13, 15], 20) returns 6. 
//The pairs that sum to 20 are [7, 13] and [9, 11]. 
//We can then write out the array with their indices and values.


function pairwise(arr, arg) {
  var sum=0;
  var pairArr = arr.slice();
  for(var i=0;i<pairArr.length;i++){
    for(j=i+1;j < pairArr.length; j++){
      if(pairArr[i]+pairArr[j]==arg){
        sum+=i+j;
        //Set the indices to NaN so that they can't be used in next iteration
       pairArr[i] = pairArr[j] = NaN;
      }
    }
  }
  return sum;
}

pairwise([1,4,2,3,0,5], 7);
