//Create a function that takes two or more arrays and returns an array of the symmetric difference (△ or ⊕) of the provided arrays.
//Given two sets (for example set A = {1, 2, 3} and set B = {2, 3, 4}), 
//the mathematical term "symmetric difference" of two sets is the set of elements which are in either of the two sets,
// but not in both (A △ B = C = {1, 4}). 
//For every additional symmetric difference you take (say on a set D = {2, 3}),
//you should get the set with elements which are in either of the two the sets but not both (C △ D = {1, 4} △ {2, 3} = {1, 2, 3, 4}).

function sym() {
  var args=[];
  for(var i=0;i<arguments.length;i++){
    args.push(arguments[i]);
  }
  function symDiff(arrayOne,arrayTwo){
    var result=[];
    arrayOne.forEach(function(item){
      if(arrayTwo.indexOf(item)<0 && result.indexOf(item)<0){
        result.push(item);
      }
    });
    arrayTwo.forEach(function(item){
      if(arrayOne.indexOf(item)<0 && result.indexOf(item)<0){
        result.push(item);
      }
    });
     return result;
  }
  return args.reduce(symDiff);
}
sym([1, 2, 3], [5, 2, 1, 4]);
//the symDiff function finds the symmetric differentce between the two sets, it is used as a callback function for the reduce()
