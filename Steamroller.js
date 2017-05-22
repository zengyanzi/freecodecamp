//Flatten a nested array. You must account for varying levels of nesting.

function steamrollArray(arr) {
  // I'm a steamroller, baby
  var temp=[];
//test array
  var flatten=function(arg){
    if(!Array.isArray(arg)){
      temp.push(arg);
    }else{
      for(var i in arg){
        flatten(arg[i]);
      }
    }
  };
  arr.forEach(flatten);
  return temp;
}

steamrollArray([1, [2], [3, [[4]]]]);
