
function largestOfFour(arr) {
 
  var arrmax=[];
  for(var i in arr){
    var maxnumber=0;
    for(var j in arr[i]){
      
      if(maxnumber<arr[i][j]){
         
        maxnumber=arr[i][j];
      }
    }      
    arrmax.push(maxnumber);

  }
  return arrmax;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
